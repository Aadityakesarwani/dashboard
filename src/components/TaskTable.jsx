import React, { useState } from 'react';
import avatar from "../assets/images/avatar.png";
import tasks from "../assets/data/tasks";

const TasksTable = () => {
  const [selectedTab, setSelectedTab] = useState('My Open Task');
  const renderTableContent = () => {
    if (selectedTab === 'My Open Task') {
      return (
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2">Subject</th>
              <th className="py-2">Regarding</th>
              <th className="py-2">Activity Type</th>
              <th className="py-2">Activity Status</th>
              <th className="py-2">Owner</th>
              <th className="py-2">Priority</th>
              <th className="py-2">Start Date</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task,index) => (
              <tr key = {index} className='bg-gray-100'>
                <td className='py-2 px-4'>{task.subject}</td>
                <td className='py-2 px-4'>{task.regarding}</td>
                <td className="py-2 px-4">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-sm">
                    {task.activityType}
                  </span>
                </td>
                <td className="py-2 px-4">
                  <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                    {task.activityStatus}
                  </span>
                </td>
                <td className="py-2 px-4 flex items-center">
                  <img src={avatar} alt="Owner" className="w-6 h-6 rounded-full mr-2" />
                  {task.owner}
                </td>
                <td className="py-2 px-4">
                  <span className={`px-2 py-1 rounded-full text-sm ${task.priority === 'Normal' ? 'bg-orange-400' : 'bg-red-500'}`}>
                    {task.priority}
                  </span>
                </td>
                <td className="py-2 px-4">{task.startDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return <p className="text-center py-8">No Data</p>;
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <div className="flex space-x-4 mb-4">
        <button
          className={`px-4 py-2 rounded ${
            selectedTab === 'My Open Task' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setSelectedTab('My Open Task')}
        >
          My Open Task
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedTab === 'My Meetings' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setSelectedTab('My Meetings')}
        >
          My Meetings
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedTab === "Today's Leads" ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setSelectedTab("Today's Leads")}
        >
          Today's Leads
        </button>
        <button
          className={`px-4 py-2 rounded ${
            selectedTab === 'My Deals closing this month' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
          }`}
          onClick={() => setSelectedTab('My Deals closing this month')}
        >
          My Deals closing this month
        </button>
      </div>
      {renderTableContent()}
    </div>
  );
};

export default TasksTable;
