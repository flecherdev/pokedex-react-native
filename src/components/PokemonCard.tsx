import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';
import {Pokemon} from '../model/Pokemon';
import getColorByPokemonType from '../utils/getColorByPokemonType';

const PokemonCard = (props: any) => {
  const {pokemon} = props;

  const bgStyle = {backgroundColor: '#f0f', ...style.bgStyle};
  const goToPokemon = () => {
    console.log('pokemon: ', pokemon);
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={style.card}>
        <View style={style.spacing}>
          <View style={bgStyle}>
            <Text style={style.number}>
              #{`${pokemon.order}`.padStart(3, '0')}
            </Text>
            <Text style={style.name}>{pokemon.name}</Text>
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
