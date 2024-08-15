import React from "react";
import { ScrollView, View } from "react-native";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Search from "../Components/Search";
import Section from "../Components/Section";
import TrendingFood from "../Components/trending/trendingFood";
import Restaurant from "../Components/restaurants/restaurant";
import RestaurantVertical from "../Components/restaurants/restaurantsVertical";

const Home = () => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }} showsVerticalScrollIndicator={false}>
      <View>
        <Header />
        <Banner />
        <Search />
      </View>
      
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

      <Restaurant/>

      <Section
        name="Restaurantes famosos de BH"
        label="Veja os Principais"
        action={() => console.log('Mostrar algo')}
      />

      <RestaurantVertical/>

    </ScrollView>
  );
};

export default Home;
