import React, { useEffect, useState } from "react";
import { View, FlatList,Text } from "react-native";
import Horizantal from "./horizontal";

const Restaurant = () => {

    const [foods, setFoods] = useState([])

    useEffect(() => {
        async function getRestaurants(){
            const response = await fetch('http://10.0.0.4:3000/restaurants')
            const data = await response.json()
            setFoods(data)
        }
        getRestaurants()
    },[])

    return (
        <FlatList
        data={foods}
        renderItem={({item}) => <Horizantal item={item} />}
        horizontal={true}
        contentContainerStyle={{ gap: 14, paddingLeft: 16, paddingRight: 16 }}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()} // Adicionei keyExtractor
        />
    )
}

export default Restaurant