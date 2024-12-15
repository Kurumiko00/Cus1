import Link from 'next/link';
import React from 'react';

function Navbar() {
  return (
    <div>
      <header className="text-white body-font bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="bi bi-triangle"
              viewBox="0 0 16 16"
            >
              <path d="M8 1L15 14H1L8 1Z" />
              <path d="M8 2L13.5 13H2.5L8 2Z" />
              <path d="M8 3L12 12H4L8 3Z" />
              <path d="M8 4L10.5 11H5.5L8 4Z" />
              <path d="M8 5L9 10H7L8 5Z" />
            </svg>
            <span className="ml-3 text-xl">CUSTODIAN</span>
          </a>

          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600 flex flex-wrap items-center text-base justify-center">
            <Link href="/" className="mr-5 hover:text-gray-300">
              Home
            </Link>
            <Link href="/components/Project" className="mr-5 hover:text-gray-300">
              Project
            </Link>
            <Link href="/components/Team" className="mr-5 hover:text-gray-300">
              Team
            </Link>
            <Link href="/components/Contact" className="mr-5 hover:text-gray-300">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;