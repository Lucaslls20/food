import React, { useState } from "react";
import { Image, StyleSheet, Text, View, Modal, TouchableOpacity, FlatList } from "react-native";

const Request = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [orders, setOrders] = useState([]); // Aqui você pode carregar os pedidos do usuário
  // No momente não estamos usando o orders!!!

  const handlePress = () => {
    setModalVisible(true);
    // Aqui você pode carregar os pedidos do usuário de uma API ou AsyncStorage, etc.
    // Exemplo: setOrders([...]);
  };

  return (
    <View style={styles.container}>
      <Image source={{uri:'https://cdn.pixabay.com/photo/2020/09/17/19/43/sleep-5580199_960_720.png'}} style={styles.image} />
      <Text style={styles.subtitulo}>Bora pedir um DevFood?</Text>
      <Text numberOfLines={2} style={styles.text}>Experimente os melhores restaurants e mercados perto de você!</Text>

      <TouchableOpacity onPress={handlePress} style={{ 
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 80,
        borderRadius: 25,
        marginTop: 20,
         }}>
        <Text style={{color:'black', fontSize:18, fontWeight:'bold', textAlign:'center'}}>Your Requests</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Seus Pedidos</Text>

            {orders.length > 0 ? (
              <FlatList
                data={orders}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.orderItem}>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                  </View>
                )}
              />
            ) : (
              <Text style={{color:'black'}}>Nenhum pedido disponível</Text>
            )}

            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#e31e25'
  },
  subtitulo:{
    fontWeight:'bold',
    fontSize:18,
    color:'black'
  },
  text:{
    fontSize:13,
    color: '#E5C124',
    marginTop:7
  },
  image:{
    width:'90%',
    height:150,
    borderRadius:40,
    marginBottom:40
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: '#e31e25',
    padding: 10,
    borderRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Request;
