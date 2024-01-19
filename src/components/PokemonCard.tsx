import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
// import {Pokemon} from '../model/Pokemon';
import getColorByPokemonType from '../utils/getColorByPokemonType';
import {capitalize} from 'lodash';

const PokemonCard = (props: any) => {
  const {pokemon} = props;
  const navigation = useNavigation<any>();

  const pokemonColor = getColorByPokemonType(pokemon.type);

  const bgStyle = {backgroundColor: pokemonColor, ...style.bgStyle};

  const goToPokemon = () => {
    console.log('pokemon: ', pokemon);
    navigation.navigate('Pokemon', {pokemon});
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={bgStyle}>
            <Text style={style.number}>
              #{`${pokemon.order}`.padStart(3, '0')}
            </Text>
            <Text style={style.name}>{capitalize(pokemon.name)}</Text>
            <Image
              style={style.image}
              source={{
                uri: pokemon.image,
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  card: {
    flex: 1,
    height: 130,
  },
  spacing: {
    flex: 1,
    padding: 5,
  },
  bgStyle: {
    flex: 1,
    borderRadius: 15,
    padding: 10,
  },
  number: {
    position: 'absolute',
    right: 10,
    top: 10,
    color: '#fff',
    fontSize: 11,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
    paddingTop: 10,
  },
  image: {
    position: 'absolute',
    bottom: 5,
    right: 10,
    width: 90,
    height: 90,
  },
});

export default PokemonCard;
