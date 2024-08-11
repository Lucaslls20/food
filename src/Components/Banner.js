import React from "react";
import { View, Pressable, Image } from "react-native";
import PagerView from 'react-native-pager-view';

const Banner = () => {
    return (
        <View style={{ width: '100%', height: 150, borderRadius: 16, marginBottom: 16, marginTop: 20 }}>
            <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
                <Pressable style={{ width: '100%', height: 150, borderRadius: 16 }} key="1" onPress={() => console.log('Clicou no banner')}>
                    <Image
                        source={{ uri: 'https://cdn.pixabay.com/photo/2022/01/23/16/33/fries-6961356_1280.jpg' }}
                        style={{ width: '100%', height: 150, borderRadius: 16 }}
                    />
                </Pressable>
              
                <Pressable style={{ width: '100%', height: 150, borderRadius: 16 }} key="2" onPress={() => console.log('Clicou no banner')}>
                    <Image
                        source={{ uri: 'https://cdn.pixabay.com/photo/2015/10/06/19/10/sushi-975075_960_720.jpg' }}
                        style={{ width: '100%', height: 150, borderRadius: 16 }}
                    />
                </Pressable>
               
                <Pressable style={{ width: '100%', height: 150, borderRadius: 16 }} key="3" onPress={() => console.log('Clicou no banner')}>
                    <Image
                        source={{ uri: 'https://cdn.pixabay.com/photo/2019/02/09/12/46/pizza-3985057_1280.jpg' }}
                        style={{ width: '100%', height: 150, borderRadius: 16 }}
                    />
                </Pressable>
            </PagerView>
        </View>
    );
}

export default Banner;
