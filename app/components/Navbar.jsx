import Link from 'next/link';

function Navbar() {
  return (
    <div>
      <header className="text-white body-font bg-gray-800">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            {/* ... */}
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-600 flex flex-wrap items-center text-base justify-center">
            <Link href="/">
              <a className="mr-5 hover:text-gray-300">Home</a>
            </Link>
            <Link href="/components/Project">
              <a className="mr-5 hover:text-gray-300">Project</a>
            </Link>
            <Link href="/components/Team">
              <a className="mr-5 hover:text-gray-300">Team</a>
            </Link>
            <Link href="/components/Contact">
              <a className="mr-5 hover:text-gray-300">Contact</a>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}

export default Navbar;