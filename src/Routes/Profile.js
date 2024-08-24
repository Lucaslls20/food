import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Avatar, List, Badge } from 'react-native-paper';

const Profile = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Avatar.Image size={64} source={{ uri: 'https://tse2.mm.bing.net/th?id=OIG4.2IcPvRyosjVs5i3VQwDk&pid=ImgGn' }} />
        <Text style={styles.username}>Lucas Lanasantos</Text>
        <TouchableOpacity style={styles.qrButton}>
          <Image source={{ uri: 'https://cdn.pixabay.com/photo/2021/12/12/16/10/qr-6865526_960_720.png' }} style={styles.qrIcon} />
        </TouchableOpacity>
      </View>

      <View style={styles.adContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1466/1466350.png' }} style={styles.adIcon} />
        <View style={styles.adTextContainer}>
          <Text style={styles.adTitle}>Pediu Rock in Rio, DevFood entrega!</Text>
          <Text style={styles.adSubtitle}>Siga DevFood no Instagram e concorra a 20 pares de ingresso!</Text>
        </View>
        <Badge style={styles.adBadge}>NOVO!</Badge>
      </View>

      <List.Section>
        <List.Item
          title="Conversas"
          description="Meu histórico de conversas"
          left={() => <Text style={styles.icon}>💬</Text>}
        />
        <List.Item
          title="Notificações"
          description="Minha central de notificações"
          left={() => <Text style={styles.icon}>🔔</Text>}
          right={() => <Badge size={20} style={styles.notificationBadge}>1</Badge>}
        />
        <List.Item
          title="Pagamentos"
          description="Meus saldos e cartões"
          left={() => <Text style={styles.icon}>💳</Text>}
        />
        <List.Item
          title="Clube iFood"
          description="Meus benefícios exclusivos"
          left={() => <Text style={[styles.icon, { fontSize: 25 }]}>🔹</Text>}
        />
        <List.Item
          title="Cupons"
          description="Meus cupons de desconto"
          left={() => <Text style={styles.icon}>🎟️</Text>}
        />
        <List.Item
          title="Pra comer fora"
          description="Meus cupons pra comer fora"
          left={() => <Text style={styles.icon}>🍕</Text>}
          right={() => <Badge style={styles.couponBadge}>NOVO!</Badge>}
        />
        <List.Item
          title="iFood Card"
          description="Minha área de compra e resgate"
          left={() => <Text style={styles.icon}>🛒</Text>}
          right={() => <Badge style={styles.couponBadge}>NOVO!</Badge>}
        />
        <List.Item
          title="Fidelidade"
          description="Minhas fidelidades"
          left={() => <Text style={styles.icon}>⭐</Text>}
        />

        <List.Item
          title="Favoritos"
          description="Meus locais favoritos"
          left={() => <Text style={styles.icon}>❤️</Text>}
        />

        <List.Item
          title="Endereços"
          description=" Meus endereços de entrega"
          left={() => <Text style={styles.icon}>📍</Text>}
        />

        <List.Item
          title="Dados da conta"
          description="Meus dados"
          left={() => <Text style={[styles.icon, { fontSize: 30, marginLeft: 20 }]}>🪪</Text>}
        />

<View style={{marginTop:40}}>
  <List.Item 
  title= 'Configurações'
  left={() => <Text style={styles.icon}>⚙️</Text>}
  />
 
  <List.Item 
  title= 'Ajuda'
  left={() => <Text style={styles.icon}>ℹ️</Text>}
  />
  
  <List.Item 
  title= 'Segurança'
  left={() => <Text style={styles.icon}>🛡️</Text>}
  />


</View>

      </List.Section>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  username: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 10,
    flex: 1,
  },
  qrButton: {
    padding: 10,
  },
  qrIcon: {
    width: 24,
    height: 24,
  },
  adContainer: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  adIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  adTextContainer: {
    flex: 1,
  },
  adTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#CDCCE6'
  },
  adSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  adBadge: {
    backgroundColor: '#ff0000',
    color: '#fff',
    fontSize: 12,
  },
  notificationBadge: {
    backgroundColor: '#ff0000',
    color: '#fff',
    fontSize: 12,
  },
  couponBadge: {
    backgroundColor: '#ff0000',
    color: '#fff',
    fontSize: 12,
  },
  icon: {
    marginLeft: 10,
    fontSize: 22
  }
});

export default Profile;
