import { StrictMode } from "react" // React utility for highlighting potential problems
import { createRoot } from "react-dom/client" // React DOM client for rendering
import "./index.css" // Imports global styles, including Tailwind base styles
import App from "./App.tsx" // Imports the main application component

// Get the root DOM element where the React app will be mounted
const rootElement = document.getElementById("root")

// Ensure the root element exists before attempting to render
if (rootElement) {
  // Create a React root for the container element
  createRoot(rootElement).render(
    // Enable React's Strict Mode for development checks
    <StrictMode>
      {/* Render the main application component */}
      <App />
    </StrictMode>
  )
} else {
  // Log an error if the root element is not found
  console.error("Failed to find the root element. The React app cannot be mounted.")
}
