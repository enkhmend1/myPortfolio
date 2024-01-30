import React, { useState } from 'react';
import ".//style/index.css"
const AnimatedButton = () => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleButtonClick = (e) => {
    e.preventDefault();
    setIsAnimating(true);

    setTimeout(() => {
      setIsAnimating(false);
    }, 600);
  };

  return (
    <button
      className={`button ${isAnimating ? 'animate' : ''}`}
      onClick={handleButtonClick}
    >
      Click me
    </button>
  );
};

export default AnimatedButton;
