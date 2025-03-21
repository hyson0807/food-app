import {View, Text, TextInput, TouchableOpacity, Alert, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import {getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "@firebase/auth";
import { app, auth } from '@/firebase';
import {router} from "expo-router";

const LoginPage = () => {

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    const [loading, setLoading] = useState(true);

    //유저 정보 확인
    const CheckUser = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                Alert.alert('Login successful!', `Hello ${user.email}`);
                router.replace('/main');
            })
            .catch((error) => {
                Alert.alert('Login failed!', error.message);
            })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // 로그인 상태면 바로 탭 네비게이션으로 이동
                router.replace("/main");
            } else {
                // 로그인 안 되어 있으면 로그인 페이지 유지
                setLoading(false);
            }
        });

        return () => unsubscribe(); // 클린업 함수
    }, []);

    if(loading) {
        return (
            <View className="flex-1 justify-center items-center">
                <ActivityIndicator size="large" />
                <Text>로그인 상태 확인 중...</Text>
            </View>
        )
    }


    return (
        <View className="flex-1 justify-center items-center">
            <TextInput className="mb-5"
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                keyboardType="email-address"

            />
            <TextInput className="mb-5"
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                secureTextEntry
            />
            <TouchableOpacity onPress={CheckUser}>
                <Text>입력</Text>
            </TouchableOpacity>

        </View>
    )
}
export default LoginPage;
