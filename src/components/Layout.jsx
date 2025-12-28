import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header className='nav p-3 text-dark bg-dark'>
        <nav className='nav-links d-flex align-items-center gap-3 '>
          <img src="https://reactjs.org/logo-og.png" alt="Logo" width="40" height="40" className='me-2'/>
          <Link to="/" className='text-decoration-none'>Home</Link>
          <Link to="/about" className='text-decoration-none'>add project</Link>
          <Link to="/contact" className='text-decoration-none'>Contact</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
