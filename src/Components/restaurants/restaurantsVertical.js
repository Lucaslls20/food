import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Vertical from "./vertical";

const RestaurantVertical = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    async function getFoods() {
      try {
        const response = await fetch('http://10.0.0.4:3000/famousRestaurantsBH');
        const data = await response.json();
        setFoods(data);
      } catch (error) {
        console.error('Erro ao buscar os alimentos:', error);
      }
    }
    getFoods();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={foods}
        renderItem={({ item }) => <Vertical item={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{ alignItems: 'flex-start' }}
        showsVerticalScrollIndicator={false} // Para remover o indicador de rolagem vertical
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
});

export default RestaurantVertical;
