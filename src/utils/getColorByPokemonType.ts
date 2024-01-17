import {POKEMON_TYPE_COLORS} from './constans';

const getColorByPokemonType = (
  type:
    | 'normal'
    | 'fighting'
    | 'flying'
    | 'poison'
    | 'ground'
    | 'rock'
    | 'bug'
    | 'ghost'
    | 'steel'
    | 'fire'
    | 'water'
    | 'grass'
    | 'grass'
    | 'electric'
    | 'psychic'
    | 'ice'
    | 'dragon'
    | 'dark'
    | 'fairy',
) => POKEMON_TYPE_COLORS[type];

export default getColorByPokemonType;
