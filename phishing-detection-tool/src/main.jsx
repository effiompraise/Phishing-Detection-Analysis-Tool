import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './components/common/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="w-full min-h-screen m-0 p-0 overflow-x-hidden">
    <App />
    </div>
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
    </div>
  </StrictMode>,
)
