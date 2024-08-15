import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#fff" style={styles.icon} />
        <TextInput 
          value={email}
          placeholder="Digite seu E-mail"
          placeholderTextColor="#fff"
          style={styles.input}
          onChangeText={setEmail}
        />
      </View>

      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#fff" style={styles.icon} />
        <TextInput 
          placeholder="Digite sua senha"
          placeholderTextColor="#fff"
          secureTextEntry={true}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.linkContainer}>
        <TouchableOpacity>
          <Text style={styles.linkText}>Criar conta</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.linkText}>Recuperar conta</Text>
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
    justifyContent: 'space-between',
    marginTop: 20,
  },
  linkText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Login;
