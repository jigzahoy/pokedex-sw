import React, { useState } from 'react';

import PokeballLoader from 'components/PokeballLoader';
import { appendZero } from 'src/utils/helpers';
import { getPokemonIcon } from '../api/pokemon';

const PokemonList = ({ name, nationalID, galarID, isCaught, handleCaught }) => {
  const [loading, setLoading] = useState(true);

  const iconLoaded = () => {
    setLoading(false);
  };


  // TODO: Fix cahced image loading
  const isHidden = loading ? '--hide' : '';

  return (
    <li>
      <span className="poke-icon">
        {/* {loading && <PokeballLoader />} */}
        <img src={getPokemonIcon(
          nationalID)} alt={name} />
      </span>
      <span className="poke-num">No. {appendZero(galarID)}</span>
      <span className="poke-name">{name}</span>
      <span className="poke-checkbox">
        <input type="checkbox" name="caught" id={`poke-${galarID}`} value={nationalID} onChange={handleCaught} checked={isCaught} />
        <label htmlFor={`poke-${galarID}`} />
      </span>
    </li>
  );
};

export default PokemonList;