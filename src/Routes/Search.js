import React, {useEffect, useState} from "react";
import { View,FlatList,Text,ImageBackground, StyleSheet,TextInput,TouchableOpacity } from "react-native";

const Search = ({item}) => {

    const [categories, setCategories] = useState([])
    const [food, setFood] = useState('')

    useEffect(() => {
        async function getCategories(){
            try{
                const response = await fetch('http://10.0.0.4:3000/categories');
                const data = await response.json();  // Aqui é necessário usar await
                setCategories(data);
            }catch(err){
                console.log('Algo deu errado', err);
            }
        }
        getCategories();
    }, []);

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Buscar em Todo o iFood"
                placeholderTextColor='black'
                value={food}
                onChangeText={setFood}
            />
            
            <ImageBackground
                source={{uri:'https://visiteserranegra.com.br/wp-content/uploads/jet-engine-forms/1/2021/11/Bar-Restaurante-Shangri-la-Serra-Negra-SP.jpeg'}}
                style={styles.banner}
            >
                <Text style={styles.bannerTextTitle}>Para você:</Text>
                <Text style={styles.bannerTextSubtitle}>Recomendações exclusivas com base no que você gosta</Text>
                <TouchableOpacity style={styles.discoverButton}>
                    <Text style={styles.discoverButtonText}>Descubra</Text>
                </TouchableOpacity>
            </ImageBackground>

            <Text style={styles.categoryTitle}>Categorias</Text>

            <FlatList
                data={categories}
                numColumns={2}
                keyExtractor={({item}) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.categoryItem, { backgroundColor: item.backgroundColor }]}>
                        <ImageBackground source={{ uri: item.image }} style={styles.categoryImage}>
                            <Text style={styles.categoryText}>{item.title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                )}
                columnWrapperStyle={styles.columnWrapper}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e31e25',
      paddingHorizontal: 10,
    },
    searchInput: {
      backgroundColor: '#F5F5F5',
      padding: 10,
      borderRadius: 8,
      marginTop: 10,
    },
    banner: {
      height: 150,
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: 20,
      borderRadius: 8,
      marginTop: 10,
      overflow: 'hidden',
    },
    bannerTextTitle: {
      color: '#FFFFFF',
      fontSize: 24,
      fontWeight: 'bold',
    },
    bannerTextSubtitle: {
      color: '#FFFFFF',
      fontSize: 16,
      marginTop: 5,
    },
    discoverButton: {
      backgroundColor: '#FF4D4F',
      paddingVertical: 8,
      paddingHorizontal: 15,
      borderRadius: 8,
      marginTop: 10,
    },
    discoverButtonText: {
      color: '#FFFFFF',
      fontWeight: 'bold',
    },
    categoryTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20,
    },
    categoryItem: {
      flex: 1,
      height: 100,
      margin: 5,
      borderRadius: 8,
      overflow: 'hidden',
    },
    categoryImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    categoryText: {
      color: '#FFFFFF',
      fontSize: 16,
      fontWeight: 'bold',
    },
    columnWrapper: {
      justifyContent: 'space-between',
    },
  });

export default Search