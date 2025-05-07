import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/home/Home';
import Carrinho from '../pages/carrinho/Carrinho';

const Rotas = () => {
  return (
    <Routes>
      <Route path="/jogos" element={<Home />} />
      <Route path="/carrinho" element={<Carrinho />} />
    </Routes>
  );
};

export default Rotas;
