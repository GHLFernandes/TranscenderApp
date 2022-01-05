import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 50,
    },
    logo: {
        flexDirection: 'column',
        alignSelf: 'center',
        width: 140,
        height: 140,
        marginVertical: 50
    },
    inputLinha: {
        flexDirection: 'column',
        alignContent: 'center',
        marginVertical: 3
    },
    inputLinhaAceite: {
        flexDirection: 'row',
        marginVertical: 5,
        marginHorizontal: 20
    },
    btnLinha: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginVertical: 40,
    },
    btn: {
        backgroundColor: "#27A3DC",
        borderRadius: 20,
    },
    textBtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'italic',
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    voltar: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingTop: 35,
        paddingLeft: 20,
    },
    btnVoltar: {
        backgroundColor: '#F1E3EA',
        borderRadius: 20,
    },
    textBtnVoltar: {
        fontSize: 15,
        color: '#968E8E',
        paddingHorizontal: 15,
        lineHeight: 30,
        alignSelf: 'center'
    },
    inputNormal: {
        fontSize: 17,
        fontWeight: '400',
        backgroundColor: '#F1E3EA',
        alignSelf: 'stretch',
        borderColor: '#d5d5d5',
        borderRadius: 20,
        textAlign: 'left',
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginLeft: 10
    },
    inputNormalSenha: {
        backgroundColor: '#F1E3EA',
        width: 200,
        fontSize: 17,
        fontWeight: '400',
        borderColor: '#d5d5d5',
        borderRadius: 20,
        textAlign: 'left',
        paddingHorizontal: 10,
        paddingVertical: 7,
        marginLeft: 10
    },
    inputFocus: {
        borderWidth: 1,
        borderColor: '#1f4f66',
        borderRadius: 3,
        paddingHorizontal: 5,
        marginLeft: 10
    },
    inputLegend: {
        fontSize: 10,
        color: '#968E8E',
        paddingHorizontal: 20,
    },
    checkbox: {
        borderWidth: 0,
        backgroundColor: '#968E8E',
        transform: [
            { scaleX: 1 },
            { scaleY: 1 },
        ],
    },
    checkboxLegend: {
        fontSize: 10,
        color: '#968E8E',
        paddingHorizontal: 5,
    },
    listItem:{
        backgroundColor:'#ddd',
        flexDirection:'row',
    },
    item:{
        marginVertical: 5,
        flex: 0.5,
        textAlign: 'center',
        alignItems:'flex-start'
    }
});

export default estilo;