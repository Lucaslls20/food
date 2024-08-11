import React, { useState } from "react";
import { View, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Search = () => {
    const [food, setFood] = useState('');

    return (
        <View style={styles.container}>
            <Icon name="search" size={24} color="#5f6368" />
            <TextInput
                placeholder="Procure sua comida..."
                style={styles.input}
                placeholderTextColor="#5f6368"
                value={food}
                onChangeText={setFood}
            />
        </View>
    );
}

const styles = {
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: '#d9d9d9',
        borderRadius: 20,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: '#ffffff',
    },
    input: {
        flex: 1,
        height: '100%',
        color: 'black',
        marginLeft: 8,
    }
};

export default Search;
