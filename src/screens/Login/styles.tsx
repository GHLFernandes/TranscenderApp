import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8F8F8',
        flexDirection: 'column',
        justifyContent: 'center',
        marginHorizontal: 20,
        marginVertical: 50,
    },
    logo: {
        flexDirection: 'column',
        alignSelf: 'center',
        width: 180,
        height: 180,
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
        marginVertical: 20,
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
        alignSelf: 'center',
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
        paddingVertical: 5,
        alignSelf: 'center'
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
    btnCadastro: {
        backgroundColor: '#F1E3EA',
        borderRadius: 20,
    },
    textBtnCadastro: {
        color: '#968E8E',
        fontSize: 15,
        fontWeight: 'normal',
        paddingHorizontal: 20,
        paddingVertical: 5,
    }
});

export default estilo;