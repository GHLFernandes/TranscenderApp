import React, { useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import firebase from '../../database/firebase';

import estilo from './styles';
import trans from '../../../assets/trans.png';

import AbaPrincipal from '../AbaPrincipal';

const Tabs = createBottomTabNavigator();

const Home: React.FC = () => {

    return (
        <Tabs.Navigator screenOptions={{
            headerShown: false
        }}>
            <Tabs.Screen name="Aba Principal" component={AbaPrincipal} />
        </Tabs.Navigator>
    )
}

export default Home;