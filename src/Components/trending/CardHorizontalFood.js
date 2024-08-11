import React from 'react';
import { Pressable, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

const CardHorizontalFood = ({ food }) => {
    return (
        <Pressable style={{ borderRadius: 12, flexDirection: 'column', flex: 1, marginBottom: 10 }}>
            <Image
                source={{ uri: food.image }}
                style={{ width: 150, height: 100, borderRadius: 12 }}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                <Icon size={14} color='#ca8a04' name="star" />
                <Text style={{ fontSize: 12, color: '#ca8a04', marginLeft: 4 }}>{food.rating}</Text>
            </View>
            <Text style={{ fontSize: 18, color: 'green', fontWeight: 'bold', marginTop: 4 }}>R${food.price.toFixed(2)}</Text>
            <Text style={{ fontSize: 14, color: 'black', fontWeight: '600', marginTop: 4 }}>{food.name}</Text>
            <Text style={{ fontSize: 12, color: 'red', marginTop: 2 }}>{food.time} - R${food.delivery.toFixed(2)}</Text>
        </Pressable>
    );
};

export default CardHorizontalFood;
