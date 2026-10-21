import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false); // Auth State Toggle

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev);
  };

  const closeDrawer = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Sticky Header Top Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between p-4 relative">

          {/* 1. Brand Logo / Name (Left side) */}
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse z-10">
            <span className="self-center whitespace-nowrap text-xl font-bold text-gray-900 sm:text-2xl">
              My Portfolio
            </span>
          </a>

          {/* 2. Desktop Navigation Links (Centered using absolute positioning on lg screens) */}
          <nav className="hidden lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:flex items-center">
            <ul className="flex flex-row space-x-8 font-medium text-sm rtl:space-x-reverse">
              <li>
                <a href="#" className="text-blue-700 hover:text-blue-700" aria-current="page">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-blue-700">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-blue-700">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-900 hover:text-blue-700">
                  Features
                </a>
              </li>
            </ul>
          </nav>

          {/* 3. Desktop Auth Buttons (Right Side End) */}
          <div className="hidden lg:flex items-center space-x-4 rtl:space-x-reverse z-10">
            {!isAuth ? (
              <>
                <a
                  href="#"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Login
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
                >
                  Register
                </a>
              </>
            ) : (
              <>
                <a
                  href="#"
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
                >
                  Logout
                </a>
              </>
            )}
          </div>

          {/* Hamburger Icon for Mobile & Tablet (sm and md screens) */}
          <button
            onClick={toggleDrawer}
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 lg:hidden z-10"
            aria-controls="drawer-navigation"
            aria-expanded={isOpen}
          >
            <span className="sr-only">Open menu</span>
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
      </header>

      {/* Backdrop Overlay for Mobile Drawer */}
      {isOpen && (
        <div
          onClick={closeDrawer}
          className="fixed inset-0 z-50 bg-gray-900/50 backdrop-blur-sm lg:hidden transition-opacity"
        />
      )}

      {/* Side Drawer Menu for sm & md screens (Opens from Left side) */}
      <aside
        id="drawer-navigation"
        className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        tabIndex="-1"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4">
          <span className="text-lg font-bold text-gray-900">My Portfolio</span>
          <button
            onClick={closeDrawer}
            type="button"
            className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          >
            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span className="sr-only">Close menu</span>
          </button>
        </div>

        {/* Drawer Body: Navigation Items & Buttons */}
        <div className="flex h-full flex-col justify-between py-6">
          
          {/* Navigation Links List */}
          <ul className="space-y-3 font-medium text-base">
            <li>
              <a
                href="#"
                onClick={closeDrawer}
                className="block rounded-lg bg-blue-50 px-4 py-2.5 text-blue-700 font-semibold"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={closeDrawer}
                className="block rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
              >
                Company
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={closeDrawer}
                className="block rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={closeDrawer}
                className="block rounded-lg px-4 py-2.5 text-gray-700 hover:bg-gray-100 hover:text-blue-700"
              >
                Features
              </a>
            </li>
          </ul>

          {/* Drawer Footer: Action Buttons Inside Drawer */}
          <div className="border-t border-gray-100 pt-6 space-y-3 mb-10">
            {!isAuth ? (
              <>
                <a
                  href="#"
                  onClick={closeDrawer}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Login
                </a>
                <a
                  href="#"
                  onClick={closeDrawer}
                  className="block w-full rounded-lg bg-blue-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-blue-700"
                >
                  Register
                </a>
              </>
            ) : (
              <>
                <a
                  href="#"
                  onClick={closeDrawer}
                  className="block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-center text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                >
                  Dashboard
                </a>
                <a
                  href="#"
                  onClick={closeDrawer}
                  className="block w-full rounded-lg bg-red-600 px-4 py-2.5 text-center text-sm font-medium text-white transition hover:bg-red-700"
                >
                  Logout
                </a>
              </>
            )}
          </div>

        </div>
      </aside>
    </>
  );
};

export default Header;