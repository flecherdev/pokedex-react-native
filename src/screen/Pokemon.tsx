import {Text, SafeAreaView, View, ScrollView} from 'react-native';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import {useEffect, useState} from 'react';
import {getPokemonDetailsApi} from '../api/pokeapi';
import Stats from '../components/Pokemon/Stats';

const Pokemon = (props: any) => {
  const {
    navigation,
    route,
    route: {params},
  } = props;
  const [pokemon, setPokemon] = useState();

  console.log('route: ', route.params.pokemon);

  useEffect(() => {
    (async () => {
      try {
        const response = await getPokemonDetailsApi(params.id);
        setPokemon(response);
      } catch (error) {
        navigation.goBack();
      }
    })();
  }, [params]);

  if (!pokemon) return null;

  return (
    <SafeAreaView>
      <ScrollView>
        <Header pokemon={pokemon} />
        <Type type={pokemon} />
        <Stats stat={pokemon} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Pokemon;
