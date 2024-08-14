import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import LeadInfo from './components/LeadInfo';
import Pipeline from './components/Pipeline';
import Header from './components/Header';
import FilterOption from './components/FilterOption';
import TaskTable from './components/TaskTable';

function App() {
  const [activeComponent, setActiveComponent] = useState('Home');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'Home':
        return (
          <>
            <FilterOption />
            <LeadInfo />
            <TaskTable/>
            <Pipeline />
          </>
        );
      case 'Leads':
        return <LeadInfo />;
      case 'Pipeline':
        return <Pipeline />;
      default:
        return null;
    }
  };

  return (
    <div className="flex">
      <Sidebar activeComponent={activeComponent} setActiveComponent={setActiveComponent} />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Header />
        <main className='p-6'>
          {renderComponent()}
        </main>
      </div>
    </div>
  );
}

export default App;
