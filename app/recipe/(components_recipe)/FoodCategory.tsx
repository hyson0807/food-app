import {View, Text} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const FoodCategory = () => {
    return (
        <View className="h-40  bg-bg rounded-t-2xl">
            <View className="ml-1 mt-1 border-b-primary border-b-2"><MaterialCommunityIcons name="star" size={24} color="#3F3C38" /></View>
            <View></View>

        </View>
    )
}
export default FoodCategory
