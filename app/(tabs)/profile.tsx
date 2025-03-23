import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'
import {router} from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const Profile = () => {

    return (
        <View className="bg-bg flex-1">
            <View className="px-3">
                <AntDesign name="left" size={28} color="white" onPress={() => router.back()}/>
            </View>
            <View className="justify-center items-center">
                <Text className="text-white">12322222</Text>
            </View>
        </View>

    )
}


export default Profile
