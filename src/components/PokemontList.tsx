import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  ActivityIndicator,
  Platform,
} from 'react-native';
import {Pokemon} from '../model/Pokemon';
import PokemonCard from './PokemonCard';

type PokemonListProp = {
  pokemons: Pokemon[];
  isNext: string | null | undefined;
  loadPokemons: () => void;
};

function PokemontList({pokemons, loadPokemons, isNext}: PokemonListProp) {
  const loadMore = () => {
    console.log('cargando mas pokemons...');
    loadPokemons();
  };

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({item}) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.container}
      onEndReached={isNext ? loadMore : null}
      onEndReachedThreshold={0.1}
      ListFooterComponent={
        isNext ? (
          <ActivityIndicator
            size={'large'}
            style={styles.spinner}
            color={'#AEAEAE'}
          />
        ) : null
      }
    />
  );
}

export default PokemontList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
    marginTop: Platform.OS === 'android' ? 30 : 0,
  },
  spinner: {
    marginTop: 20,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});
