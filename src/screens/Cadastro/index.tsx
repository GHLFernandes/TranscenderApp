import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Image, Text, TextInput, TouchableOpacity, Pressable, FlatList } from 'react-native';
import CheckBox from 'expo-checkbox';
import { FontAwesome } from '@expo/vector-icons';
import firebase from '../../database/firebase'

import estilo from './styles';
import trans from '../../../assets/trans.png';

const Cadastro: React.FC = (props) => {

    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        pass: "",
        policy: false
    })

    const handleChangeText = (name: any, value: any) => {
        setState({ ...state, [name]: value });
    }

    const handleSignUp = async () => {
        //verifico se todos os campos são válidos minimamente
        if (state.name === '' || state.email === '' || state.phone === '' || state.pass === '' || !state.policy) {
            alert("Todos os campos são obrigatórios");
        } else {        //caso seja, realizar a criação do usuário no bd e na autenticação 
            firebase.auth
                .createUserWithEmailAndPassword(state.email, state.pass)
                .then(userCredentials => {
                    const user = userCredentials.user;
                    console.log("Usuário '", user.email + "' registrado");
                })
                .catch(error => alert(error.message));

            await firebase.db.collection('users').add({
                name: state.name,
                email: state.email,
                phone: state.phone,
                pass: state.pass
            });
            alert("Usuário registrado com sucesso!");
        }
    }

    return (
        <View>
            <View style={estilo.voltar}>
                <FontAwesome name="arrow-left" size={30} color="#F1E3EA" />
                <Pressable style={estilo.btnVoltar} >
                    <Text style={estilo.textBtnVoltar} onPress={() => { props.navigation.goBack() }}>Voltar</Text>
                </Pressable>
            </View>

            <View style={estilo.container}>
                <Image style={estilo.logo} source={trans} />

                <View style={estilo.inputLinha}>
                    <TextInput
                        style={estilo.inputNormal}
                        placeholder="Nome/Apelido:"
                        onChangeText={value => handleChangeText('name', value)}
                    />
                    <Text style={estilo.inputLegend}>*Não se preocupe, só você poderá ter acesso a essa informação, ela não será exibida em seu perfil*</Text>

                </View>

                <View style={estilo.inputLinha}>
                    <TextInput
                        style={estilo.inputNormal}
                        keyboardType='phone-pad'
                        placeholder="Telefone:"
                        onChangeText={value => handleChangeText('phone', value)}
                    />
                    <Text style={estilo.inputLegend}>*Não se preocupe, só você poderá ter acesso a essa informação, ela não será exibida em seu perfil*</Text>
                </View>

                <View style={estilo.inputLinha}>
                    <TextInput
                        style={estilo.inputNormal}
                        keyboardType='email-address'
                        placeholder="E-mail:"
                        onChangeText={value => handleChangeText('email', value)}
                    />
                    <Text style={estilo.inputLegend}>*Não se preocupe, só você poderá ter acesso a essa informação, ela não será exibida em seu perfil*</Text>
                </View>

                <View style={estilo.inputLinha}>
                    <TextInput
                        textAlign='center'
                        keyboardType='number-pad'
                        style={estilo.inputNormalSenha}
                        onChangeText={value => handleChangeText('pass', value)}
                        placeholder={'Senha: ******'}
                        maxLength={6}
                        minLength={6}
                        secureTextEntry
                    />
                    <Text style={estilo.inputLegend}>Apenas números.</Text>
                </View>

                <View style={estilo.inputLinhaAceite}>
                    <CheckBox style={estilo.checkbox}
                        value={state.policy}
                        onValueChange={value => handleChangeText('policy', value)}
                    />
                    <Text style={estilo.checkboxLegend}>Concordo com a política de Termos e Privacidade</Text>
                </View>


                <View style={estilo.btnLinha}>
                    <TouchableOpacity style={estilo.btn}
                        onPress={handleSignUp}
                    >
                        <Text style={estilo.textBtn}>Criar!</Text>
                    </TouchableOpacity>
                    <FontAwesome name="arrow-right" size={30} color="#27A3DC" />
                </View>
            </View>
        </View>
    )
}

export default Cadastro;