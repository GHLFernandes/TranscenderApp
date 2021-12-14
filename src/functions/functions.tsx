import { View, Text } from 'react-native';

import estilo from './styles';

const users = (name:string, email:string, phone:string, pass:string) => {

    const user = {
        name: name,
        email: email,
        phone: phone,
        pass: pass
    };

    return(
        <View style={estilo.listItem}>
            <Text style={estilo.item}>{name}</Text>
            <Text style={estilo.item}>{email}</Text>
            <Text style={estilo.item}>{phone}</Text>
            <Text style={estilo.item}>{pass}</Text>
        </View>
    );
};

export default users;