import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Vertical from "./vertical";

const RestaurantVertical = () => {
    const [foods, setFoods] = useState([])

    useEffect(() => {
        async function getFoods(){
            const response = await fetch('http://10.0.0.4:3000/famousRestaurantsBH')
            const data = await response.json()
            setFoods(data)
        }
        getFoods()
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={foods}
                renderItem={({ item }) => <Vertical item={item} />}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={{ alignItems: 'flex-start' }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'flex-start',
        justifyContent: 'center',
    }
});

export default RestaurantVertical;
