import React from 'react';

import FilterByCatalog from '../Components/Home/FilterByCatalog';
import HomeCarousel from '../Components/Home/HomeCarousel';
import NewProduct from '../Components/Home/NewProduct';
import GroupLeft from '../Components/Home/GroupLeft';
import GroupRight from '../Components/Home/GroupRight';
function HomeContainer(props) {
    let catalog = [
      {
        "id": 1,
        "name": "Ao khoac",
        "image": "221011_category_w_sweat.jpeg"
        },
         {
        "id": 2,
        "name": "Ao so mi",
        "image": "221011_category_w_sweat.jpeg"
        },
          {
        "id": 3,
        "name": "Vay dam",
        "image": "221011_category_w_sweat.jpeg"
        },
           {
        "id": 4,
        "name": "Quan",
        "image": "221011_category_w_sweat.jpeg"
        },
            {
        "id": 5,
        "name": "Khan",
        "image": "221011_category_w_sweat.jpeg"
        },
             {
        "id": 6,
        "name": "Ao dai",
        "image": "221011_category_w_sweat.jpeg"
        },
    ];
    let items = [];
    for (let index = 0; index < catalog.length; index++) {
        if (index % 2 === 0) {
            items.push(<GroupLeft Catalog={catalog[index]} key={index} />)
      }  else {
       
            items.push(<GroupRight Catalog={catalog[index]} key={index}/>) ;
        }
   
    }

    return (
        <div className='text-center'>
            <HomeCarousel />
            <FilterByCatalog />
            <NewProduct />
           <img height={600} src="/images/—Pngtree—merry christmas 2023 happy new_8837985.png" alt="" />
  
              {items}
               
        </div>
    );
}

export default HomeContainer;