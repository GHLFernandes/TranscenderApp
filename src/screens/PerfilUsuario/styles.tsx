import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#F8F8F8',
        flexDirection: 'column',
        justifyContent: 'center',
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
    header: {
        flexDirection: 'row',
        height: 80,
        backgroundColor: "#F8F8F8",
        alignSelf: 'stretch',
        paddingTop: 8,
        paddingHorizontal: 20,
    },
    btnLinhaHeader: {
        flexDirection: 'column',
        paddingTop:5
    },
    btnLinha: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch',
        marginVertical: 10,
    },
    btn: {
        backgroundColor: "#27A3DC",
        borderRadius: 20,
        height: 50,
        width: 80,
    },
    textBtn: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '700',
        fontStyle: 'italic',
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
});

export default estilo;