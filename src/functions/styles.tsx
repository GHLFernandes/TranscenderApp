import { StyleSheet } from 'react-native';

const estilo = StyleSheet.create({
    listItem: {
        backgroundColor: '#ddd',
        flexDirection: 'row',
    },
    item: {
        marginVertical: 5,
        flex: 0.5,
        textAlign: 'center',
        alignItems: 'flex-start'
    }
});

export default estilo;