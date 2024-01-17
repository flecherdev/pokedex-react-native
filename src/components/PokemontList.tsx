import React from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';
import {Pokemon} from '../model/Pokemon';
import PokemonCard from './PokemonCard';

function PokemontList(prop: {pokemons: Pokemon[]}) {
  const {pokemons} = prop;

  return (
    <FlatList
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={(pokemon) => String(pokemon.id)}
      renderItem={({item}) => <PokemonCard pokemon={item} />}
      contentContainerStyle={styles.container}
    />
  );
}

export default PokemontList;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
});
