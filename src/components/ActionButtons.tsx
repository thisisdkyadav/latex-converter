import React, { RefObject } from "react"
import { handleCopyLatex, handleCopyRenderedEquation } from "../utils/copyUtils" // Utility functions for copying content

interface ActionButtonsProps {
  latexInput: string
  equationRef: RefObject<HTMLDivElement | null> // Allow null for initial ref value
  darkMode: boolean
}

/**
 * Component containing the action buttons (Copy LaTeX, Copy Equation).
 */
const ActionButtons: React.FC<ActionButtonsProps> = ({ latexInput, equationRef, darkMode }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 pt-2">
      {/* Button to copy the raw LaTeX code */}
      <button
        onClick={() => handleCopyLatex(latexInput)} // Call copy utility function
        className={`px-5 py-2.5 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out flex items-center gap-2 shadow-sm
          ${darkMode ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:ring-blue-600 focus:ring-offset-slate-800" : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:ring-blue-500 focus:ring-offset-white"}`}
      >
        {/* Copy Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
        Copy LaTeX
      </button>
      {/* Button to copy the rendered equation (as text) */}
      <button
        onClick={() => handleCopyRenderedEquation(equationRef.current)} // Call copy utility function
        className={`px-5 py-2.5 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out flex items-center gap-2 shadow-sm
          ${darkMode ? "bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 focus:ring-sky-600 focus:ring-offset-slate-800" : "bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 focus:ring-sky-500 focus:ring-offset-white"}`}
      >
        {/* Equation Copy Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        Copy Equation
      </button>
    </div>
  )
}

export default ActionButtons
