import {View, Text, SafeAreaView, TextInput} from 'react-native'
import React from 'react'
import AntDesign from "@expo/vector-icons/AntDesign";
import {router} from "expo-router";
import SearchBar from "@/app/recipe/(components_recipe)/SearchBar";
import FoodCategory from "@/app/recipe/(components_recipe)/FoodCategory";

const SearchPage = () => {
    return (
        <SafeAreaView className="flex-1 bg-bg">
            <View className="flex-row px-3 gap-1 items-center mr-2 mt-1">
                <AntDesign name="left" size={30} color="white" onPress={()=> router.back()}/>
                <TextInput
                    onPress={()=> {}}
                    placeholder="음식을 검색하세요!"
                    className="bg-primary flex-1 h-12 rounded-2xl"
                    onChangeText={()=> {}}
                    value=""
                ></TextInput>
            </View>

        </SafeAreaView>
    )
}
export default SearchPage
