import React from 'react';
import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesome } from '@expo/vector-icons';


//import TelaInicial from './componentes/Login'
import Login from './componentes/Login';
import Cadastro from './componentes/Cadastro';

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

      </Stack.Navigator>

    </NavigationContainer>

  );
}

export default App;