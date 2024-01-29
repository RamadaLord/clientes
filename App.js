import { StatusBar } from "expo-status-bar"
import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./src/routes/routes";
export default function App() {
  return (
    <NavigationContainer>
      <StatusBar/>
      <AppRoutes/>
    </NavigationContainer>
  );
}
