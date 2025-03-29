import { Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'

function App() {


  return (
    <>
     <Header />
     <main className="main">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Home />} />
        
      </Routes>
     </main>
     <Footer />
    </>
  )
}

export default App
