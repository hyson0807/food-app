import {View, Text, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import Fontisto from '@expo/vector-icons/Fontisto';
import {router} from "expo-router";

const SearchBar = () => {
    return (
        <TouchableOpacity className="flex-row-reverse items-center justify-between bg-primary rounded-2xl px-6 py-4 gap-x-3 border-2"
                          onPress={()=> router.push('/recipe/searchPage')}
        >
            <Fontisto name="search" size={24} color="black" />
            <View><Text>Search the recipe...</Text></View>
        </TouchableOpacity>
    )
}
export default SearchBar
