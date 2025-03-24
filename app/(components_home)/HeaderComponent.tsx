import {View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import {Link} from "expo-router";
import Navbar from "@/app/(components_home)/navbar";

const HeaderComponent = () => {

    return (
        <View className="w-full bg-bg pt-4 px-4  pb-4">

            <View className="flex-row flex-wrap justify-between">
                    <Link href={"/recipe"} asChild>
                        <TouchableOpacity className="w-[23%] h-20 bg-primary items-center justify-center mb-4 rounded-2xl">
                            <Text className="text-white">레시피 찾기</Text>
                        </TouchableOpacity>
                    </Link>

                <Link href={"/instagram"} asChild>
                    <TouchableOpacity className="w-[23%] h-20 bg-primary items-center justify-center mb-4 rounded-2xl">
                        <Text className="text-white">인스타그램</Text>
                    </TouchableOpacity>
                </Link>
                <View className="w-[23%] h-20 bg-primary items-center justify-center mb-4 rounded-2xl">
                    <Text className="text-white">모달 3</Text>
                </View>
                <View className="w-[23%] h-20 bg-primary items-center justify-center mb-4 rounded-2xl">
                    <Text className="text-white">모달 4</Text>
                </View>
                {/* 2행 */}
                <View className="w-[23%] h-20 bg-primary items-center justify-center rounded-2xl">
                    <Text className="text-white">모달 5</Text>
                </View>
                <View className="w-[23%] h-20 bg-primary items-center justify-center rounded-2xl">
                    <Text className="text-white">모달 6</Text>
                </View>
                <View className="w-[23%] h-20 bg-primary items-center justify-center rounded-2xl">
                    <Text className="text-white">모달 7</Text>
                </View>
                <View className="w-[23%] h-20 bg-primary items-center justify-center rounded-2xl">
                    <Text className="text-white">모달 8</Text>
                </View>
            </View>
        </View>
    )
}
export default HeaderComponent
