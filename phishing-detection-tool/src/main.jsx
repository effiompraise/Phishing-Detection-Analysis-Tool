import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="w-full min-h-screen m-0 p-0 overflow-x-hidden">
    <App />
    </div>
  </StrictMode>,
)
