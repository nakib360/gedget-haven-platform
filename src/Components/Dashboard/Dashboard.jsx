import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Outlet } from 'react-router';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard | Gedget haven</title>
            </Helmet>
            <Outlet/>
        </div>
    );
};

export default Dashboard;