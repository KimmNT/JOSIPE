import { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import ingredientData from "../../json/ingredients.json";
import Icon from "@expo/vector-icons/MaterialIcons";
import { useIngredient } from "@/context/ingredientContext"; // Import useIngredient hook
import refreeStyle from "../../styles/refreeStyle";
import TopNav from "@/components/topNav";
import { router } from "expo-router";
const emoji = require("node-emoji");

export default function Index() {
  const [ingreName, setIngreName] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const { ingredients, addIngredient, removeIngredient } = useIngredient();

  // Handle typing
  const handleInputChange = (text: string) => {
    setIngreName(text);
    if (text.length > 0) {
      const filtered = ingredientData.filter((item) =>
        item.toLowerCase().includes(text.toLowerCase())
      );
      setFilteredSuggestions(filtered);
    } else {
      setFilteredSuggestions([]);
    }
  };

  // Handle adding ingredient from input or suggestion
  const handleAddIngredient = (name: string) => {
    addIngredient(name);
    setIngreName("");
    setFilteredSuggestions([]); // Clear suggestions after selection
  };

  const handleGenerateDishes = async () => {
    // setLoading(true)
    try {
      const queryArray = ingredients
        .map((item) => item.name.toLowerCase())
        .join(",");
      // const response = await fetchData(
      //   `/recipes/findByIngredients?ingredients=${queryArray}&number=6`
      // );
      // setDishes(response);
      router.push({
        pathname: "/mealList",
        params: {
          url: `/recipes/findByIngredients?ingredients=${queryArray}&number=10`,
          type: "Meals Suggestion",
          endPoin: "",
        },
      });
    } catch (err) {
      console.error(err);
    } finally {
      console.log("finally");
    }
  };

  return (
    <View style={refreeStyle.refreePageContainer}>
      <TopNav />
      {/* Input Field */}
      <View style={refreeStyle.refreeHeader}>
        <View style={refreeStyle.refreeHeadlineContainer}>
          <Text style={refreeStyle.refreeHeadlineValue}>
            Fill in your ingredients
          </Text>
        </View>
        <View style={refreeStyle.refreepageInputContainer}>
          <TextInput
            style={refreeStyle.refreepageInput}
            value={ingreName}
            onChangeText={handleInputChange}
            placeholder="Enter ingredient"
            placeholderTextColor="#2A3335"
          />
        </View>
      </View>

      {filteredSuggestions.length > 0 && (
        <View style={refreeStyle.refreepageSuggestion}>
          <FlatList
            data={filteredSuggestions}
            keyExtractor={(item, index) => index.toString()}
            style={refreeStyle.refreepageSuggestionList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={refreeStyle.refreepageSuggestionItem}
                onPress={() => handleAddIngredient(item)}
              >
                <Text style={refreeStyle.refreepageSuggestionItemText}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      <View style={refreeStyle.refreepageIngreContainer}>
        <View style={refreeStyle.refreepageIngreList}>
          {ingredients.map((ingredient) => (
            <View key={ingredient.name} style={refreeStyle.refreepageIngreItem}>
              <Text>{emoji.get(`${ingredient.name.toLowerCase()}`)}</Text>
              <Text style={refreeStyle.refreepageIngreItemTitle}>
                {ingredient.name}
              </Text>
              <TouchableOpacity
                onPress={() => removeIngredient(ingredient.id)}
                style={refreeStyle.refreepageIngreItemButton}
              >
                <Icon name="close" color="white" size={17} />
              </TouchableOpacity>
            </View>
          ))}
          {ingredients && ingredients.length > 0 && (
            <TouchableOpacity
              onPress={handleGenerateDishes}
              style={[
                refreeStyle.refreepageIngreItem,
                refreeStyle.refreepageCreateDishBtn,
              ]}
            >
              <Text style={refreeStyle.refreepageCreateDishBtnText}>
                Cook it!
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}
