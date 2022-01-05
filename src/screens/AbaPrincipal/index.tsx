import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { KeyboardAvoidingView, TouchableOpacity, Text, View } from 'react-native';
import { Header } from 'react-native-elements';

import estilo from './styles';
import trans from '../../../assets/trans.png';
import Map from '../../component/Map';

const AbaPrincipal: React.FC = (props) => {

    return (
        <KeyboardAvoidingView>
            <Header containerStyle={estilo.header}
                leftComponent={{ icon: 'menu', color: '#8DC3DA', size: 38 }}
                rightComponent={
                    <View style={estilo.btnLinha}>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('PerfilUsuario') }} >
                            <FontAwesome name="user" size={30} color="#CD7198" />
                        </TouchableOpacity>
                    </View>
                }
            />
            <Map />
        </KeyboardAvoidingView>
    )
}

export default AbaPrincipal;