import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

// Components/Pages
import Header from './components/Header'
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import Users from './pages/Users';
import Orders from './pages/Orders';
import Avatars from './pages/Avatars';
import Cosmetics from './pages/Cosmetics';
import OrderCosmetics from './pages/OrderCosmetics';
import UserCosmetics from './pages/UserCosmetics';
import OrderDetails from './pages/OrderDetails';
import EditUser from './pages/EditUser';

function App() {

  const [userToEdit, setUserToEdit] = useState()
  const [avatarToEdit, setAvatarToEdit] = useState([])
  const [orderToEdit, setOrderToEdit] = useState([])
  const [cosmeticToEdit, setCosmeticToEdit] = useState([])

  {console.log(userToEdit)}

  return (
    <div>
      <Header />
      <main class="container app">
        <Routes>
          <Route path='/' element={ <HomePage /> } />
          <Route path='/users' element={ <Users setUserToEdit={setUserToEdit} /> } />
          <Route path='/edit-user' element={ <EditUser userToEdit={userToEdit} /> } />
          <Route path='/orders' element={ <Orders setOrderToEdit={setOrderToEdit} /> } />
          <Route path='/avatars' element={ <Avatars setAvatarToEdit={setAvatarToEdit} /> } />
          <Route path='/cosmetics' element={ <Cosmetics setCosmeticToEdit={setCosmeticToEdit} /> } />
          <Route path='/order-details' element={ <OrderDetails /> } />
          <Route path='/order-cosmetics' element={ <OrderCosmetics /> } />
          <Route path='/user-cosmetics' element={ <UserCosmetics /> } />
        </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
