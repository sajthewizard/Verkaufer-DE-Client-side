import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useSeller from '../../hooks/useSeller';
import NAvbar from '../Shared/Navbar/Navbar/NAvbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user.email);
    const [isSeller] = useSeller(user.email)

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
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">  All Users </Link></li>
                            </>
                        }
                        <> {
                            isSeller && <>
                                <li><Link to="/dashboard/addaproduct">  Add a Product </Link></li>
                            </>
                        }

                        </>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;