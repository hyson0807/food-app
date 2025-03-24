import {View, Text, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {router, useRouter} from "expo-router";
import {useUser} from "@clerk/clerk-expo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const CreateScreen = () => {
    const router = useRouter();
    const { user } = useUser();

    const [caption, setCaption] = useState("");
    const [selectImage, setSelectImage] = useState<string | null>(null);
    const [isSharing, setIsSharing] = useState(false);

    if(!selectImage){
        return (
            <View className="flex-1 bg-pink-400">
                <View className="flex-row justify-center items-center px-4 py-2 bg-bg">
                    <View className="absolute left-4">
                        <AntDesign name="left" size={28} color="white" onPress={() => router.back()} />
                    </View>
                    <Text className="text-white font-bold text-2xl">New Post</Text>
                </View>
                <TouchableOpacity
                    className="flex-1 justify-center items-center bg-bg"
                    onPress={() => {}}
                >
                    <Ionicons name="image-outline" size={45} color="white" />
                    <Text className="text-white mt-3">Tap to select an image</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View>
            <Text>Create</Text>
        </View>
    )
}
export default CreateScreen
