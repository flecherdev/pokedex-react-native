import {ScrollView} from 'react-native';
import Header from '../components/Pokemon/Header';
import Type from '../components/Pokemon/Type';
import {useEffect, useState} from 'react';
import {getPokemonDetailsApi} from '../api/pokeapi';
import Stats from '../components/Pokemon/Stats';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Favorite from '../components/Pokemon/Favorite';
import useAuth from '../hooks/useAuth';
import {Pokemon as Poke} from '../model/Pokemon';

const Pokemon = (props: any) => {
  const {
    navigation,
    route: {params},
  } = props;
  const [pokemon, setPokemon] = useState<Poke>();
  const {auth} = useAuth();

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

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (auth ? <Favorite id={pokemon?.id} /> : undefined),
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
  }, [navigation, params, pokemon]);

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
