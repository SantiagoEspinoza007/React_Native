import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import "react-native-reanimated";

import { GestureHandlerRootView } from "react-native-gesture-handler";

import { useColorScheme } from "@/hooks/useColorScheme";

import { allRoutes } from "@/constants/Routes";
import { useThemeColor } from "@/hooks/useThemeColor";
import { Stack } from "expo-router";
import "../global.css";

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, "background");
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <GestureHandlerRootView
      style={{ flex: 1, backgroundColor: backgroundColor }}
    >
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack 
          screenOptions={{
            headerShadowVisible: false,
            contentStyle: {
              backgroundColor: backgroundColor,
            }
          }}
        >
          <Stack.Screen name="index"
            options={{
              title: '',

            }} />
            {
              allRoutes.map((route) => (
                <Stack.Screen
                  key={route.name}
                  name={route.name}
                  options={{
                    title: route.title,
                    headerTitleStyle: {
                      fontFamily: "SpaceMono",
                      fontSize: 20,
                      fontWeight: "bold",
                    },
                  }}
                />
              ))
            }
        </Stack>

        {/* <ThemedView margin>
          <ThemedText type="h1" className="mt-10">
            Hola Mundo
          </ThemedText>
        </ThemedView> */}
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
