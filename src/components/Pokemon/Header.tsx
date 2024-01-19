import React from 'react';
import {StyleSheet, View, SafeAreaView, Text, Image} from 'react-native';
import {capitalize} from 'lodash';
import getColorByPokemonType from '../../utils/getColorByPokemonType';

const Header = (props: any) => {
  const pokemon = props;
  const {name, order, sprites, types} = pokemon.pokemon;
  const color = getColorByPokemonType(types[0].type.name);

  const bgStyle = [{backgroundColor: color, ...styles.bg}];

  return (
    <>
      <View style={bgStyle} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, '0')}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{uri: sprites.front_default}} style={styles.image} />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: '100%',
    height: 400,
    position: 'absolute',
    borderBottomEndRadius: 300,
    borderBottomLeftRadius: 300,
    transform: [{scaleX: 1}],
  },
  content: {
    marginHorizontal: 20,
    marginTop: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 30,
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 27,
  },
  order: {
    color: '#fff',
    fontWeight: 'bold',
  },
  contentImg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 120,
  },
  image: {
    width: 240,
    height: 300,
    resizeMode: 'contain',
  },
});

export default Header;
