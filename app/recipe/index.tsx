import {View, Text, SafeAreaView, FlatList, RefreshControl} from 'react-native'
import React, {useState} from 'react'
import NavBar_recipe from "@/app/recipe/(components_recipe)/navBar_recipe";
import AntDesign from "@expo/vector-icons/AntDesign";
import {router} from "expo-router";
import SearchBar from "@/app/recipe/(components_recipe)/SearchBar";
import FoodCategory from "@/app/recipe/(components_recipe)/FoodCategory";
import data from "@/app/data";
import Post from "@/app/(components_home)/Post";
const Index = () => {
    let [post, setPost] = useState(data);

    return (
        <SafeAreaView className="flex-1 bg-primary">
            <View className="px-3">
                <AntDesign name="left" size={28} color="white" onPress={() => router.back()}/>
            </View>
            <View className="mt-6 mb-6">
                <SearchBar/>
            </View>

            <FlatList
                className="flex-1"
                data={post}
                renderItem={({item}) => <Post data={item} />}
                keyExtractor={(item) => item.id.toString()}
                ListHeaderComponent={
                    <FoodCategory/>
                }
            />

        </SafeAreaView>
    );

}
export default Index
