import {
    FlatList,
    SafeAreaView,
    Text,
    TouchableOpacity,
    Animated,
    NativeScrollEvent,
    NativeSyntheticEvent,
    View
} from "react-native";
import React, {useRef, useState} from "react";
import data from "@/app/data";
import Post from "@/app/(components_home)/Post";
import HeaderComponent from "@/app/(components_home)/HeaderComponent";
import {router} from "expo-router";
import Navbar from "@/app/(components_home)/navbar";

export default function Main() {
    let [post, setPost] = useState(data);
    const scrollY = useRef(new Animated.Value(0)).current;
    const [showNavBar, setShowNavBar] = useState(true);
    const lastScrollY = useRef(0);

    const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const currentY = event.nativeEvent.contentOffset.y;
        if(currentY > lastScrollY.current + 10) {
            setShowNavBar(false);
        } else if(currentY < lastScrollY.current - 10) {
            setShowNavBar(true);
        }
        lastScrollY.current = currentY;
    };

    return (
        <View className="bg-bg">
            {showNavBar && (
                <Navbar/>
            )}

            <FlatList
                data={post}
                renderItem={({item})=> <Post data={item} /> }
                keyExtractor={(item) => item.id.toString()}
                onScroll={handleScroll}
                scrollEventThrottle={16}
                ListHeaderComponent={
                    <HeaderComponent />
                }

            />


        </View>
    )
}
