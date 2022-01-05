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
    }
});

export default estilo;