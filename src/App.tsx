import { useState, useEffect, useRef } from "react"
import katex from "katex"
import "katex/dist/katex.min.css"
import { handleCopyLatex, handleCopyRenderedEquation } from "./utils/copyUtils"

function App() {
  const [latexInput, setLatexInput] = useState("\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}")
  const equationRef = useRef<HTMLDivElement>(null)
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or default to false
    return localStorage.getItem("darkMode") === "true"
  })

  // Set theme class on body element
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode)
    localStorage.setItem("darkMode", darkMode.toString())
  }, [darkMode])

  useEffect(() => {
    if (equationRef.current) {
      try {
        katex.render(latexInput, equationRef.current, {
          throwOnError: false,
        })
      } catch (error) {
        console.error("KaTeX rendering error:", error)
        equationRef.current.textContent = "Error rendering LaTeX"
      }
    }
  }, [latexInput])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8 
      ${darkMode ? "bg-gradient-to-br from-slate-900 to-slate-800 text-gray-100" : "bg-gradient-to-br from-blue-50 to-white text-gray-800"}`}
    >
      <div
        className={`max-w-2xl w-full p-8 rounded-xl shadow-sm space-y-8 transition-all duration-300 hover:shadow-md 
        ${darkMode ? "bg-slate-800 border border-slate-700" : "bg-white border border-blue-100"}`}
      >
        {/* Theme Toggle Button */}
        <div className="flex justify-end -mt-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full transition-colors duration-200 
              ${darkMode ? "bg-slate-700 text-blue-300 hover:bg-slate-600" : "bg-blue-50 text-blue-600 hover:bg-blue-100"}`}
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        <h1
          className={`text-3xl font-bold text-center text-transparent bg-clip-text 
          ${darkMode ? "bg-gradient-to-r from-blue-400 to-sky-300" : "bg-gradient-to-r from-blue-600 to-sky-500"}`}
        >
          LaTeX to Equation Converter
        </h1>

        <div className="space-y-3">
          <label
            htmlFor="latexInput"
            className={`text-sm font-medium flex items-center gap-2
            ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className={`h-4 w-4 ${darkMode ? "text-blue-400" : "text-blue-500"}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 0L11.828 15.5 9 16l.5-2.828 9.086-9.086z" />
            </svg>
            Enter LaTeX code
          </label>
          <div className="relative">
            <textarea
              id="latexInput"
              value={latexInput}
              onChange={(e) => setLatexInput(e.target.value)}
              placeholder="Enter LaTeX code here..."
              rows={4}
              className={`w-full p-4 rounded-lg focus:ring-2 shadow-sm font-mono text-sm transition-all duration-200
                ${darkMode ? "bg-slate-700 border-slate-600 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-gray-400" : "bg-blue-50/30 border-blue-200 focus:ring-blue-300 focus:border-blue-300 text-gray-800 placeholder-gray-500"}`}
            />
          </div>
        </div>

        <div className="space-y-3">
          <h2
            className={`text-xl font-semibold text-transparent bg-clip-text flex items-center gap-2
            ${darkMode ? "bg-gradient-to-r from-blue-400 to-sky-300" : "bg-gradient-to-r from-blue-700 to-sky-600"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Rendered Equation
          </h2>
          <div
            ref={equationRef}
            className={`p-6 rounded-lg min-h-[80px] flex items-center justify-center text-xl overflow-x-auto shadow-sm transition-all duration-300 hover:shadow-md
              ${darkMode ? "bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600 text-white" : "bg-gradient-to-r from-blue-50/50 to-white border border-blue-100 text-black"}`}
            style={{ fontSize: "1.6em" }}
          >
            {/* KaTeX rendered output will appear here */}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <button
            onClick={() => handleCopyLatex(latexInput)}
            className={`px-5 py-2.5 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out flex items-center gap-2 shadow-sm
              ${darkMode ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:ring-blue-600 focus:ring-offset-slate-800" : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 focus:ring-blue-500 focus:ring-offset-white"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy LaTeX
          </button>
          <button
            onClick={() => handleCopyRenderedEquation(equationRef.current)}
            className={`px-5 py-2.5 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out flex items-center gap-2 shadow-sm
              ${darkMode ? "bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 focus:ring-sky-600 focus:ring-offset-slate-800" : "bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 focus:ring-sky-500 focus:ring-offset-white"}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
            Copy Equation
          </button>
        </div>
      </div>
      <div className={`mt-4 text-xs ${darkMode ? "text-blue-400/70" : "text-blue-400/70"}`}>Create beautiful mathematical equations with LaTeX syntax</div>
    </div>
  )
}

export default App
