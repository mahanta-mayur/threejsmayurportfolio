import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';
import '@fortawesome/fontawesome-free/css/all.css';


// ... (previous imports and code)

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-red`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
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
            <span className='sm:block hidden'>| &nbsp; Full Stack Data Engineer</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
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
          <div className='media-icons flex items-center gap-4 pl-4 pr-12 w-[4px]'> {/* Added padding */}
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
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
      >
        <ul className='list-none flex justify-end items-start flex-col gap-4'>
          <div className='media-icons flex flex-col gap-1 w-full'> {/* Updated classes */}
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
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;
