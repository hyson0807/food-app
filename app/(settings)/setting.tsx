import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {signOut} from "@firebase/auth";
import {auth} from "@/firebase";
import {router} from "expo-router";

const Setting = () => {
    return (
        <View className="flex-1 justify-center items-center bg-bg">
            <LogoutButton/>
        </View>
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
