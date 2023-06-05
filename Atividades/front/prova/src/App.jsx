import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Questoes from './components/Questoes'
import Resultados from './components/Resultados'

function App() {


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Questoes />} />
          <Route path="/resultados" element={<Resultados />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
