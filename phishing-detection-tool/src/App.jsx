import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Dashboard from './pages/Dashboard'
import UrlAnalysis from './pages/UrlAnalysis'
import EmailAnalysis from './pages/EmailAnalysis'
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="url-analysis" element={<UrlAnalysis />} />
          <Route path="email-analysis" element={<EmailAnalysis />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
    </>
  )
}

export default App