import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Search from "../Components/Search";
import Section from "../Components/Section";
import TrendingFood from "../Components/trending/trendingFood";
import Restaurant from "../Components/restaurants/restaurant";
import RestaurantVertical from "../Components/restaurants/restaurantsVertical";

const Home = () => {
  const renderHeader = () => (
    <View>
      <Header />
      <Banner />
      <Search />
      <Section
        name="Comidas em alta"
        label="Veja mais"
        action={() => console.log('Mostrar algo')}
      />
      <TrendingFood />
      <Section
        name="Famosas no devFood"
        label="Veja todos"
        action={() => console.log('Mostrar algo')}
      />
      <Restaurant />
      <Section
        name="Restaurantes famosos de BH"
        label="Veja os Principais"
        action={() => console.log('Mostrar algo')}
      />
    </View>
  );

  return (
    <FlatList
      style={styles.background}
      ListHeaderComponent={renderHeader}
      ListFooterComponent={<RestaurantVertical />}
      data={[]} // Como não há dados na lista principal, passa um array vazio.
      keyExtractor={() => "dummy"} // Key extractor para evitar warnings, pode ser substituído conforme necessário.
    />
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#e31e25', // Cor de fundo da tela
    flex: 1, // Faz com que o background ocupe toda a tela
  },
});

export default Home;
