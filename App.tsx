import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/navigation/Navigation';
import Pokemon from './src/screen/Pokemon';
import AuthProvider from './src/context/AuthContext';

// function Root() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Profile" component={Profile} />
//       <Stack.Screen name="Settings" component={Settings} />
//     </Drawer.Navigator>
//   );
// }

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
