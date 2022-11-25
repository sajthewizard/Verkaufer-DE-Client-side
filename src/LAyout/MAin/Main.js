import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../../pages/Shared/Footer/Footer/Footer';
import NAvbar from '../../pages/Shared/Navbar/Navbar/NAvbar';

const Main = () => {
    return (
        <div>
            <NAvbar>

            </NAvbar><Outlet></Outlet>
            <Footer></Footer>

        </div>
    );
};

export default Main;