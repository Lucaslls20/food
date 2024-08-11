import React from "react";
import { Image, Pressable, Text, View } from "react-native";

const Vertical = ({ item }) => {
    return (
        <Pressable 
            style={{ 
                flexDirection: 'row', 
                alignItems: 'center', 
                marginHorizontal: 7, 
                gap: 12, 
                marginBottom: 15, // Espaço entre os botões
            }}
        >
            {item.image ? (
                <Image 
                    source={{ uri: item.image }} 
                    style={{ 
                        height: 80, // Altura da imagem
                        width: 80,  // Largura da imagem
                        borderRadius: 40, // Circular
                    }} 
                />
            ) : (
                <Text>Imagem não disponível</Text>
            )}
            <View style={{ gap: 10 }}>
                <Text style={{ fontSize: 16, marginLeft: 10, color: 'black', fontWeight: 'bold' }} numberOfLines={2}>
                    {item.name}
                </Text>
            </View>
        </Pressable>
    );
};

export default Vertical;
