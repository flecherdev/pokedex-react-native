import {Text, SafeAreaView, View, ScrollView} from 'react-native';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import {useEffect, useState} from 'react';
import {getPokemonDetailsApi} from '../api/pokeapi';
import Stats from '../components/Pokemon/Stats';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Pokemon = (props: any) => {
  const {
    navigation,
    route,
    route: {params},
  } = props;
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          style={{marginLeft: 20}}
          onPress={navigation.goBack}
        />
      ),
    });
  }, [navigation, params]);

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
    // <SafeAreaView>
    <ScrollView>
      <Header pokemon={pokemon} />
      <Type type={pokemon} />
      <Stats stat={pokemon} />
    </ScrollView>
    // </SafeAreaView>
  );
};

export default Pokemon;
