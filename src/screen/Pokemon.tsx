import {Text, SafeAreaView, View} from 'react-native';

const Pokemon = (props: any) => {
  const {navigation, route} = props;
  console.log(route);

  return (
    <View>
      <Text>Pokemon</Text>
    </View>
  );
};

export default Pokemon;
