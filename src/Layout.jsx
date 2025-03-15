import React from 'react';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './styles/Layout.css';
import Whatsapp from './components/layout/Whatsapp-Contact/Whatsapp';

const Layout = () => {
  return (
    <div id='layout-container' className="flex flex-col justify-center items-center min-h-screen">
      <Header />
      <Whatsapp />
      <main id='content' className='flex flex-row flex-grow items-center justify-center mt-40'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
