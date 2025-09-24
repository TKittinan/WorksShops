import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-5 py-3">
        <h1 className="text-2xl font-extrabold text-red-800">MyWebsite</h1>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-black font-medium text-md px-3 py-2 hover:text-blue-500"
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden px-3 py-2 text-md font-medium text-black hover:text-blue-500 focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-16 right-5 bg-white shadow-md md:hidden px-5 py-3 space-y-2 rounded-lg">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="block text-black font-medium text-md px-3 py-2 hover:text-blue-500 rounded-md"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
