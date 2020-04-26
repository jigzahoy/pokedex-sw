import pokemon from './data/pokemon.json';
import { appendZero } from '../utils/helpers';


export function getAllPokemon() {
  return pokemon
}

export function getPokemonIcon(id) {
  const parsedID = appendZero(id)
  const iconURL = `https://www.serebii.net/pokedex-swsh/icon/${parsedID}.png`;
  return iconURL;
}

export function searchPokemon(search, pokemonList) {
  const alphaSearch = new RegExp(`^${search}`, 'gi');
    
  return (
    pokemonList.filter((poke) => {
      if (alphaSearch.test(poke.name) || alphaSearch.test(poke.galarID) ) {
        return poke;
      }
      return '';

    })
  )
}

