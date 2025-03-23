import {View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useSSO} from "@clerk/clerk-expo";
import {useRouter} from "expo-router";

const Login = () => {
    const {startSSOFlow} = useSSO()
    const router = useRouter()


    const handleGoogleSignIn = async () => {
        try{
            const {createdSessionId, setActive} = await startSSOFlow({strategy:"oauth_google"})

            if (setActive &&createdSessionId) {
                setActive({session:createdSessionId})
                router.replace("/(tabs)")
            }
        } catch (error) {
            console.error("OAuth error:",error)
        }

    }


    return (

        <View className="justify-start items-center flex-1 bg-bg pt-36">
            <View className="px-3 py-3 bg-secondary rounded-2xl mb-4">
                <MaterialCommunityIcons name="food-takeout-box" size={28} color="white" />
            </View>
            <Text className="font-bold text-secondary text-3xl mb-1">FindFood</Text>
            <Text className="font-bold text-primary text-sm">Find your recipe</Text>

            <Image
                source={require('../../assets/images/Recipe-book.png')}
                resizeMode='cover'
                className="w-80 h-80 mt-8"
            />
            {/* LOGIN SECTION */}
            <View className=" items-center justify-center">
                <TouchableOpacity
                    onPress={handleGoogleSignIn}
                    activeOpacity={0.9}
                    className="flex-row items-center justify-center bg-white rounded-lg w-72 h-14 gap-3"
                >
                <View>
                    <Ionicons name="logo-google" size={20} color="black" />
                </View>
                <Text className="text-black">Continue with Google</Text>
                </TouchableOpacity>
                <Text className="text-gray-600 text-sm mt-4 w-72 text-center leading-tight">
                    By continuing, you agree to our Terms and Privacy Policy
                </Text>
            </View>


        </View>
    )
}
export default Login
