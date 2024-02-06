import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  addPokemonFavoriteApi,
  getPokemonsFavoriteApi,
} from '../../api/favorite';

const Favorite = (props: any) => {
  const {id} = props;
  const addFavorite = async () => {
    await addPokemonFavoriteApi(id);
  };

  return (
    <Icon
      name="heart"
      color={'#fff'}
      size={20}
      onPress={addFavorite}
      style={{margin: 20}}
    />
  );
};

export default Favorite;
