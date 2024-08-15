import React from "react";
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";

const Inicial = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>DevFood</Text>
            <Image source={{ uri: '' }} style={styles.logo} />
            <Text style={styles.title}>iFood para Entregadores</Text>
            <Text style={styles.subtitle}>arraste para conhecer</Text>

            <View style={styles.pagination}>
                <View style={[styles.dot, styles.activeDot]} />
                <View style={styles.dot} />
                <View style={styles.dot} />
                <View style={styles.dot} />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.buttonText}>ENTRAR</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() => navigation.navigate('Register')}>
                <Text style={[styles.buttonText, styles.registerButtonText]}>CADASTRAR</Text>
            </TouchableOpacity>

            <Text style={styles.versionText}>Versão 2.0.9</Text>
            <Text style={styles.footerText}>Essa é a tela inicial de cadastro no app!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e31e25',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 30,
    },
    pagination: {
        flexDirection: 'row',
        marginBottom: 40,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#000',
    },
    button: {
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 25,
        marginBottom: 20,
    },
    buttonText: {
        color: '#e31e25',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    registerButton: {
        backgroundColor: '#e31e25',
        borderColor: '#fff',
        borderWidth: 2,
    },
    registerButtonText: {
        color: '#fff',
    },
    versionText: {
        color: '#fff',
        fontSize: 12,
        marginTop: 30,
    },
    footerText: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center',
        marginTop: 5,
    },
});

export default Inicial;
