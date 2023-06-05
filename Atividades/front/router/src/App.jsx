import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DPO from './pages/DPO'
import Faculdade from './pages/Faculdade'
import Home from './pages/Home'
import Noticias from './pages/Noticias'
import Navbar from './pages/Navbar'


function App() {

  return (
    <>
      <BrowserRouter>
        <h1>titulo</h1>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/dpo" element={<DPO />} />
          <Route path="/faculdade" element={<Faculdade />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
