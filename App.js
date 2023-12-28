import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { useFonts } from 'expo-font';
import { SignUpScreen } from "./signup";
import HomeScreen from "./Home";

export default function App() {
  const Stack = createNativeStackNavigator();
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="SignUp"
          screenOptions={{ animation: "none" }}
        >
          <Stack.Screen
            name="SignUp"
            options={{
              headerShown: false,
            }}
            component={SignUpScreen}
          />
          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
