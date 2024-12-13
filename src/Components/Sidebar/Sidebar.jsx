import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div style={{ width: '250px', backgroundColor: '#0C821F', color: '#FCFCFC' }}>
      <h2>Farmer Dashboard</h2>
      <ul>
        <li><Link to="/dashboard/products" style={{ color: '#FCFCFC' }}>Products</Link></li>
        <li><Link to="/dashboard/inventory" style={{ color: '#FCFCFC' }}>Inventory</Link></li>
        <li><Link to="/dashboard/profile" style={{ color: '#FCFCFC' }}>Profile</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
