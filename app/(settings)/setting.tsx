import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'
import {router} from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import {useAuth} from "@clerk/clerk-expo";

const Setting = () => {
    const {signOut} = useAuth()
    return (
        <View className="flex-1 bg-bg">
            <View className="px-3">
                <AntDesign name="left" size={28} color="white" onPress={() => router.back()}/>
            </View>
            <View className="flex-1 justify-center items-center bg-bg">
                <TouchableOpacity onPress={() => signOut()}>
                    <Text className="text-white">Log out</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Setting
