import React, { useState, useEffect } from 'react';
import '../../css/toggle.css';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme === 'dark') {
      document.querySelector('body').setAttribute('data-theme', 'dark');
      setIsDarkMode(true);
    } else {
      document.querySelector('body').setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newTheme = prevMode ? 'light' : 'dark';
      localStorage.setItem('selectedTheme', newTheme);
      document.querySelector('body').setAttribute('data-theme', newTheme);
      return !prevMode;
    });
  };

  return (
    <div className="flex justify-end">
      <div className="Navbar text-white relative p-9">
        <nav className="navbar z-10">
          <ul className="nav-list">
            <li className="nav-item flex items-center">
              <label className="switch ml-4">
                <input
                  className="dark_mode"
                  type="checkbox"
                  id="darkmodetoggle"
                  checked={isDarkMode}
                  onChange={toggleTheme}
                />
                <span className="slider"></span>
              </label>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
