import React, { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = () => {
  // State to track the current theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Effect to apply the theme on component mount and whenever it changes
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.body.className = savedTheme;
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? 'light' : 'dark';
    setIsDarkMode(!isDarkMode);
    document.body.className = newTheme;
    localStorage.setItem('theme', newTheme); // Save theme preference
  };

  return (
    <div className='header'>
      <div className='left-section'>
        <img 
          src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTGFY9mr0b4ljUaq5U4FQp2CJ5nagbGOZITcacvZxFTJMt41t1j' 
          alt='brand' 
          className='brand-logo'
        />
        <h1 className='brand-title'>ONEBOX</h1>
      </div>
      
      <div className='workspace'>
        <span>Tim's Workspace</span>
        <i className='icon-dropdown'></i>
      </div>

      {/* Theme toggle button */}
      <button className='theme-toggle-button' onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Header;