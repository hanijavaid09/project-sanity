"use client"
/* eslint-disable @typescript-eslint/no-unused-vars */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Link from "next/link";
import { useState } from 'react';

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <main className='border-b-2 bg-neutral-100'>
      <div className='w-full flex items-center justify-center bg-white h-[70px] px-4 md:px-6 lg:px-8'>
        {/* all content */}
        <div className='w-full max-w-[1200px] flex items-center justify-between h-[50px]'>

          <div>
            {/* logo */}
            <h1 className='text-3xl lg:text-4xl font-bold ml-1'>Shop.Co</h1>
          </div>

          {/* links - animated sliding nav */}
          <div
            className={`${
              open ? "translate-x-0" : "-translate-x-full"
            } md:flex md:translate-x-0 md:static w-[70%] md:w-auto bg-gray-800 md:bg-transparent absolute top-0 left-0 h-screen md:h-auto z-40 transition-transform duration-500 ease-in-out`}
          >
            <ul className='flex flex-col md:flex-row gap-6 md:gap-5 lg:gap-8 text-lg md:text-sm lg:text-md text-white md:text-black md:items-center'>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/selling">Shop</Link>
              </li>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/contact">On Sale</Link>
              </li>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/about">New Arrivals</Link>
              </li>
              <li className='p-4 hover:underline underline-offset-2'>
                <Link href="/signup">Brands</Link>
              </li>
            </ul>
          </div>

          <div className='flex gap-4 items-center'>
            {/* Search bar - hidden on small screens */}
            <div className='hidden lg:flex w-64 bg-gray-200 rounded-md items-center'>
              <input
                className='w-full p-2 rounded-md bg-gray-200 outline-none'
                type="search"
                placeholder='Search for products...'
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="text-lg ml-2"
              />
            </div>

            {/* Icons */}
            <FontAwesomeIcon icon={faHeart} className='text-xl'></FontAwesomeIcon>
            <Link href={"./Card"}><FontAwesomeIcon icon={faShoppingCart} className='text-gray-700 text-xl'></FontAwesomeIcon></Link>

            {/* Toggle Button for mobile */}
            <button
              className="text-black block md:hidden text-2xl z-50"
              onClick={toggle}
            >
              ☰
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Header;
