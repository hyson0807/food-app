import {View, Text, TouchableOpacity, Animated} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import {router} from "expo-router";

const NavBar_recipe = () => {
    return (
        <View className="  h-11 flex-row items-center justify-between mb-4 bg-bg " >
            <View className="px-5">
                <AntDesign name="left" size={28} color="white" onPress={()=> router.back()}/>
            </View>

            <View className="flex-row gap-x-4 mr-4">
                <TouchableOpacity>
                    <AntDesign name="search1" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="menu-unfold" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default NavBar_recipe
