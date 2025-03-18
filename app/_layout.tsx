import { Stack } from "expo-router";
import "./global.css";

export default function RootLayout() {
  return (
      <Stack initialRouteName="index">
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="main" options={{ headerShown: false }} />
          <Stack.Screen name="profile" options={{ headerShown: true }} />
      </Stack>
  )


}
