import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Dashboard from './pages/Dashboard'
import UrlAnalysis from './pages/UrlAnalysis'
import NotFound from './pages/NotFound'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="url-analysis" element={<UrlAnalysis />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
