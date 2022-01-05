import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'column',
    },
    header: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: "#F8F8F8",
        alignSelf: 'stretch',
        paddingTop: 8,
        paddingHorizontal: 20,
    },
    btnLinha: {
        flexDirection: 'column',
        paddingTop:5
    },
    inputUser:{
        fontSize: 10,
        color: '#968E8E',
        paddingVertical: 5,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    inputLinha: {
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});

export default estilo;