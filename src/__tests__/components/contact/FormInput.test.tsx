import FormInput from "@/components/contact/components/FormInput"
import { fireEvent, render, screen } from "@testing-library/react"

describe("FormInput", () => {
  const defaultProps = {
    id: "test-input",
    name: "test",
    label: "Test Label",
    value: "",
    placeholder: "Test placeholder",
    onChange: jest.fn(),
  }

  it("renders with required props", () => {
    render(<FormInput {...defaultProps} />)

    expect(screen.getByLabelText("Test Label")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("Test placeholder")).toBeInTheDocument()
  })

  it("handles input changes", () => {
    const onChange = jest.fn()
    render(<FormInput {...defaultProps} onChange={onChange} />)

    const input = screen.getByLabelText("Test Label")
    fireEvent.change(input, { target: { value: "test value" } })

    expect(onChange).toHaveBeenCalled()
  })

  it("renders as required when specified", () => {
    render(<FormInput {...defaultProps} required={true} />)

    const input = screen.getByLabelText("Test Label")
    expect(input).toBeRequired()
  })

  it("renders with different input types", () => {
    render(<FormInput {...defaultProps} type="email" />)

    const input = screen.getByLabelText("Test Label")
    expect(input).toHaveAttribute("type", "email")
  })

  it("displays the provided value", () => {
    render(<FormInput {...defaultProps} value="test value" />)

    const input = screen.getByLabelText("Test Label")
    expect(input).toHaveValue("test value")
  })
})
