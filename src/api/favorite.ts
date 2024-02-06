import AsyncStorage from '@react-native-async-storage/async-storage';
import {includes, pull} from 'lodash';
import {FAVORITE_STORE} from '../utils/constans';

export const getPokemonsFavoriteApi = async () => {
  try {
    const response = await AsyncStorage.getItem(FAVORITE_STORE);
    return JSON.parse(response || '[]');
  } catch (error) {
    throw error;
  }
};

export const addPokemonFavoriteApi = async (id: number | string) => {
  try {
    const favorite = await getPokemonsFavoriteApi();
    favorite.push(id);
    await AsyncStorage.setItem(FAVORITE_STORE, JSON.stringify(favorite));
  } catch (error) {
    throw error;
  }
};
