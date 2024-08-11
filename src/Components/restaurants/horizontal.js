import React from "react";
import { Image, Pressable, Text } from "react-native";

const Horizantal = ({ item }) => {
    return (
        <Pressable style={{ alignItems: 'center', marginHorizontal: 7 }}>
            {item.image ? (
                <Image 
                    source={{ uri: item.image }} 
                    style={{ 
                        height: 80, // Altura da imagem
                        width: 80,  // Largura da imagem
                        borderRadius: 40, // Metade da altura e largura para que a imagem seja circular
                    }} 
                />
            ) : (
                <Text>Imagem não disponível</Text>
            )}
            <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 8, color:'black' }} numberOfLines={2}>
                {item.name}
            </Text>
        </Pressable>
    );
};

export default Horizantal;
