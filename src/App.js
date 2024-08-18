import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Inicial from "./Components/Inicial/Inicial";
import Login from "./Components/Inicial/Login";
import Register from "./Components/Inicial/Register";
import Home from "./Routes/Home";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "../firebaseConfig";
import { db } from "../firebaseConfig";
import Search from "./Routes/Search";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  // Função para registro (SignUp)
const handleRegister = async (email, password) => {
  try {
    // Cria um novo usuário com o Firebase Authentication
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Salva os dados do usuário no Cloud Firestore
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date(),
      // Outros dados do usuário que você queira salvar
    });

    setIsAuthenticated(true);
    console.log("Usuário registrado e dados salvos no Firestore");
  } catch (error) {
    console.error("Erro no registro:", error);
    alert("Erro no registro. Verifique os dados e tente novamente.");
  }
};

// Função para login (SignIn)
const handleLogin = async (email, password) => {
  try {
    // Faz login usando o Firebase Authentication
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Verifica se o usuário existe no Cloud Firestore
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
      console.log("Dados do usuário:", userDoc.data());
      setIsAuthenticated(true);
    } else {
      console.log("Usuário não encontrado no Firestore.");
      alert("Usuário não encontrado no banco de dados.");
    }
  } catch (error) {
    console.error("Erro no login:", error);
    alert("Erro no login. Verifique suas credenciais.");
  }
};

// Função para logout
const handleLogout = async () => {
  try {
    await signOut(auth);
    setIsAuthenticated(false);
    console.log("Usuário desconectado");
  } catch (error) {
    console.error("Erro ao desconectar:", error);
  }
};

  // O resto do código permanece o mesmo...
  const MainApp = () => (
    <Tab.Navigator
    screenOptions={{
      headerStyle: { backgroundColor: '#e31e25' },
      tabBarStyle: { 
        backgroundColor: '#e31e25',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom:10
      },
      tabBarLabelStyle: { 
        fontSize: 16, 
        color: '#fff',
        textAlign: 'center'
      },
    }}
    >
      <Tab.Screen name="Home" component={Home} options={{
        tabBarLabel: '🏠 Home',
        tabBarIcon: () => null
      }}/>
      <Tab.Screen name='Search' component={Search}  options={{
        tabBarLabel: '🔍 Search',
        tabBarIcon: () => null
      }}/>
      {/* Adicione outras telas que você queira mostrar após a autenticação */}
    </Tab.Navigator>
  );


  const AuthStack = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Inicial" component={Inicial} />
      <Stack.Screen name="Login">
        {props => <Login {...props} handleLogin={handleLogin} />}
      </Stack.Screen>
      <Stack.Screen name="Register">
        {props => <Register {...props} handleRegister={handleRegister} handleLogin={handleLogin} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
  

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainApp /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default App
