import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';

import Home from './pages/home'
import Quadrado from './pages/quadrado';
import Triangulo from './pages/triangulo';
import Retangulo from './pages/retangulo';
import Trapesio from './pages/trapesio';
import Circulo from './pages/circulo';

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={ <Home /> } path="/" exact />
            <Route element ={ <Quadrado/> }  path="/quadrado" />
            <Route element ={ <Triangulo/> }  path="/triangulo" />
            <Route element ={ <Retangulo/> }  path="/retangulo" />
            <Route element ={ <Trapesio/> }  path="/trapesio" />
            <Route element ={ <Circulo/> }  path="/circulo" />
        </Routes>
        <div>
          <a href='https://forms.gle/CJqewkoxvPUsE96h7'>Avaliação</a>
        </div>
    </BrowserRouter>
  );
}

export default App;
