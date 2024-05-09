import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import '../styles/dashboard.css'
import MyPieChart from '../components/MyPieChart';

function DashboardPage() {
    return (
        <div className='main d-flex w-100'>
            <div className="left">
                <Sidebar />
            </div>
            <div className="right">
                <Navbar />
                <div className="dashboard p-3">
                    <div className="statistic border shadow">
                        <MyPieChart />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;