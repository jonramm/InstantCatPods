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
import EditUser from './pages/EditUser';
import EditAvatar from './pages/EditAvatar';
import EditCosmetic from './pages/EditCosmetic';
import EditOrder from './pages/EditOrder';
import ViewOrder from './pages/ViewOrder';

function App() {

  const [userToEdit, setUserToEdit] = useState()
  const [avatarToEdit, setAvatarToEdit] = useState()
  const [orderToEdit, setOrderToEdit] = useState()
  const [cosmeticToEdit, setCosmeticToEdit] = useState()
  const [orderToView, setOrderToView] = useState()

  return (
    <div>
      <Header />
      <main class="container app">
        <Routes>
          {/* Home */}
          <Route path='/' element={ <HomePage /> } />
          {/* Users Routes */}
          <Route path='/users' element={ <Users setUserToEdit={setUserToEdit} /> } />
          <Route path='/edit-user' element={ <EditUser userToEdit={userToEdit} /> } />
          {/* Orders Routes */}
          <Route path='/orders' element={ <Orders setOrderToEdit={setOrderToEdit} setOrderToView={setOrderToView}/> } />
          <Route path='/edit-order' element={ <EditOrder orderToEdit={orderToEdit} /> } />
          <Route path='/view-order' element={ <ViewOrder orderToView={orderToView} />} />
          {/* Avatars Routes */}
          <Route path='/avatars' element={ <Avatars setAvatarToEdit={setAvatarToEdit} /> } />
          <Route path='/edit-avatar' element={ <EditAvatar avatarToEdit={avatarToEdit} /> } />
          {/* Cosmetics Routes */}
          <Route path='/cosmetics' element={ <Cosmetics setCosmeticToEdit={setCosmeticToEdit} /> } />
          <Route path='/edit-cosmetic' element={ <EditCosmetic cosmeticToEdit={cosmeticToEdit} /> } />
          {/* Relationship Table Routes */}
          <Route path='/order-cosmetics' element={ <OrderCosmetics /> } />
          <Route path='/user-cosmetics' element={ <UserCosmetics /> } />
        </Routes>
        </main>
      <Footer />
    </div>
  );
}

export default App;
