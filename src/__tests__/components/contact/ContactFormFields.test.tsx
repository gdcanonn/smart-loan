import ContactFormFields from "@/components/contact/components/ContactFormFields"
import { fireEvent, render, screen } from "@testing-library/react"

// Mock the translations hook
jest.mock("@/utils/i18n", () => ({
  useTranslations: () => ({
    t: {
      contact: {
        form: {
          name: "Full Name",
          email: "Email Address",
          phone: "Phone Number",
          message: "Your Message",
          submit: "Send Message",
          placeholders: {
            name: "Enter your full name",
            email: "Enter your email address",
            phone: "Enter your phone number",
            message: "How can we help you?",
          },
        },
      },
    },
  }),
}))

describe("ContactFormFields", () => {
  it("renders all form fields correctly", () => {
    render(<ContactFormFields />)

    // Check if all form fields are rendered
    expect(screen.getByLabelText(/Full Name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Your Message/i)).toBeInTheDocument()
  })

  it("handles form input changes", () => {
    render(<ContactFormFields />)

    // Get form fields
    const nameInput = screen.getByLabelText(/Full Name/i)
    const emailInput = screen.getByLabelText(/Email Address/i)
    const phoneInput = screen.getByLabelText(/Phone Number/i)
    const messageInput = screen.getByLabelText(/Your Message/i)

    // Simulate user input
    fireEvent.change(nameInput, { target: { value: "John Doe" } })
    fireEvent.change(emailInput, { target: { value: "john@example.com" } })
    fireEvent.change(phoneInput, { target: { value: "1234567890" } })
    fireEvent.change(messageInput, { target: { value: "Test message" } })

    // Check if inputs have the correct values
    expect(nameInput).toHaveValue("John Doe")
    expect(emailInput).toHaveValue("john@example.com")
    expect(phoneInput).toHaveValue("1234567890")
    expect(messageInput).toHaveValue("Test message")
  })

  it("submits the form with correct data", () => {
    const consoleSpy = jest.spyOn(console, "log")
    render(<ContactFormFields />)

    // Fill out the form
    fireEvent.change(screen.getByLabelText(/Full Name/i), {
      target: { value: "John Doe" },
    })
    fireEvent.change(screen.getByLabelText(/Email Address/i), {
      target: { value: "john@example.com" },
    })
    fireEvent.change(screen.getByLabelText(/Phone Number/i), {
      target: { value: "1234567890" },
    })
    fireEvent.change(screen.getByLabelText(/Your Message/i), {
      target: { value: "Test message" },
    })

    // Submit the form
    fireEvent.click(screen.getByText(/Send Message/i))

    // Check if form data was logged correctly
    expect(consoleSpy).toHaveBeenCalledWith({
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      message: "Test message",
    })

    consoleSpy.mockRestore()
  })
})
