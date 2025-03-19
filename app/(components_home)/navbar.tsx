import {View, Text, TouchableOpacity, Animated} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import {router} from "expo-router";

// @ts-ignore
const Navbar = () => {



    return (
        <Animated.View className="  h-11 flex-row items-center justify-between mb-4 bg-bg " >
            <View className="ml-4  px-5 rounded-2xl border-white border-2">
                <Text className="text-white text-xl">FindFood</Text>
            </View>

            <View className="flex-row gap-x-4 mr-4">
                <TouchableOpacity>
                <Feather name="user" size={28} color="white"
                         onPress={()=> router.push("/profile")}
                />
                </TouchableOpacity>
                <TouchableOpacity>
                <AntDesign name="setting" size={28} color="white"
                           onPress={()=> router.push("/setting")}
                />
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}
export default Navbar
