export const handleCopyLatex = (latexInput: string) => {
  navigator.clipboard
    .writeText(latexInput)
    .then(() => {
      // Optional: Show a success message to the user
      alert("LaTeX code copied to clipboard!")
    })
    .catch((err) => {
      console.error("Failed to copy LaTeX code: ", err)
      alert("Failed to copy LaTeX code.")
    })
}

export const handleCopyRenderedEquation = (equationElement: HTMLDivElement | null) => {
  if (equationElement) {
    // Use a library like html-to-image or similar if direct clipboard copy of element is needed
    // For simplicity, let's copy the innerHTML or text content
    // A more robust solution might involve rendering the equation to a canvas and copying as image
    navigator.clipboard
      .writeText(equationElement.innerText || equationElement.innerHTML) // Adjust as needed
      .then(() => {
        alert("Equation copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy equation: ", err)
        alert("Failed to copy equation.")
      })
  }
}
