import React from 'react';
import AoKhoac from '../Components/Home/AoKhoac';
import AoSoMi from '../Components/Home/AoSoMi';
import Quan from '../Components/Home/Quan';
import VayDam from '../Components/Home/VayDam';
import FilterByCatalog from '../Components/Home/FilterByCatalog';
import HomeCarousel from '../Components/Home/HomeCarousel';
import NewProduct from '../Components/Home/NewProduct';
import Khan from '../Components/Home/Khan';
function HomeContainer(props) {
    return (
        <div className='text-center'>
            <HomeCarousel />
            <FilterByCatalog />
            <NewProduct />
           <img height={600} src="/images/—Pngtree—merry christmas 2023 happy new_8837985.png" alt="" />
        
            <AoKhoac />
            <AoSoMi />
            <VayDam />
            <Khan />
            <Quan />
        </div>
    );
}

export default HomeContainer;