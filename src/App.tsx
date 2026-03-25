import { BrowserRouter as Router, Route, Routes, Link } from 'react-router';


import './App.css'
import Favoritos from './favoritos'
import Home from './home'
import Original from './original'
import Informativa from './informativa'
import Usuario from './usuario'
import Equipo from './equipo';

function App() {

  return (
    <>
    <Router>
      <nav className="c-menu">
        <Link to="/favoritos">favoritos</Link>
        <Link to="/informativa">informativa</Link>
        <Link to="/home">home</Link>
        <Link to="/original">original</Link>
        <Link to="/usuario">usuario</Link>
        <Link to="/equipo">equipo</Link>
      </nav>
    

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorito" element={<Favoritos />} />
      <Route path="/original" element={<Original />} />
      <Route path="/informativa" element={<Informativa />} />
      <Route path="/usuario" element={<Usuario />} />
      <Route path="/equipo" element={<Equipo />} />
    </Routes>
    </Router>


     <Informativa />
     <Favoritos />
     <Home />
     <Original />
     <Usuario />
     <Equipo />
    </>
  )
}

export default App
