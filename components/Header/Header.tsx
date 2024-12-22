'use client';

import { useRef, useState } from 'react';

import Link from 'next/link';

// hooks
import useClickOutside from '@hooks/useClickOutside';

// components
import Dropdown from '@components/Dropdown/Dropdown';
import DropdownItem from '@components/Dropdown/DropdownItem';
import ProfilePhoto from '@components/Profile/ProfilePhoto';

const Header: React.FC = () => {
  const wrapperRef = useRef<any>(null);

  const [menu, setMenu] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);

  /**
   * This is a functional component for the Header.
   * It uses the useClickOutside hook to handle click events outside the component.
   * It also manages the state of the menu and dropdown.
   */
  useClickOutside(wrapperRef, () => {
    setDropdown(false);
  });

  /**
   * Toggles the menu state.
   */
  const menuState = (): void => {
    setMenu((state) => !state);
  };

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <Link href='/'>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'>
              <path d='M 9 16 C 6.8026661 16 5 17.802666 5 20 L 5 60 C 5 62.197334 6.8026661 64 9 64 L 51 64 C 52.210938 64 53.264444 63.423754 54 62.564453 C 54.735556 63.423754 55.789062 64 57 64 L 71 64 C 73.197334 64 75 62.197334 75 60 L 75 20 C 75 17.802666 73.197334 16 71 16 L 57 16 C 55.789062 16 54.735556 16.576246 54 17.435547 C 53.264444 16.576246 52.210938 16 51 16 L 9 16 z M 9 18 L 51 18 C 52.116666 18 53 18.883334 53 20 A 1 1 0 0 0 54 21 A 1 1 0 0 0 55 20 C 55 18.883334 55.883334 18 57 18 L 71 18 C 72.116666 18 73 18.883334 73 20 L 73 60 C 73 61.116666 72.116666 62 71 62 L 57 62 C 55.883334 62 55 61.116666 55 60 A 1 1 0 0 0 54 59 A 1 1 0 0 0 53 60 C 53 61.116666 52.116666 62 51 62 L 9 62 C 7.8833339 62 7 61.116666 7 60 L 7 20 C 7 18.883334 7.8833339 18 9 18 z M 54 23 A 1 1 0 0 0 53 24 A 1 1 0 0 0 54 25 A 1 1 0 0 0 55 24 A 1 1 0 0 0 54 23 z M 54 27 A 1 1 0 0 0 53 28 A 1 1 0 0 0 54 29 A 1 1 0 0 0 55 28 A 1 1 0 0 0 54 27 z M 15 31 A 1.0001 1.0001 0 1 0 15 33 L 32 33 A 1.0001 1.0001 0 1 0 32 31 L 15 31 z M 39 31 A 1.0001 1.0001 0 1 0 39 33 L 44 33 A 1.0001 1.0001 0 1 0 44 31 L 39 31 z M 54 31 A 1 1 0 0 0 53 32 A 1 1 0 0 0 54 33 A 1 1 0 0 0 55 32 A 1 1 0 0 0 54 31 z M 60 31 A 1.0001 1.0001 0 1 0 60 33 L 68 33 A 1.0001 1.0001 0 1 0 68 31 L 60 31 z M 54 35 A 1 1 0 0 0 53 36 A 1 1 0 0 0 54 37 A 1 1 0 0 0 55 36 A 1 1 0 0 0 54 35 z M 15 39 A 1.0001 1.0001 0 1 0 15 41 L 38 41 A 1.0001 1.0001 0 1 0 38 39 L 15 39 z M 54 39 A 1 1 0 0 0 53 40 A 1 1 0 0 0 54 41 A 1 1 0 0 0 55 40 A 1 1 0 0 0 54 39 z M 60 39 A 1.0001 1.0001 0 1 0 60 41 L 65 41 A 1.0001 1.0001 0 1 0 65 39 L 60 39 z M 54 43 A 1 1 0 0 0 53 44 A 1 1 0 0 0 54 45 A 1 1 0 0 0 55 44 A 1 1 0 0 0 54 43 z M 15 47 A 1.0001 1.0001 0 1 0 15 49 L 32 49 A 1.0001 1.0001 0 1 0 32 47 L 15 47 z M 39 47 A 1.0001 1.0001 0 1 0 39 49 L 44 49 A 1.0001 1.0001 0 1 0 44 47 L 39 47 z M 54 47 A 1 1 0 0 0 53 48 A 1 1 0 0 0 54 49 A 1 1 0 0 0 55 48 A 1 1 0 0 0 54 47 z M 60 47 A 1.0001 1.0001 0 1 0 60 49 L 68 49 A 1.0001 1.0001 0 1 0 68 47 L 60 47 z M 54 51 A 1 1 0 0 0 53 52 A 1 1 0 0 0 54 53 A 1 1 0 0 0 55 52 A 1 1 0 0 0 54 51 z M 54 55 A 1 1 0 0 0 53 56 A 1 1 0 0 0 54 57 A 1 1 0 0 0 55 56 A 1 1 0 0 0 54 55 z' />
            </svg>
          </Link>
          <button
            type='button'
            onClick={() => {
              menuState();
            }}
          >
            <span className='material-symbols-outlined'>menu</span>
          </button>
        </div>
        <div className='links responsive-hide'>
          <Link href='/' className='gray'>
            Home
          </Link>
          <Link href='/contact' className='gray'>
            Contact us
          </Link>
          <Link href='/news' className='gray'>
            News
          </Link>
        </div>
        <div className='members' ref={wrapperRef}>
          {/* <Link href='/members/signup' className='blue'>
            Sign up
          </Link>
          <span>or</span>
          <ButtonLink color='blue-filled' text='Sign in' url={`members/signin`} /> */}
          <Link href='/members/account'>
            <ProfilePhoto image='https://www.cenksari.com/content/profile.jpg' size='small' />
          </Link>
          <button
            type='button'
            className='menu-opener'
            onClick={() => {
              setDropdown(!dropdown);
            }}
          >
            Cenk
            <span className='material-symbols-outlined'>
              {dropdown ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}
            </span>
          </button>
          {dropdown && (
            <Dropdown color='gray'>
              <DropdownItem url='members/tickets' text='My tickets' />
              <DropdownItem url='members/account' text='My account' />
              <hr />
              <DropdownItem url='members/signout' text='Sign out' />
            </Dropdown>
          )}
        </div>
      </div>
      {menu && (
        <div className='main-menu-backdrop'>
          <div className='main-menu'>
            <div className='top'>
              <button
                type='button'
                onClick={() => {
                  menuState();
                }}
              >
                <span className='material-symbols-outlined'>close</span>
              </button>
              <div className='center'>
                <Link href='/' className='logo'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 80'>
                    <path d='M 9 16 C 6.8026661 16 5 17.802666 5 20 L 5 60 C 5 62.197334 6.8026661 64 9 64 L 51 64 C 52.210938 64 53.264444 63.423754 54 62.564453 C 54.735556 63.423754 55.789062 64 57 64 L 71 64 C 73.197334 64 75 62.197334 75 60 L 75 20 C 75 17.802666 73.197334 16 71 16 L 57 16 C 55.789062 16 54.735556 16.576246 54 17.435547 C 53.264444 16.576246 52.210938 16 51 16 L 9 16 z M 9 18 L 51 18 C 52.116666 18 53 18.883334 53 20 A 1 1 0 0 0 54 21 A 1 1 0 0 0 55 20 C 55 18.883334 55.883334 18 57 18 L 71 18 C 72.116666 18 73 18.883334 73 20 L 73 60 C 73 61.116666 72.116666 62 71 62 L 57 62 C 55.883334 62 55 61.116666 55 60 A 1 1 0 0 0 54 59 A 1 1 0 0 0 53 60 C 53 61.116666 52.116666 62 51 62 L 9 62 C 7.8833339 62 7 61.116666 7 60 L 7 20 C 7 18.883334 7.8833339 18 9 18 z M 54 23 A 1 1 0 0 0 53 24 A 1 1 0 0 0 54 25 A 1 1 0 0 0 55 24 A 1 1 0 0 0 54 23 z M 54 27 A 1 1 0 0 0 53 28 A 1 1 0 0 0 54 29 A 1 1 0 0 0 55 28 A 1 1 0 0 0 54 27 z M 15 31 A 1.0001 1.0001 0 1 0 15 33 L 32 33 A 1.0001 1.0001 0 1 0 32 31 L 15 31 z M 39 31 A 1.0001 1.0001 0 1 0 39 33 L 44 33 A 1.0001 1.0001 0 1 0 44 31 L 39 31 z M 54 31 A 1 1 0 0 0 53 32 A 1 1 0 0 0 54 33 A 1 1 0 0 0 55 32 A 1 1 0 0 0 54 31 z M 60 31 A 1.0001 1.0001 0 1 0 60 33 L 68 33 A 1.0001 1.0001 0 1 0 68 31 L 60 31 z M 54 35 A 1 1 0 0 0 53 36 A 1 1 0 0 0 54 37 A 1 1 0 0 0 55 36 A 1 1 0 0 0 54 35 z M 15 39 A 1.0001 1.0001 0 1 0 15 41 L 38 41 A 1.0001 1.0001 0 1 0 38 39 L 15 39 z M 54 39 A 1 1 0 0 0 53 40 A 1 1 0 0 0 54 41 A 1 1 0 0 0 55 40 A 1 1 0 0 0 54 39 z M 60 39 A 1.0001 1.0001 0 1 0 60 41 L 65 41 A 1.0001 1.0001 0 1 0 65 39 L 60 39 z M 54 43 A 1 1 0 0 0 53 44 A 1 1 0 0 0 54 45 A 1 1 0 0 0 55 44 A 1 1 0 0 0 54 43 z M 15 47 A 1.0001 1.0001 0 1 0 15 49 L 32 49 A 1.0001 1.0001 0 1 0 32 47 L 15 47 z M 39 47 A 1.0001 1.0001 0 1 0 39 49 L 44 49 A 1.0001 1.0001 0 1 0 44 47 L 39 47 z M 54 47 A 1 1 0 0 0 53 48 A 1 1 0 0 0 54 49 A 1 1 0 0 0 55 48 A 1 1 0 0 0 54 47 z M 60 47 A 1.0001 1.0001 0 1 0 60 49 L 68 49 A 1.0001 1.0001 0 1 0 68 47 L 60 47 z M 54 51 A 1 1 0 0 0 53 52 A 1 1 0 0 0 54 53 A 1 1 0 0 0 55 52 A 1 1 0 0 0 54 51 z M 54 55 A 1 1 0 0 0 53 56 A 1 1 0 0 0 54 57 A 1 1 0 0 0 55 56 A 1 1 0 0 0 54 55 z' />
                  </svg>
                </Link>
              </div>
            </div>
            <div className='padding-top center'>
              <ul>
                <li>
                  <Link href='/' className='white'>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href='/news' className='white'>
                    News
                  </Link>
                </li>
                <li>
                  <Link href='/help' className='white'>
                    Help
                  </Link>
                </li>
                <li>
                  <Link href='/venues' className='white'>
                    Venues
                  </Link>
                </li>
                <li>
                  <Link href='/tickets' className='white'>
                    My tickets
                  </Link>
                </li>
                <li>
                  <Link href='/contact' className='white'>
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href='/promoters' className='white'>
                    For promoters
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
