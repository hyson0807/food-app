import React from 'react'
import {Stack, Tabs} from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';


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
                name = 'index'
                options={{
                    tabBarIcon: ({ size, color }) => <Ionicons name="home-outline" size={size} color={color} />
                }}
            />
            <Tabs.Screen
                name = 'profile'
                options={{
                    tabBarIcon: ({ size, color }) => <FontAwesome6 name="circle-user" size={size} color={color} />
                }}

            />
        </Tabs>
    )
}
export default TabLayout
