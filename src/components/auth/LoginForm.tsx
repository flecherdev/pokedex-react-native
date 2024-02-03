import React, {FC, ReactEventHandler, ReactNode, useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Keyboard,
  TextInput,
} from 'react-native';
import * as Yup from 'yup';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {user, userDetail} from '../../utils/userDb';
import useAuth from '../../hooks/useAuth';
import {useNavigation} from '@react-navigation/native';
import {Login} from '../../model/Login';

const schema = Yup.object()
  .shape({
    username: Yup.string().required('El nombre es obligatorio'),
    password: Yup.string().required('El password es obligatorio'),
  })
  .required();

type Inputs = {
  username: '';
  password: '';
};

const LoginForm = () => {
  const [error, setError] = useState('');
  const {login} = useAuth();
  const navigation = useNavigation();

  console.log(useAuth());

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      username: '',
      password: '',
    },
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data: Inputs) => {
    console.log('data', data);
    const {username, password} = data;
    if (username !== user.usename || password !== user.password) {
      setError('user incorrecto');
    } else {
      setError('user correcto');
      login();
    }
  };

  console.log('errors: ', errors);

  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Nombre de usuario"
            style={styles.input}
            autoCapitalize="none"
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="username"
      />
      {/* {errors.username && <Text>This is required.</Text>} */}
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <TextInput
            placeholder="Contraseña"
            style={styles.input}
            autoCapitalize="none"
            secureTextEntry={true}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
      {/* {errors.password && <Text>This is required.</Text>} */}

      <Button title="Entrar" onPress={handleSubmit((e: any) => onSubmit(e))} />

      <Text style={styles.error}>{errors.username?.message}</Text>
      <Text style={styles.error}>{errors.password?.message}</Text>
      <Text style={styles.error}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20,
  },
});

export default LoginForm;
