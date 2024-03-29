import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from '../screen/Account';

const Stack = createNativeStackNavigator();

export default function AccountNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account"
        component={Account}
        options={{title: 'Account'}}
      />
    </Stack.Navigator>
  );
}
