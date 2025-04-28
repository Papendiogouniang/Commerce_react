import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Slide from './components/Slide';

import Boutique from './pages/Boutique';
import Apropos from './pages/Apropos';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Jordan from './pages/Jordan';

function Home() {
  return (
    <>
      <Slide />
      <Boutique />
      <Jordan />
      <Apropos />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router> {/* Fournit le contexte de navigation */}
      <Navbar /> {/* Barre de navigation présente sur toutes les pages */}

      {/* Définition des routes de l'application */}
      <Routes>
        {/* Page d'accueil */}
        <Route path="/" element={<Home />} />

        {/* Pages individuelles accessibles via leur URL */}
        <Route path="/boutique" element={<Boutique />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jordan" element={<Jordan />} />
        
        {/* Page produit dynamique : utilise un paramètre URL (ex : /product/1) */}
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
