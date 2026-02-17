import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navigation from './components/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'

export default function App() {
  return (
    <div className="page">
      <Navigation />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  )
}
