import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Favorite from '../screen/Favorite';
import Pokemon from '../screen/Pokemon';

const Stack = createNativeStackNavigator();

export default function FavoriteNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{title: 'Favorite'}}
      />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
}
