import React from 'react';
import FilterByCatalog from '../Components/Home/FilterByCatalog';
import HomeCarousel from '../Components/Home/HomeCarousel';
import NewProduct from '../Components/Home/NewProduct';
function HomeContainer(props) {
    return (
        <div>
            <HomeCarousel />
            <FilterByCatalog />
            <NewProduct/>
        </div>
    );
}

export default HomeContainer;