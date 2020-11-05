import React from 'react';
import pokeball from '../assets/pokeball-black.svg';

const PokeballLoader = () => {
  return (
    <img className="pokeball-loader" src={pokeball} alt="Loading..." />
  );
};

export default PokeballLoader;