import React from 'react';
import Ads from '../Ads/Ads';
import BAnner from '../Banner/BAnner';
import Categories from '../Categories/Categories';
import Design from '../Design/Design';

const Home = () => {
    return (
        <div className='mx-5'>
            <BAnner></BAnner>
            <Categories></Categories>
            <Ads></Ads>
            <Design></Design>

        </div>
    );
};

export default Home;