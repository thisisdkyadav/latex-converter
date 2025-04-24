import React from "react"

interface LatexInputProps {
  latexInput: string
  setLatexInput: React.Dispatch<React.SetStateAction<string>>
  darkMode: boolean
}

/**
 * Component for the LaTeX input textarea.
 */
const LatexInput: React.FC<LatexInputProps> = ({ latexInput, setLatexInput, darkMode }) => {
  return (
    <div className="space-y-3">
      <label
        htmlFor="latexInput"
        className={`text-sm font-medium flex items-center gap-2
        ${darkMode ? "text-gray-300" : "text-gray-700"}`}
      >
        {/* Input Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${darkMode ? "text-blue-400" : "text-blue-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 0L11.828 15.5 9 16l.5-2.828 9.086-9.086z" />
        </svg>
        Enter LaTeX code
      </label>
      <div className="relative">
        {/* Textarea for LaTeX input */}
        <textarea
          id="latexInput"
          value={latexInput}
          onChange={(e) => setLatexInput(e.target.value)} // Update state on change
          placeholder="Enter LaTeX code here..."
          rows={4}
          className={`w-full p-4 rounded-lg focus:ring-2 shadow-sm font-mono text-sm transition-all duration-200
            ${darkMode ? "bg-slate-700 border-slate-600 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400" : "bg-blue-50/30 border-blue-200 focus:ring-blue-300 focus:border-blue-300 text-gray-800 placeholder-gray-500"}`}
        />
      </div>
    </div>
  )
}

export default LatexInput
