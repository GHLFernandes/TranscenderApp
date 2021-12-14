import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../../firebase';


import estilo from './styles';
import trans from '../../assets/trans.png';

const Login = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                props.navigation.replace("Home");
            }
        })

        return unsubscribe;
    }, [])

    const handleLogin = () => {
        auth
          .signInWithEmailAndPassword(email, password)
          .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logado como:', user.email);
          })
          .catch(error => alert(error.message))
      }

    return (
        <SafeAreaView style={estilo.container}>
            <Image style={estilo.logo} source={trans} />

            <View style={estilo.inputLinha}>
                <TextInput
                    style={estilo.inputNormal}
                    keyboardType='email-address'
                    placeholder="E-mail:"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View style={estilo.inputLinha}>
                <TextInput
                    textAlign='center'
                    keyboardType='number-pad'
                    style={estilo.inputNormalSenha}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    placeholder={'Senha: ******'}
                    maxLength={6}
                    minLength={6}
                    secureTextEntry={true}
                />
                <Text style={estilo.inputLegend}>*Não se esqueça que sua senha é apenas de 6 números!*</Text>
            </View>

            <View style={estilo.btnLinha}>
                <TouchableOpacity style={estilo.btn} 
                    onPress={handleLogin}
                    >
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