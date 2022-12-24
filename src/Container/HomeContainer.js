import React from 'react';
import FilterByCatalog from '../Components/Home/FilterByCatalog';
import HomeCarousel from '../Components/Home/HomeCarousel';
function HomeContainer(props) {
    return (
        <div>
            <HomeCarousel />
            <FilterByCatalog/>
        </div>
    );
}

export default HomeContainer;