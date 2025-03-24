import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from './components/layout/Header/Header';
import Footer from './components/layout/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Whatsapp from './components/layout/Whatsapp-Contact/Whatsapp';

const Layout = () => {
  const location = useLocation();

  const hideWhatsappOnPages = ["/contact"];
  const shouldHideWhatsapp = hideWhatsappOnPages.includes(location.pathname);

  return (
    <div id='layout-container' className="flex flex-col justify-center items-center min-h-screen">
      <Header />
      {!shouldHideWhatsapp && <Whatsapp />}
      <main id='content' className='flex flex-row flex-grow items-center justify-center'>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
