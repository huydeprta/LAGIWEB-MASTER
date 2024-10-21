// src/layouts/MainLayout.jsx
import React from 'react';
import Header from '../layouts/header/header';
import Footer from '../layouts/footer/footer';

import { useEffect, useState } from 'react';

const MainLayout = ({ children }) => {
  const [footerZIndex, setFooterZIndex] = useState(-1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;

      if (scrollPercent >= 85) {
        setFooterZIndex(0);
      } else {
        setFooterZIndex(-1);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Header />
      <div className='content'>{children}</div>
      <footer className='sticky bottom-0' style={{ zIndex: footerZIndex }}>
        <Footer />
      </footer>
    </>
  );
};

export default MainLayout;
