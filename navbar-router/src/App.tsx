import React from 'react';
import Home from './pages/home';
import Localização from './pages/localizacao';
import Contato from './pages/contato';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/localizacao">Localização</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/localizacao" element={<Localização />}></Route>
        <Route path="/contato" element={<Contato />}></Route>
      </Routes>
    </Router>
  );
}

export default App;