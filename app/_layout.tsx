import "./global.css";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {SafeAreaView} from "react-native";
import InitialLayout from "@/components/InitialLayout";
import ClerkAndConvexProvider from "@/providers/ClerkAndConvexProvider";

export default function RootLayout() {


  return (
      <ClerkAndConvexProvider>
      <SafeAreaProvider>
          <SafeAreaView className="flex-1 bg-bg">
            <InitialLayout />
          </SafeAreaView>
      </SafeAreaProvider>
      </ClerkAndConvexProvider>
  )
}
