/**
 * Copies the provided LaTeX string to the clipboard.
 * @param latexInput The LaTeX string to copy.
 */
export const handleCopyLatex = (latexInput: string) => {
  navigator.clipboard
    .writeText(latexInput)
    .then(() => {
      // Notify user of successful copy
      alert("LaTeX code copied to clipboard!")
    })
    .catch((err) => {
      // Log error and notify user of failure
      console.error("Failed to copy LaTeX code: ", err)
      alert("Failed to copy LaTeX code.")
    })
}

/**
 * Copies the text content of the rendered equation element to the clipboard.
 * Note: This copies the text representation, not an image.
 * @param equationElement The HTMLDivElement containing the rendered equation.
 */
export const handleCopyRenderedEquation = (equationElement: HTMLDivElement | null) => {
  if (equationElement) {
    // Attempt to copy the inner text or HTML of the element
    navigator.clipboard
      .writeText(equationElement.innerText || equationElement.innerHTML)
      .then(() => {
        // Notify user of successful copy
        alert("Equation copied to clipboard!")
      })
      .catch((err) => {
        // Log error and notify user of failure
        console.error("Failed to copy equation: ", err)
        alert("Failed to copy equation.")
      })
  }
}
