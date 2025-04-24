import { useState, useEffect, useRef } from "react" // React hooks for state, side effects, and refs
import katex from "katex" // KaTeX library for rendering LaTeX
import "katex/dist/katex.min.css" // KaTeX default CSS styles
// Import newly created components
import DarkModeToggle from "./components/DarkModeToggle"
import LatexInput from "./components/LatexInput"
import EquationOutput from "./components/EquationOutput"
import ActionButtons from "./components/ActionButtons"

/**
 * Main application component for the LaTeX to Equation Converter.
 * Orchestrates state and renders child components.
 */
function App() {
  // State for the LaTeX input string
  const [latexInput, setLatexInput] = useState("\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}")
  // Ref to access the DOM element where the equation is rendered
  const equationRef = useRef<HTMLDivElement>(null)
  // State for managing dark mode preference
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode state from localStorage, defaulting to false (light mode)
    return localStorage.getItem("darkMode") === "true"
  })

  // Effect to toggle the 'dark' class on the body and save preference to localStorage
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode)
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode]) // Re-run effect when darkMode state changes

  // Effect to render the LaTeX input using KaTeX whenever the input changes
  useEffect(() => {
    if (equationRef.current) {
      try {
        // Render the LaTeX string inside the referenced div
        katex.render(latexInput, equationRef.current, {
          throwOnError: false, // Prevent KaTeX from throwing errors, display error message instead
        })
      } catch (error) {
        // Log any KaTeX rendering errors and display a message in the output area
        console.error("KaTeX rendering error:", error)
        if (equationRef.current) {
          // Check ref again inside catch
          equationRef.current.textContent = "Error rendering LaTeX"
        }
      }
    }
  }, [latexInput]) // Re-run effect when latexInput state changes

  return (
    // Main container with dynamic background based on dark mode
    <div
      className={`min-h-screen transition-colors duration-300 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 
      ${darkMode ? "bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100" : "bg-gradient-to-br from-blue-50 to-white text-gray-800"}`}
    >
      {/* Content wrapper with dynamic styling for dark mode */}
      <div
        className={`max-w-2xl w-full p-8 rounded-xl shadow-sm space-y-8 transition-all duration-300 hover:shadow-md 
        ${darkMode ? "bg-slate-800 border border-slate-700" : "bg-white border border-blue-100"}`}
      >
        {/* Dark Mode Toggle Button */}
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Application Title */}
        <h1
          className={`text-3xl font-bold text-center text-transparent bg-clip-text 
          ${darkMode ? "bg-gradient-to-r from-blue-400 to-sky-300" : "bg-gradient-to-r from-blue-600 to-sky-500"}`}
        >
          LaTeX to Equation Converter
        </h1>

        {/* LaTeX Input Section */}
        <LatexInput latexInput={latexInput} setLatexInput={setLatexInput} darkMode={darkMode} />

        {/* Rendered Equation Section */}
        <EquationOutput equationRef={equationRef} darkMode={darkMode} />

        {/* Action Buttons Section */}
        <ActionButtons latexInput={latexInput} equationRef={equationRef} darkMode={darkMode} />
      </div>
      {/* Footer text */}
      <div className={`mt-4 text-xs ${darkMode ? "text-blue-400/70" : "text-blue-400/70"}`}>Create beautiful mathematical equations with LaTeX syntax</div>
    </div>
  )
}

export default App // Export the App component as the default export
