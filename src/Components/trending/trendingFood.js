import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import CardHorizontalFood from './CardHorizontalFood';

const TrendingFood = () => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        async function getFoods() {
            try {
                const response = await fetch('http://10.0.0.4:3000/foods');
                const data = await response.json();
                setFood(data);
            } catch (error) {
                console.error('Erro ao buscar os alimentos:', error);
            }
        }

        getFoods();
    }, []); // Adicionei [] para garantir que o useEffect seja executado apenas uma vez

    return (
        <FlatList
            data={food}
            renderItem={({ item }) => <CardHorizontalFood food={item} />}
            horizontal
            contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id.toString()} // Adicionei keyExtractor
        />
    );
};

export default TrendingFood;
