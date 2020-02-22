import React, { useState } from 'react';

import PokeballLoader from 'components/PokeballLoader'
import { getPokemonIcon } from '../api/pokemon';
import { appendZero } from '../utils/helpers';

const PokemonList = ({ name, nationalID, galarID, handleCaught }) => {
  const [loading, setLoading] = useState(true);

  const iconLoaded = () => {
    setLoading(false);
  }


  return (
    <li>
      <span className="poke-icon">
        {loading && <PokeballLoader/>}
        <img src={getPokemonIcon(nationalID)} alt={name} onLoad={iconLoaded} />
      </span>
      <span className="poke-num">No. {appendZero(galarID)}</span>
      <span className="poke-name">{name}</span>
      <span className="poke-checkbox">
        <input type="checkbox" name="caught" id={`poke-${galarID}`} value={nationalID} onChange={handleCaught} />
        <label htmlFor={`poke-${galarID}`} />
      </span>
    </li>
  );
};

export default PokemonList;