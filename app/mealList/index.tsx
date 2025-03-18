import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { fetchData } from "@/services/api.services";
import { Dish } from "@/interfaces";
import styles from "../../styles/mealListStyle";
import TopNav from "../../components/topNav";

export default function MealList() {
  const { url, type, endPoin } = useLocalSearchParams();
  const [mealList, setMealList] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getDataFromURL();
  }, []);

  const getDataFromURL = async () => {
    if (!url) return;
    setLoading(true);
    try {
      const response = await fetchData(`${url}`); // Fetch API data

      // Dynamically select the correct response field
      let extractedData;
      switch (endPoin) {
        case "results":
          extractedData = response.results;
          break;
        case "recipes":
          extractedData = response.recipes;
          break;
        case "meals":
          extractedData = response.meals;
          break;
        default:
          extractedData = response; // Default case if type is unknown
      }

      setMealList(extractedData || []); // Ensure it always sets an array
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.mealListContainer}>
      <TopNav />
      {loading ? (
        <ActivityIndicator color="#000" size={200} />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false} // Hides vertical scroll bar
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                getDataFromURL();
              }}
            />
          }
          style={styles.mealListContent}
        >
          <View style={styles.mealListHeadlineContainer}>
            <Text style={styles.mealListHeadline}>{type}</Text>
          </View>
          <View style={styles.mealList}>
            {/* <FlatList
            data={mealList}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => {
                  getDataFromURL();
                }}
              />
            }
            // onEndReached={getDataFromURL} // Triggered when reaching the end
            // onEndReachedThreshold={0.5} // Controls when to trigger (0.5 = halfway near the end)
            // ListFooterComponent={
            //   loading ? <ActivityIndicator size="large" color="blue" /> : null
            // } // Loading indicator
            renderItem={({ item }) => (
              <View style={styles.mealListItem}>
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <View style={styles.mealListItemTitle}>
                  <Text style={styles.mealListItemTitleValue}>
                    {item.title}
                  </Text>
                </View>
              </View>
            )}
          /> */}
            {mealList.map((meal) => (
              <TouchableOpacity
                style={styles.mealListItem}
                key={meal.title}
                onPress={() => router.push(`/dishes/${meal.id}`)}
                // onPress={() => console.log(meal.id)}
              >
                <Image
                  source={{ uri: meal.image }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <View style={styles.mealListItemTitle}>
                  <Text style={styles.mealListItemTitleValue}>
                    {meal.title}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
