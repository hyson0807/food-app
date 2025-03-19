import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native'
import React from 'react'
import {signOut} from "@firebase/auth";
import {auth} from "@/firebase";
import {router} from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const Setting = () => {
    return (
        <SafeAreaView className="flex-1 bg-bg">
            <View className="px-3">
                <AntDesign name="left" size={28} color="white" onPress={() => router.back()}/>
            </View>
            <View className="flex-1 justify-center items-center bg-bg">
                <LogoutButton/>
            </View>
        </SafeAreaView>
    )
}

const LogoutButton = () => {
    const LogOut = () => {
        signOut(auth)
            .then(() => {router.replace("/")})
            .catch((error: Error) => {console.error("Logout error:", error.message);});
    };
    return (
        <TouchableOpacity onPress={LogOut}>
            <Text className="text-white">로그아웃</Text>
        </TouchableOpacity>
    )
}
export default Setting
