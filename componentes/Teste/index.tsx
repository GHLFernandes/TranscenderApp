import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, Text, FlatList} from 'react-native';
import { auth } from '../../firebase';

import estilo from './styles';
import trans from '../../assets/trans.png';

const Teste = (props) => {

    const handleSignOut = () => {
        auth
            .signOut()
            .then(() => {
                props.navigation.replace("Login")
            })
            .catch(error => alert(error.message))
    }

    return (
        <SafeAreaView style={estilo.container}>

            <TouchableOpacity
                onPress={handleSignOut}
                style={estilo.btn}
            >
                <Text style={estilo.textBtn}>Sair</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Teste;