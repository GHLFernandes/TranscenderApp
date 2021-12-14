import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Image, Text, TextInput, TouchableOpacity, Pressable, FlatList } from 'react-native';
import CheckBox from 'expo-checkbox';
import { FontAwesome } from '@expo/vector-icons';
import { auth } from '../../firebase'

import estilo from './styles';
import trans from '../../assets/trans.png';

const Cadastro = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {

    const [isChecked, setChecked] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    const handleSignUp = () => {
        auth
            .createUserWithEmailAndPassword(email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log('Registrado como:', user.email);
            })
            .catch(error => alert(error.message)) 
    }


    return (
        <KeyboardAvoidingView style={estilo.container}>

            <View style={estilo.voltar}>
                <FontAwesome name="arrow-left" size={30} color="#F1E3EA" />
                <Pressable style={estilo.btnVoltar} >
                    <Text style={estilo.textBtnVoltar} onPress={() => { props.navigation.goBack() }}>Voltar</Text>
                </Pressable>
            </View>

            <Image style={estilo.logo} source={trans} />

            <View style={estilo.inputLinha}>
                <TextInput
                    style={estilo.inputNormal}
                    placeholder="Nome/Apelido:"
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Text style={estilo.inputLegend}>*Não se preocupe, só você poderá ter acesso a essa informação, ela não será exibida em seu perfil*</Text>
            </View>

            <View style={estilo.inputLinha}>
                <TextInput
                    style={estilo.inputNormal}
                    keyboardType='phone-pad'
                    placeholder="Telefone:"
                    value={phone}
                    onChangeText={text => setPhone(text)}
                />
                <Text style={estilo.inputLegend}>*Não se preocupe, só você poderá ter acesso a essa informação, ela não será exibida em seu perfil*</Text>
            </View>

            <View style={estilo.inputLinha}>
                <TextInput
                    style={estilo.inputNormal}
                    keyboardType='email-address'
                    placeholder="E-mail:"
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Text style={estilo.inputLegend}>*Não se preocupe, só você poderá ter acesso a essa informação, ela não será exibida em seu perfil*</Text>
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
                    secureTextEntry
                />
                <Text style={estilo.inputLegend}>Apenas números.</Text>
            </View>

            <View style={estilo.inputLinhaAceite}>
                <CheckBox style={estilo.checkbox}
                    value={isChecked}
                    onValueChange={setChecked}
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
        </KeyboardAvoidingView>
    )
}

export default Cadastro;