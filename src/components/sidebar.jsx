import React from 'react';
import tatalogo from '../assets/images/tata-logo.png';

const Sidebar = ({ activeComponent, setActiveComponent }) => {
  const menuItems = [
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'Leads', icon: 'fas fa-address-book' },
    { name: 'Contacts', icon: 'fas fa-users' },
    { name: 'Accounts', icon: 'fas fa-building' },
    { name: 'Deals', icon: 'fas fa-briefcase' },
    { name: 'Tasks', icon: 'fas fa-tasks' },
    { name: 'Meetings', icon: 'fas fa-calendar-alt' },
    { name: 'Calls', icon: 'fas fa-phone' },
    { name: 'Reports', icon: 'fas fa-chart-bar' },
    { name: 'Analytics', icon: 'fas fa-chart-pie' },
  ];

  return (
    <div className="bg-blue-900 text-white w-64 min-h-screen flex flex-col">
      <div className="flex items-center justify-center p-4">
        <img src={tatalogo} alt="Tata Logo" className="h-16" />
      </div>
      <nav className="flex-grow mt-8 ms-5 me-5">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`flex items-center p-2 rounded-lg cursor-pointer ${
                activeComponent === item.name ? 'bg-blue-700' : 'hover:bg-blue-700'
              }`}
              onClick={() => setActiveComponent(item.name)}
            >
              <i className={`${item.icon} mr-2`}></i>{item.name}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
