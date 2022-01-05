import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome } from '@expo/vector-icons';


//import TelaInicial from './componentes/Login'
import Login from './screens/Login';
import Cadastro from './screens/Cadastro';
import Home from './screens/Home';
import PerfilUsuario from './screens/PerfilUsuario';

const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer >
      <Stack.Navigator screenOptions={{
        headerShown: false, contentStyle: {
          backgroundColor: '#F8F8F8'
        }
      }} >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastrar" component={Cadastro}/>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PerfilUsuario"
          component={PerfilUsuario}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>


    </NavigationContainer>

  );
}

export default App;