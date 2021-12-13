import React from 'react';
import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import estilo from './styles';
import trans from '../../assets/trans.png';

const Login = (props) => {
    return (
        <SafeAreaView style={estilo.container}>
            <Image style={estilo.logo} source={trans} />

            <View style={estilo.inputLinha}>
                <TextInput
                    style={estilo.inputNormal}
                    placeholder="E-mail:"

                />
            </View>

            <View style={estilo.inputLinha}>
                <TextInput
                    textAlign='center'
                    keyboardType='number-pad'
                    style={estilo.inputNormalSenha}
                    multiline={true}
                    placeholder={'Senha: ****'}
                />
                <Text style={estilo.inputLegend}>*Não se esqueça que sua senha é apenas de números!*</Text>
            </View>

            <View style={estilo.btnLinha}>
                <TouchableOpacity style={estilo.btn} >
                    <Text style={estilo.textBtn}>Entrar</Text>
                </TouchableOpacity>
            </View>

            <View style={estilo.btnLinha}>
                <TouchableOpacity style={estilo.btnCadastro} >
                    <Text style={estilo.textBtnCadastro} onPress={() => { props.navigation.navigate('Cadastrar') } }>Ainda não tem uma conta?</Text>
                </TouchableOpacity>
                <FontAwesome name="arrow-right" size={30} color="#F1E3EA" />
            </View>


        </SafeAreaView>
    );
};

export default Login;