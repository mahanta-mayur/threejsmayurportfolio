import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import '@fortawesome/fontawesome-free/css/all.css';


// ... (previous imports and code)

// ... (previous imports and code)

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex flex-col sm:flex-row items-center py-3 fixed top-0 z-20 bg-neutral-950 bg-opacity-50`}>
      <div className='flex flex-1 justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Mayur Mahanta&nbsp;
          </p>
        </Link>
        <div className='hidden sm:flex justify-end items-center gap-10'>
          <ul className='list-none sm:flex flex-row gap-6'>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={`${
                  active === link.title
                    ? 'text-secondary'
                    : 'text-white hover:text-secondary'
                } text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <img
          src={toggle ? close : menu}
          alt='menu'
          className='w-[28px] h-[28px] object-contain cursor-pointer sm:hidden'
          onClick={() => setToggle(!toggle)}
        />
      </div>
      <div
        className={`${
          !toggle ? 'hidden' : 'flex'
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl sm:hidden`}
      >
        <ul className='list-none flex flex-col gap-4'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? 'text-secondary'
                  : 'text-white hover:text-secondary'
              } font-poppins font-medium cursor-pointer text-[16px]`}
              onClick={() => {
                setToggle(!toggle);
                setActive(link.title);
              }}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <div className='media-icons flex flex-col gap-2 w-full'> {/* Kept for mobile layout */}
            <a href="https://github.com/mahanta-mayur">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/maymah/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.instagram.com/mayur_mahanta_/">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
