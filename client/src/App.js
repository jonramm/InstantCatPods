import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';

// Components/Pages
import Header from './components/Header'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Users from './pages/Users';

function App() {
  return (
    <div>
      <Header />
      <main class="container app">
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/users' element={ <Users /> } />
          {/* <Route path='/avatars' element={ <Avatars /> } />
          <Route path='/cosmetics' element={ <Cosmetics /> } />
          <Route path='/orders' element={ <Orders /> } />
          <Route path='/order-cosmetics' element={ <OrderCosmetics /> } />
          <Route path='/user-cosmetics' element={ <UserCosmetics /> } /> */}
        </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
