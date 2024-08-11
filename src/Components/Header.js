import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Header = () => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.iconButton}>
                <Icon name="menu" size={28} color="#5f6368" />
            </Pressable>
            <View style={styles.locationContainer}>
                <Text style={styles.locationText}>Localização</Text>
                <View style={styles.locationRow}>
                    <Icon name="pin-drop" size={20} color="#5f6368" />
                    <Text style={styles.locationName}>Belo Horizonte  </Text>
                    <Icon name="arrow-drop-down" size={20} color="#5f6368" />
                </View>
            </View>
            <Pressable style={styles.iconButton}>
                <Icon name="notifications-none" size={28} color="#5f6368" />
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
        backgroundColor: '#fff',
    },
    iconButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationContainer: {
        alignItems: 'center',
    },
    locationText: {
        color: '#5f6368',
        fontSize: 12,
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
        marginLeft: 10, // Ajustando a margem para melhor espaçamento
    },
});

export default Header;
