import React from "react";

function TimeAndLocation() {
  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <p className='text-white text-xl font-extralight'>
          Thursday, 6 September 1969 | Local Time: 6:90 PM
        </p>
      </div>
      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>Los Angles, USA</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
