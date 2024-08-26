import React, { useState, useEffect } from 'react';
import '../styles/Sidebar.css'; // Ensure this CSS file is correctly configured
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
  const navigate=useNavigate();
  const onebox=()=>{
    navigate('/onebox')
  }
  const [userInitials, setUserInitials] = useState('');

  useEffect(() => {
    // Function to get the user's initials from local storage
    const fetchUserInitials = () => {
      // Retrieve the token or user data from local storage
      const token = localStorage.getItem('token');

      // Assuming the token contains user information or fetch user information using the token
      if (token) {
        // Here we simulate fetching the user email from the token or an API using the token
        const user = { email: 'johndoe@example.com' }; // Replace this with actual API call if needed

        if (user && user.email) {
          // Extract the first two characters of the email
          const initials = user.email.slice(0, 2).toUpperCase();
          setUserInitials(initials);
        }
      }
    };

    fetchUserInitials();
  }, []);

  return (
    <aside className="sidebar">
      
      <nav className="nav-menu">
        <ul>
          <li className="active"><i className="fas fa-home"></i></li>
          <li><i className="fas fa-user"></i></li>
          <li><i className="fas fa-envelope" onClick={onebox}></i></li>
          <li><i className="fas fa-check" ></i></li>
          <li><i className="fas fa-list"></i></li>
          <li><i className="fas fa-bell"></i></li>
          <li><i className="fas fa-chart-line"></i></li>
        </ul>
      </nav>
      <div className="user-profile">
        <div className="user-initials">{userInitials}</div>
      </div>
    </aside>
  );
};

export default Sidebar;
