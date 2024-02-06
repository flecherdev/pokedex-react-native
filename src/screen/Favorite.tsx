import React from 'react';
import {Text, SafeAreaView, Button} from 'react-native';
import {getPokemonsFavoriteApi} from '../api/favorite';

const Favorite = (props: any) => {
  const checkFavorites = async () => {
    const response = await getPokemonsFavoriteApi();
    console.log(response);
  };

  return (
    <SafeAreaView>
      <Text>Favorite</Text>
      <Button title="Obtener favoritos" onPress={checkFavorites} />
    </SafeAreaView>
  );
};

export default Favorite;
