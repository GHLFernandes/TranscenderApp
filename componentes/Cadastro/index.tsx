import React, { useState } from 'react';
import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity, Pressable } from 'react-native';
import CheckBox from 'expo-checkbox';
import { FontAwesome } from '@expo/vector-icons';

import estilo from './styles';
import trans from '../../assets/trans.png';

const Cadastro = (props) => {

    const [isChecked, setChecked] = useState(false);
    return (
        <SafeAreaView style={estilo.container}>
            
            <View style={estilo.voltar}>
            <FontAwesome name="arrow-left" size={30} color="#F1E3EA" />
                <Pressable style={estilo.btnVoltar} >
                    <Text style={estilo.textBtnVoltar} onPress={() => { props.navigation.goBack() } }>Voltar</Text>
                </Pressable>
            </View>

            <Image style={estilo.logo} source={trans} />

            <View style={estilo.inputLinha}>
                <TextInput
                    style={estilo.inputNormal}
                    placeholder="Nome/Apelido:"

                />
                <Text style={estilo.inputLegend}>*Não se preocupe, só você poderá ter acesso a essa informação, ela não será exibida em seu perfil*</Text>
            </View>

            <View style={estilo.inputLinha}>
                <TextInput
                    style={estilo.inputNormal}
                    placeholder="E-mail:"
                />
                <Text style={estilo.inputLegend}>*Não se preocupe, só você poderá ter acesso a essa informação, ela não será exibida em seu perfil*</Text>
            </View>

            <View style={estilo.inputLinha}>
                <TextInput
                    style={estilo.inputNormal}
                    placeholder="Telefone:"
                />
                <Text style={estilo.inputLegend}>*Não se preocupe, só você poderá ter acesso a essa informação, ela não será exibida em seu perfil*</Text>
            </View>

            <View style={estilo.inputLinha}>
                <TextInput
                    textAlign='center'
                    keyboardType='number-pad'
                    style={estilo.inputNormalSenha}
                    multiline={true}
                    placeholder={'Senha: ****'}
                />
                <Text style={estilo.inputLegend}>Apenas números.</Text>
            </View>

            <View style={estilo.inputLinhaAceite}>
                <CheckBox style={estilo.checkbox}
                    onTintColor="#968E8E"
                    value={isChecked}
                    onValueChange={setChecked}
                />
                <Text style={estilo.checkboxLegend}>Concordo com a política de Termos e Privacidade</Text>
            </View>


            <View style={estilo.btnLinha}>
                <TouchableOpacity style={estilo.btn} >
                    <Text style={estilo.textBtn}>Criar!</Text>
                </TouchableOpacity>
                <FontAwesome name="arrow-right" size={30} color="#27A3DC" />
            </View>
        </SafeAreaView>
    )
}

export default Cadastro;