import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import NAvbar from '../Shared/Navbar/Navbar/NAvbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user.email);
    const [isSeller] = useSeller(user.email);
    const [isBuyer] = useBuyer(user.email);

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


                        <>
                            {
                                isBuyer && <>
                                    <li><Link to="/dashboard/myorders"> My Orders </Link></li>
                                </>
                            }
                        </>


                        <>
                            {
                                isAdmin && <>
                                    <li><Link to="/dashboard/allusers">  All Users </Link></li>
                                    <li><Link to="/dashboard/allseller">  All Seller </Link></li>
                                    <li><Link to="/dashboard/allbuyer">  All Buyer </Link></li>
                                </>
                            }
                        </>
                        <> {
                            isSeller && <>
                                <li><Link to="/dashboard/addaproduct">  Add a Product </Link></li>
                            </>
                        }

                        </>
                        <> {
                            isSeller && <>
                                <li><Link to="/dashboard/myproducts">  My Products </Link></li>
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