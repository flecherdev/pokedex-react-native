import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {getPokemonApi, getPokemonDetailsByUrlApi} from '../api/pokeapi';
import PokemonList from '../components/PokemontList';
import {Pokemon} from '../model/Pokemon';

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  console.log(pokemons);
  useEffect(() => {
    // funcion anonima auto ejecutable
    (async () => {
      await loadPokemon();
    })();
  }, []);

  const loadPokemon = async () => {
    try {
      const response = await getPokemonApi();

      const pokeArray: Pokemon[] = [];

      for await (const pokemon of response.results) {
        const pokemonDetail = await getPokemonDetailsByUrlApi(pokemon.url);

        pokeArray.push({
          id: pokemonDetail.id,
          name: pokemonDetail.name,
          type: pokemonDetail.types[0].type.name,
          order: pokemonDetail.order,
          image: pokemonDetail.sprites.other.dream_world.front_default,
        });
      }

      setPokemons([...pokemons, ...pokeArray]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} />
    </SafeAreaView>
  );
};

export default Pokedex;
