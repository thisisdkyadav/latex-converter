import React, { RefObject } from "react"

interface EquationOutputProps {
  equationRef: RefObject<HTMLDivElement | null> // Allow null for initial ref value
  darkMode: boolean
}

/**
 * Component to display the rendered KaTeX equation.
 */
const EquationOutput: React.FC<EquationOutputProps> = ({ equationRef, darkMode }) => {
  return (
    <div className="space-y-3">
      <h2
        className={`text-xl font-semibold text-transparent bg-clip-text flex items-center gap-2
        ${darkMode ? "bg-gradient-to-r from-blue-400 to-sky-300" : "bg-gradient-to-r from-blue-700 to-sky-600"}`}
      >
        {/* Output Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Rendered Equation
      </h2>
      {/* Container for the KaTeX rendered output */}
      <div
        ref={equationRef} // Assign ref to access this element
        className={`p-6 rounded-lg min-h-[80px] flex items-center justify-center text-xl overflow-x-auto shadow-sm transition-all duration-300 hover:shadow-md
          ${darkMode ? "bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 text-white" : "bg-gradient-to-r from-blue-50/50 to-white border border-blue-100 text-black"}`}
        style={{ fontSize: "1.6em" }} // Increase font size for better readability
      >
        {/* KaTeX output is dynamically inserted here by the useEffect hook in App.tsx */}
      </div>
    </div>
  )
}

export default EquationOutput
