import React, {useEffect, useState} from 'react';
import IconA from 'react-native-vector-icons/FontAwesome5';
import IconB from 'react-native-vector-icons/FontAwesome';
import {
  addPokemonFavoriteApi,
  isPokemonFavoriteApi,
  removePokemonFavoriteApi,
} from '../../api/favorite';

const Favorite = (props: any) => {
  const {id} = props;
  console.log('id', id);
  const [reloadCheck, setReloadCheck] = useState(false);
  const [isFavorite, setIsdFavorite] = useState<boolean | undefined>(undefined);
  const Icon = isFavorite ? IconB : IconA;

  useEffect(() => {
    (async () => {
      try {
        const response = await isPokemonFavoriteApi(id);
        console.log('response', response);
        setIsdFavorite(response);
      } catch (error) {
        setIsdFavorite(false);
      }
    })();
  }, [id, reloadCheck]);

  const addFavorite = async () => {
    try {
      await addPokemonFavoriteApi(id);
      onReloadCheckFavorites();
    } catch (error) {
      throw error;
    }
  };

  const onReloadCheckFavorites = () => {
    setReloadCheck((prev) => !prev);
  };

  const removeFavorite = async () => {
    try {
      await removePokemonFavoriteApi(id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Icon
      name="heart"
      color={'#fff'}
      size={20}
      onPress={isFavorite ? removeFavorite : addFavorite}
      style={{margin: 20}}
    />
  );
};

export default Favorite;
