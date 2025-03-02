import React, { useEffect, useState } from 'react';
import AnimatedIcon from './AnimatedIcon'; // Import the AnimatedIcon component

const LoadingScreen = () => {
 
const [fade, setFade] = useState(false);

useEffect(() => {
  const timer = setTimeout(() => {
    setFade(true); // Apply fade-out class when loading finishes
    setTimeout(() => setLoading(false), 1000); // Set loading to false after fade-out
  }, 5000);

  return () => clearTimeout(timer);
}, []);

return (
  <div className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 ${fade ? 'fade-out' : ''}`}>
    <div className="text-center">
      <AnimatedIcon />
    </div>
  </div>
);


};

export default LoadingScreen;
