import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const Register = ({ navigation, handleRegister, handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Register</Text>
            
            <View style={styles.inputContainer}>
            <Text style={{fontSize:20, marginRight:10}}>✉️</Text>
                <TextInput 
                    value={email}
                    placeholder="Digite seu E-mail"
                    placeholderTextColor="#fff"
                    style={styles.input}
                    onChangeText={setEmail}
                />
            </View>

            <View style={styles.inputContainer}>
            <Text style={{fontSize:20, marginRight:10}}>🔒</Text>
                <TextInput 
                    placeholder="Digite sua senha"
                    placeholderTextColor="#fff"
                    secureTextEntry={true}
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                />
            </View>
            
            <TouchableOpacity style={styles.button} onPress={() => handleRegister(email, password)}>
                <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>

            <View style={styles.linkContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.linkText}>Já tem uma conta? Faça login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D90429',
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        color: '#fff',
        alignSelf: 'center',
        marginBottom: 40,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#EF233C',
        borderRadius: 8,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#fff',
        height: 50,
    },
    button: {
        backgroundColor: '#2B2D42',
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    linkText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default Register;