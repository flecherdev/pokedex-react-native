import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import useAuth from '../../hooks/useAuth';
import {UserDetail} from '../../model/UserDetail';

const UserDate = () => {
  const {auth, logOut} = useAuth();
  const [login, setLogin] = useState<UserDetail>();

  useEffect(() => {
    setLogin(auth);
  }, [login]);

  const ItemMenu = (props: any) => {
    const {title, text} = props;
    return (
      <View style={styles.itemMenu}>
        <Text style={styles.itemMenuTitle}>{title}</Text>
        <Text>{text}</Text>
      </View>
    );
  };
  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenido</Text>
        {auth && (
          <Text
            style={styles.title}
          >{`${login?.firstName} ${login?.lastName}`}</Text>
        )}

        <View style={styles.dataContent}>
          <ItemMenu
            title={'Nombre'}
            text={`${login?.firstName} ${login?.lastName}`}
          />
          <ItemMenu title={'User name'} text={login?.username} />
          <ItemMenu title={'Email'} text={login?.email} />
        </View>
        <Button title="Desconectar" onPress={logOut} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginBottom: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#cfcfcf',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
});

export default UserDate;
