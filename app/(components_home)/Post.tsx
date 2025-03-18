import {View, Text} from 'react-native'
import React from 'react'
import axios from "axios";


interface Product {
    id: number;
    title: string;
    content: string;
    price: number;
}

interface PostProps {
    data: Product;  // data prop의 타입을 Product로 설정
}

const Post: React.FC<PostProps> = (props) => {
    const {data} = props;
    let food_data = axios.get('http://211.237.50.150:7080/openapi/sample/xml/Grid_20150827000000000226_1/1/5');
    return (


        <View className="p-4 border-b border-gray-300 bg-gray-700">
            <Text className="text-white">{data.title}</Text>
            <Text className="text-gray-600">{data.content}</Text>
            <Text className="text-black">${data.price}</Text>
        </View>
    )
}
export default Post
