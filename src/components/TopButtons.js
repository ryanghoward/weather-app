import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "London",
    },
    {
      id: 2,
      title: "New York",
    },
    {
      id: 3,
      title: "Beijing",
    },
    {
      id: 4,
      title: "Sydney",
    },
    {
      id: 5,
      title: "Paris",
    },
  ];

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map((city) => (
        <button
          key={city.id}
          className='text-white sm:text-lg font-medium hover:underline'
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
