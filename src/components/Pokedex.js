import React, { useState } from 'react';

import PokedexList from 'components/PokedexList'
import { getAllPokemon, searchPokemon } from '../api/pokemon';


const Pokedex = ({ searchField }) => {
  const allPokemon = getAllPokemon();

  const [caught, setCaught] = useState([]);

  const handleCaught = (event) => {
    const { checked, value: pokeID } = event.target;
    const pokeNum = parseInt(pokeID, 10);
    if (checked) {
      setCaught([...caught, { nationalID: pokeNum, caught: checked }])
    } else {
      setCaught(caught.filter(item => item.nationalID !== pokeNum))
    }
  };

  const resultPokemon = () => {
    // Return Union of caught and search pokemon
    // @TODO: CAUGHT SHOWS ON THE LIST EVENT THE SEARCH RESULT IS NOT INCLUDED
    const results = searchPokemon(searchField, allPokemon);

    return (results)
  };

  return (
    <div id="pokedex-container" className=" container">
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <ul className="pokemon-list">
            {
              resultPokemon().map(({ name, galarID, nationalID }) => {
                return (
                  <PokedexList key={nationalID} name={name} galarID={galarID} nationalID={nationalID} handleCaught={handleCaught} />
                )
              })
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pokedex;