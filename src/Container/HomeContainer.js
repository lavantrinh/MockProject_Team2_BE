import React from 'react';
import AoKhoac from '../Components/Home/AoKhoac';
import FilterByCatalog from '../Components/Home/FilterByCatalog';
import HomeCarousel from '../Components/Home/HomeCarousel';
import NewProduct from '../Components/Home/NewProduct';
function HomeContainer(props) {
    return (
        <div className='text-center'>
            <HomeCarousel />
            <FilterByCatalog />
            <NewProduct />
           <img height={800} src="/images/—Pngtree—merry christmas 2023 happy new_8837985.png" alt="" />
        
            <AoKhoac/>
        </div>
    );
}

export default HomeContainer;