import React, {useEffect, useState, useCallback} from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import useAuth from '../hooks/useAuth';
import {getPokemonsFavoriteApi} from '../api/favorite';
import {getPokemonDetailsByUrlApi, getPokemonDetailsApi} from '../api/pokeapi';
import {Pokemon} from '../model/Pokemon';
import PokemonList from '../components/PokemontList';
import NoLogged from '../components/NoLogged';

const Favorite = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const {auth} = useAuth();

  console.log(pokemons);

  useFocusEffect(
    useCallback(() => {
      if (auth) {
        (async () => {
          const response = await getPokemonsFavoriteApi();
          const pokeArray: Pokemon[] = [];

          for await (const id of response) {
            const pokemonDetail = await getPokemonDetailsApi(id);
            // console.log('pokemonDetail', pokemonDetail);
            pokeArray.push({
              id: pokemonDetail.id,
              name: pokemonDetail.name,
              type: pokemonDetail.types[0].type.name,
              order: pokemonDetail.order,
              // image: pokemonDetail.sprites.other.dream_world.front_default,
              image: pokemonDetail.sprites.front_default,
            });
          }
          setPokemons(pokeArray);
        })();
      }
    }, [auth]),
  );

  return !auth ? (
    <Text>Usuario no logiado</Text>
  ) : (
    <PokemonList
      pokemons={pokemons}
      loadPokemons={() => {}}
      isNext={undefined}
    />
  );
};

export default Favorite;
