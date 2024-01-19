import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Pokedex from '../screen/Pokedex';
import Pokemon from '../screen/Pokemon';

const Stack = createNativeStackNavigator();

export default function PokedexNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Pokedex"
        component={Pokedex}
        options={{title: '', headerTransparent: true}}
      />
      <Stack.Screen name="Pokemon" component={Pokemon} />
    </Stack.Navigator>
  );
}
