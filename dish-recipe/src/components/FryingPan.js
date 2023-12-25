import React from 'react';

//FryingPan component.
const FryingPan = () => {
  return (
    <div
      id="cooking"
      className="bg-contain bg-no-repeat bg-center h-screen w-full"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/giphy.gif)` }}
    ></div>
  );
};

export default FryingPan;
