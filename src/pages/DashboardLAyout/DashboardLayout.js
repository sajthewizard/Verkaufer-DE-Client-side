import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NAvbar from '../Shared/Navbar/Navbar/NAvbar';

const DashboardLayout = () => {
    return (
        <div>
            <NAvbar></NAvbar>
            <div className="drawer drawer-mobile">
                <input id="Dasboard-Drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>


                </div>
                <div className="drawer-side">
                    <label htmlFor="Dasboard-Drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">

                        <li><Link to="/dashboard"> My Orders </Link></li>
                        <li><Link to="/dashboard/allusers">  All Users </Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;