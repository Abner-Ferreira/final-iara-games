import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Historico from '../pages/historico/Historico';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/jogos" element={<Home />} />
      <Route path="/historico" element={<Historico />} />
    </Routes>
  );
};

export default Rotas;
