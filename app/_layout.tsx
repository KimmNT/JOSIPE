import { IngredientProvider } from "@/context/ingredientContext";
import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <IngredientProvider>
      <SafeAreaView edges={["top"]} style={styles.safeArea}>
        <Stack
          screenOptions={{
            headerShown: false, // Hide headers for all screens
          }}
        />
      </SafeAreaView>
    </IngredientProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Ensure it takes full screen space
  },
});
