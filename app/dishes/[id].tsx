import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import refreeStyle from "../../styles/refreeStyle";
import detailStyle from "../../styles/dishDetailStyle";
import { DishDetail } from "@/interfaces";
import Icon from "@expo/vector-icons/MaterialIcons";
import RenderHTML from "react-native-render-html";
import { useWindowDimensions } from "react-native";
import { fetchData } from "@/services/api.services";

export default function DishDetailInfo() {
  const [dishInfo, setDishInfo] = useState<DishDetail | null>(null);

  const { id } = useLocalSearchParams();
  const { width } = useWindowDimensions();

  useEffect(() => {
    getDishByID();
  }, []);

  const getDishByID = async () => {
    try {
      const response = await fetchData(
        `/recipes/${id}/information?includeNutrition=true`
      );
      setDishInfo(response);
    } catch (err) {
      console.error(err);
    }
  };

  const handleNavigateBack = () => {
    router.back();
  };

  return (
    <View style={refreeStyle.homePageContainer}>
      <View style={detailStyle.detailContainer}>
        <View style={detailStyle.detailHeader}>
          <View style={detailStyle.detailHeaderController}>
            <TouchableOpacity
              onPress={handleNavigateBack}
              style={detailStyle.detailHeaderBackBtn}
            >
              <Icon
                style={detailStyle.detailHeaderBackBtnIcon}
                name="arrow-back"
              />
            </TouchableOpacity>
            <View style={detailStyle.detailHeaderCustomize}>
              <TouchableOpacity style={detailStyle.detailHeaderBtnFav}>
                <Icon
                  style={detailStyle.detailHeaderBtnFavIcon}
                  name="favorite"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false} // Hides vertical scroll bar
          showsHorizontalScrollIndicator={false} // Hides horizontal scroll bar
          style={detailStyle.detailContentContainer}
        >
          <Image
            source={{ uri: dishInfo?.image }}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
          <View style={detailStyle.detailContent}>
            <View style={detailStyle.detailContentItem}>
              <Text style={detailStyle.detailItemText}>Perfect for:</Text>
              <View style={detailStyle.detailItemList}>
                {dishInfo?.dishTypes.map((item, index) => (
                  <View key={index} style={detailStyle.detailItem}>
                    <Text style={detailStyle.detailItemName}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={detailStyle.detailContentItem}>
              <Text style={detailStyle.detailItemText}>Diet list:</Text>
              <View style={detailStyle.detailItemList}>
                {dishInfo?.diets.map((item, index) => (
                  <View key={index} style={detailStyle.detailItem}>
                    <Text style={detailStyle.detailItemName}>{item}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={detailStyle.detailContentItem}>
              <Text style={detailStyle.detailItemText}>Nutrition:</Text>
              <View style={detailStyle.detailItemList}>
                <View style={detailStyle.detailItem}>
                  <Text style={detailStyle.detailItemName}>
                    Protein:{" "}
                    {dishInfo?.nutrition.caloricBreakdown.percentProtein}%
                  </Text>
                </View>
                <View style={detailStyle.detailItem}>
                  <Text style={detailStyle.detailItemName}>
                    Fat: {dishInfo?.nutrition.caloricBreakdown.percentFat}%
                  </Text>
                </View>
                <View style={detailStyle.detailItem}>
                  <Text style={detailStyle.detailItemName}>
                    Carbohydrate:{" "}
                    {dishInfo?.nutrition.caloricBreakdown.percentCarbs}%
                  </Text>
                </View>
              </View>
            </View>
            <View style={detailStyle.detailContentItem}>
              <Text style={detailStyle.detailItemText}>
                Prepare for cooking:
              </Text>
              <View style={detailStyle.detailItemList}>
                {dishInfo?.extendedIngredients.map((item) => (
                  <View key={item.id} style={detailStyle.detailItem}>
                    <Text style={detailStyle.detailItemName}>
                      {item.original}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={detailStyle.detailContentItem}>
              <Text style={detailStyle.detailItemText}>Instructions:</Text>
              <View style={detailStyle.detailItemList}>
                <View style={[detailStyle.detailItemArea]}>
                  <Text style={detailStyle.detailItemName}>
                    <RenderHTML
                      contentWidth={width}
                      tagsStyles={{
                        p: { fontSize: 16, color: "#000", marginBottom: 10 },
                        ol: { paddingLeft: 20 },
                        li: { fontSize: 16, color: "#000", marginBottom: 5 },
                      }}
                      source={{
                        html: dishInfo?.instructions ?? "instructions here",
                      }}
                    />
                  </Text>
                </View>
              </View>
            </View>
          </View>
          {/* </View> */}
        </ScrollView>
      </View>
    </View>
  );
}
