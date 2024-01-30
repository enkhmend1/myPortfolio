// ImageGallery.jsx
import React from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map((image, index) => (
        <img key={image + index} className={`image img-${index + 1}`} src={image} alt={`Image ${index + 1}`} />
      ))}
    </div>
  );
};

export default ImageGallery;    