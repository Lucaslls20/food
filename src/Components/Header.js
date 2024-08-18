import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
//import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.iconButton}>
               <Text style={{fontSize:30}}>🏘</Text>
            </Pressable>
            <View style={styles.locationContainer}>
                <Text style={styles.locationText}>   Localização</Text>
                <View style={styles.locationRow}>
                   <Text style={{fontSize:20}}>📍</Text>
                    <Text style={[styles.locationName, {marginLeft:3}]}>Belo Horizonte</Text>
                </View>
                <View style={styles.locationRow}>
                <Text style={{fontSize:20}}>🌡️</Text>
                <Text style={styles.locationName}>25 graus</Text>
                </View>
            </View>
            <Pressable style={styles.iconButton}>
              <Text style={{fontSize:30}}>📝</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#e31e25',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationContainer: {
        alignItems: 'center',
        justifyContent:'center',

    },
    locationText: {
        color: '#111',
        fontSize: 12,
        textAlign:'center'
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
    },
    locationName: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:'center'
        //marginLeft: 10, // Ajustando a margem para melhor espaçamento
    },
});

export default Header;
