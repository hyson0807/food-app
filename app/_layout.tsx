import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
      <Stack initialRouteName="index">
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="main" options={{ headerShown: false }} />
          <Stack.Screen name="recipe/index" options={{ headerShown: false }} />
          <Stack.Screen name="(profile)/profile" options={{ headerShown: false }}/>
          <Stack.Screen name="(settings)/setting" options={{ headerShown: false }}/>

      </Stack>
  )


}
