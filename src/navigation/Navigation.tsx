import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import FavoritetNavigation from './FavoriteNavigarion';
import AccountNavigation from './AccountNavigation';
import PokedexNavigation from './PokedexNavigation';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  const renderPoket = () => {
    return (
      <Image
        source={require('../assets/pokeball.png')}
        style={{width: 75, height: 75, top: -15}}
      />
    );
  };

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Favorite"
        component={FavoritetNavigation}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Pokedex"
        component={PokedexNavigation}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: () => renderPoket(),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountNavigation}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <Icon name="user" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
