import React from 'react';


import ImageGallery from 'react-image-gallery';
function ImageCarousel(props) {
  const images = [
  {
    original: '/images/221011_category_w_sweat.jpeg',
    thumbnail: '/images/221011_category_w_sweat.jpeg',
  },
  {
    original: '/images/221011_category_w_cardigan.jpeg',
    thumbnail: '/images/221011_category_w_cardigan.jpeg',
  },
  {
    original: '/images/221011_category_w_tops.jpeg',
    thumbnail: '/images/221011_category_w_tops.jpeg',
  },
];
  return (
    <div>
      <ImageGallery items={images} />    
    </div>
  );
}

export default ImageCarousel;