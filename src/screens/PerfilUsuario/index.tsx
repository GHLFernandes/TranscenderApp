import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import firebase from '../../database/firebase';
import { Header } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';


import estilo from './styles';
import trans from '../../../assets/trans.png';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'react-native-elements';


const PerfilUsuario: React.FC = (props) => {
    const [users, setUsers] = useState([]);
    const [userDetails, setUserDetails] = useState('');
    const navigation = useNavigation();

    const handleSignOut = async () => {
        firebase.auth
            .signOut()
            .then(() => {
                navigation.navigate('Login');
            })
            .catch(error => alert(error.message))
    };
    
    useEffect(() => {
        const userEmail = firebase.auth.currentUser.email;
        firebase.db.collection('users').where("email", "==", userEmail).get()
        .then(snapshot => setUserDetails(snapshot.data()));

        console.log("user:" + userDetails);
    }, []);

    return (
        <SafeAreaView >
            <Header containerStyle={estilo.header}
                leftComponent={{ icon: 'menu', color: '#8DC3DA', size: 38 }}
                rightComponent={
                    <View style={estilo.btnLinhaHeader}>
                        <TouchableOpacity onPress={() => { props.navigation.navigate('PerfilUsuario') }} >
                            <FontAwesome name="user" size={30} color="#CD7198" />
                        </TouchableOpacity>
                    </View>
                }
            />

            <View style={estilo.voltar}>
                <FontAwesome name="arrow-left" size={30} color="#F1E3EA" />
                <TouchableOpacity style={estilo.btnVoltar} >
                    <Text style={estilo.textBtnVoltar} onPress={() => { props.navigation.goBack() }}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <View style={estilo.container}>
                <View style={estilo.inputLinha}>
                    <Image source={props.foto} />

                </View>

            </View>
            <View style={estilo.btnLinha}>
                <TouchableOpacity style={estilo.btn}
                    onPress={handleSignOut}
                >
                    <Text style={estilo.textBtn}>Sair</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    )
}

export default PerfilUsuario;