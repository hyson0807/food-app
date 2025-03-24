import React from 'react'
import {router, Tabs} from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from '@expo/vector-icons/Entypo';

const TabLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#3F3C38',
                tabBarStyle: {
                    backgroundColor: '#1d1a16',
                    borderTopWidth: 0,
                    position: 'absolute',
                    elevation: 0,
                    height: 40,
                    paddingBottom: 8
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />
                }}

            />
            <Tabs.Screen
                name="bookmarks"
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="bookmark" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name="create"
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="add-circle" size={size} color="#4ADE80" />
                }}
            />
            <Tabs.Screen
                name="notifications"
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="heart" size={size} color={color} />
                }}
            />

            <Tabs.Screen
                name="goHome"
                options={{
                    tabBarIcon: ({ size, color }) => <Entypo name="circle-with-cross" size={size} color={color} />
                }}
                listeners={{
                    tabPress: (e) => {
                        e.preventDefault();
                        router.replace('/');
                    }
                }}
            />

        </Tabs>
    )
}
export default TabLayout
