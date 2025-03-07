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
import { Dish } from "@/interfaces";
import refreeStyle from "../../styles/refreeStyle";
import CustomModal from "@/model/Modal";
import { fetchData } from "@/services/api.services";

export default function Index() {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [ingreName, setIngreName] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);
  const { ingredients, addIngredient, removeIngredient } = useIngredient();
  const [modalVisible, setModalVisible] = useState(false);

  // const { data: dishes, loading, error } = useFetch<Dish[]>(query);

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
    try {
      const queryArray = ingredients
        .map((item) => item.name.toLowerCase())
        .join(",");
      const response = await fetchData(
        `/recipes/findByIngredients?ingredients=${queryArray}&number=6`
      );
      setDishes(response);
    } catch (err) {
      console.error(err);
    } finally {
      console.log("finally");
    }
    setModalVisible(true);
  };

  return (
    <View style={refreeStyle.homePageContainer}>
      {/* Input Field */}
      <View style={refreeStyle.homepageInputContainer}>
        <TextInput
          style={refreeStyle.homepageInput}
          value={ingreName}
          onChangeText={handleInputChange}
          placeholder="Enter ingredient"
          placeholderTextColor="#2A3335"
        />
      </View>

      {filteredSuggestions.length > 0 && (
        <View style={refreeStyle.homepageSuggestion}>
          <FlatList
            data={filteredSuggestions}
            keyExtractor={(item, index) => index.toString()}
            style={refreeStyle.homepageSuggestionList}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={refreeStyle.homepageSuggestionItem}
                onPress={() => handleAddIngredient(item)}
              >
                <Text style={refreeStyle.homepageSuggestionItemText}>
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      <View style={refreeStyle.homepageIngreContainer}>
        <View style={refreeStyle.homepageIngreList}>
          {ingredients.map((ingredient) => (
            <View key={ingredient.id} style={refreeStyle.homepageIngreItem}>
              <Text style={refreeStyle.homepageIngreItemTitle}>
                {ingredient.name}
              </Text>
              <TouchableOpacity
                onPress={() => removeIngredient(ingredient.id)}
                style={refreeStyle.homepageIngreItemButton}
              >
                <Icon name="close" color="white" size={17} />
              </TouchableOpacity>
            </View>
          ))}
          {ingredients && ingredients.length > 0 && (
            <TouchableOpacity
              onPress={handleGenerateDishes}
              style={[
                refreeStyle.homepageIngreItem,
                refreeStyle.homepageCreateDishBtn,
              ]}
            >
              {/* {loading ? (
                <ActivityIndicator color="#FFF" />
              ) : (
                <Text style={refreeStyle.homepageCreateDishBtnText}>
                  Cook it!
                </Text>
              )} */}
              <Text style={refreeStyle.homepageCreateDishBtnText}>
                Cook it!
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <CustomModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        title="Hello!"
        content="This is a custom modal with TypeScript."
        data={dishes}
      />
    </View>
  );
}
