import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const NoLogged = () => {
  const navigation = useNavigation<any>();
  const goToAccount = () => {
    navigation.navigate('Account');
  };
  return (
    <View style={styles.content}>
      <Text style={styles.text}>
        Para ver la pantalla tienes que inciar sesion
      </Text>
      <Button title="Ir al login" onPress={goToAccount} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 50,
    paddingHorizontal: 50,
  },
  text: {
    textAlign: 'center',
    marginBottom: 50,
  },
});

export default NoLogged;
