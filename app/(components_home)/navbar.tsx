import {View, Text, TouchableOpacity, Animated} from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

// @ts-ignore
const Navbar = () => {



    return (
        <Animated.View className="  h-11 flex-row items-center justify-between mb-4 bg-bg " >
            <View className="px-5">
                <Text className="text-white text-xl">앱이름</Text>
            </View>

            <View className="flex-row gap-x-4 mr-4">
                <TouchableOpacity>
                <AntDesign name="search1" size={28} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                <AntDesign name="setting" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </Animated.View>
    )
}
export default Navbar
