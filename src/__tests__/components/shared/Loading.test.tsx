import Loading from "@/components/shared/Loading"
import { render } from "@testing-library/react"

describe("Loading", () => {
  it("renders loading spinner", () => {
    const { container } = render(<Loading />)

    // Check if spinner element exists
    expect(container.querySelector(".animate-spin")).toBeInTheDocument()

    // Check if container has correct classes
    expect(container.firstChild).toHaveClass(
      "flex",
      "items-center",
      "justify-center",
      "min-h-screen"
    )
  })
})
