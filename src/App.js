import React from 'react';
import './App.css';
import BarChart from './component/BarChart';
import BasicTable from './component/BasicTable.jsx';
import CustomersPieChart from './component/CustomersPieChart.jsx'
import EarningsCard from './component/EarningsCard.jsx';
import EarningsCardBag from './component/EarningsCardBag.jsx';
import EarningsCardWallet from './component/EarningsCardWallet.jsx';
import EarningsCardList from './component/EarningsCardList.jsx';
import Sidebar from './component/Sidebar.jsx';

function App() {
  // Sample data for the bar chart
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    values: [120, 150, 110, 80, 170, 120, 150, 140, 70, 30, 90, 180],
    label: 'Monthly Earning',
  };

  return (
    <div className="container">
      <div className='left-sidebar'>
        <Sidebar />
      </div>
      <div className='page-content'>
      <h3>Hello Shahruks 👋,</h3>
        <section className="overview">

        <div className='card-wrapper'>
          <EarningsCard earnings="$198K" growth="37.8" />
          <EarningsCardList earnings="$2.4K" growth="2" />
          <EarningsCardWallet earnings="$2.4K" growth="2" />
          <EarningsCardBag earnings="$89K" growth="11" />
        </div>
        <div className='chart-wrapper'>
          <BarChart data={chartData} />
          <CustomersPieChart />
        </div>

        <BasicTable />


      </section></div>




    </div>
  );
}

export default App;
