import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
          Thursday, 16 December 1993 | Local Time: 4:20 PM
        </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>Los Angles, USA</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
