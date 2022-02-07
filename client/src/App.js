import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// Components/Pages
import Header from './components/Header'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div>
      <Header />
      <main class="container app bg-dark text-white">
        <Routes>
          <Route path='/' element={ <HomePage /> } />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
