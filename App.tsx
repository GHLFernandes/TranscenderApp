import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome } from '@expo/vector-icons';


//import TelaInicial from './componentes/Login'
import Login from './componentes/Login';
import Cadastro from './componentes/Cadastro';
import Teste from './componentes/Teste';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

function Home() {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Teste" component={Teste} />
    </Tabs.Navigator>
  );
}

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
      </Stack.Navigator>


    </NavigationContainer>

  );
}

export default App;