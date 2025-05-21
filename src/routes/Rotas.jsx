import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import JogosResgatados from '../pages/jogos-resgatados/JogosResgatados';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/jogos" element={<Home />} />
      <Route path="/jogos-resgatados" element={<JogosResgatados />} />
    </Routes>
  );
};

export default Rotas;
