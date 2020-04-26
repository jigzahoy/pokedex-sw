import React, { useState } from 'react';

import PokedexList from 'components/PokedexList'
import { usePersistedState } from 'src/utils/custom-hooks'
import { getAllPokemon, searchPokemon } from '../api/pokemon';



const allPokemon = getAllPokemon();

const Pokedex = ({ searchField }) => {

  const [caughtPokemon, setCaughtPokemon] = usePersistedState('caught', []);
  const hashCaughtPokemon = new Map(caughtPokemon.map(obj => [obj.nationalID, obj.caught]));

  const handleCaught = (event) => {
    const { checked, value: pokeID } = event.target;
    const pokeNum = parseInt(pokeID, 10);

    if (checked) {
      setCaughtPokemon([...caughtPokemon, { nationalID: pokeNum, caught: checked }])
    } else {
      setCaughtPokemon(caughtPokemon.filter(item => item.nationalID !== pokeNum))
    }
  };

  const resultPokemon = () => {
    const result = searchPokemon(searchField, allPokemon).map((item) =>{
      const a =  { caught: hashCaughtPokemon.get(item.nationalID) || false };
      return{...item, ...a}
    })
    return (result)
  };

  console.log('rerended pokedex');
  return (
    <div id="pokedex-container" className=" container">
      <div className="columns">
        <div className="column is-4 is-offset-4">
          <ul className="pokemon-list">
            {
              resultPokemon().map(({ name, galarID, caught, nationalID }) => {
                return (
                  <PokedexList key={nationalID} name={name} galarID={galarID} nationalID={nationalID} handleCaught={handleCaught} isCaught={caught}/>
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