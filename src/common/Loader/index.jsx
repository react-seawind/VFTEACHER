import React from 'react';

import loader from '../../images/logo.jpg';
const Loader = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div className="h-50 w-50   rounded-full ">
        <img src={loader} alt="" className="w-full " />
      </div>
    </div>
  );
};

export default Loader;
