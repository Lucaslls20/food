import React from "react";
import { View, Pressable, Text } from "react-native";

const Section = ({ name, action, label }) => {
    return (
        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Text style={{ color: 'black', padding: 18 }}>{name}</Text>
            <Pressable onPress={action}>
                <Text style={{ color: 'black', paddingRight: 18 }}>{label}</Text>
            </Pressable>
        </View>
    );
}

export default Section;
