import React from 'react';
import Chart from './Chart';
import chart1 from '../assets/images/chart1.png';
import chart2 from '../assets/images/chart2.png';


const LeadInfo = () => {
  return (
    <section className="p-6  bg-white shadow rounded-lg mb-4">
      <div className="grid grid-cols-2 gap-4">
        <Chart src={chart1} alt="Open Leads Chart"
        />
        <Chart src={chart2} alt="Cases by Priority Chart" />
      </div>
    </section>
  );
};

export default LeadInfo;
