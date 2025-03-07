import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "@expo/vector-icons/Ionicons";
import homeNav from "../json/homeNav.json";
import styles from "../styles/homeStyle";
import phraseOnTime from "../json/phraseOnTime.json";
import { router } from "expo-router";
import { fetchData } from "../services/api.services";
import { Diet, MealType, Recipe } from "@/interfaces";
import diet from "../json/diet.json";

const homeRefreeImage = require("../assets/images/homeRefreeImage.jpg");
const homeCustomizeImage = require("../assets/images/homeCustomzie.jpg");

const imageMap: { [key: string]: any } = {
  breakfast: require("../assets/images/breakfast.jpg"),
  sauce: require("../assets/images/sauce.jpg"),
  bread: require("../assets/images/bread.jpg"),
  maincourse: require("../assets/images/maincourse.jpg"),
  salad: require("../assets/images/salad.jpg"),
  sidedish: require("../assets/images/sidedish.jpg"),
  snack: require("../assets/images/snack.jpg"),
  fingerfood: require("../assets/images/fingerfood.jpg"),
  soup: require("../assets/images/soup.jpg"),
  beverage: require("../assets/images/beverage.jpg"),
};

type IconName = keyof typeof Icon.glyphMap; // TAKE MATCHING ICONS

export default function index() {
  const [recommend, setRecommend] = useState<Recipe[]>([]);
  const [dietMeals, setDietMeals] = useState<Diet[]>([]);
  const [mealTypeList, setMealTypeList] = useState<MealType[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [dietName, setDietName] = useState("");

  useEffect(() => {
    getRandomMeal(6);
    handleGetDiet();
    handleGetMealType();
  }, []);

  //GET RANDOM MEALS FOR RECOMMEND SECTION
  const getRandomMeal = async (randomNumber: number) => {
    try {
      const response = await fetchData(
        `/recipes/random?includeNutrition=false&number=${randomNumber}`
      );
      setRecommend(response.recipes);
      setRefreshing(false);
    } catch (err) {
      console.error(err);
    }
  };

  //GET QUOTE BASE ON TIME-HOUR
  const handleGetCurrentPhrase = () => {
    const time = new Date().getHours();
    const returnedValue = phraseOnTime.find(
      (item) => time >= item.startTime && time <= item.endTime
    );

    return returnedValue?.value;
  };

  //GET MEAL TYPE BASE ON TIME-HOUR
  const handleGetMealType = () => {
    const time = new Date().getHours();
    const returnedValue = phraseOnTime.find(
      (item) => time >= item.startTime && time <= item.endTime
    );

    setMealTypeList(returnedValue?.mealList || []);
  };

  const handleGetDiet = async () => {
    //return a random number base on diet length
    const randomIndex = Math.floor(Math.random() * diet.length);
    //get a diet base on randomIndex
    const randomDiet = diet.find((item) => item.id === randomIndex);
    try {
      const response = await fetchData(
        `/recipes/complexSearch?diet=${randomDiet?.value}&number=6&offset=3`
      );
      setDietName(randomDiet?.name || "");
      setDietMeals(response.results);
      setRefreshing(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <View style={styles.homeContainer}>
      <View style={styles.homeContent}>
        <ScrollView
          showsVerticalScrollIndicator={false} // Hides vertical scroll bar
          showsHorizontalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={() => {
                getRandomMeal(5);
                handleGetDiet();
              }}
            />
          }
          style={styles.homeScroll}
        >
          <View style={styles.homeScrollContent}>
            <View style={styles.homeHeadlineContainer}>
              <TouchableOpacity onPress={() => router.push("/testing")}>
                <Text style={styles.homeHeadline}>
                  {handleGetCurrentPhrase()}
                </Text>
              </TouchableOpacity>
            </View>
            {/* SLOGAN */}
            <View style={styles.homeItemContainer}>
              <Image
                source={homeRefreeImage}
                style={{ width: "100%", height: 220, objectFit: "cover" }}
              />
              <View style={styles.homeSloganContent}>
                <Text style={styles.homeSloganText}>
                  Let’s turn your ingredients into a masterpiece!
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/refree")}
                  style={styles.homeSloganBtnContainer}
                >
                  <Text style={styles.homeSloganBtnText}>Cook it</Text>
                  <Icon name="arrow-forward" style={styles.homeSloganBtnIcon} />
                </TouchableOpacity>
              </View>
            </View>
            {/* MEAL TYPE */}
            <View style={styles.homeItem}>
              <Text style={styles.homeItemTitle}>Pick your flavor!</Text>
              <View style={[styles.homeItemList]}>
                {mealTypeList.map((meal, index) => (
                  <TouchableOpacity
                    onPress={() => router.push("/refree")}
                    key={index}
                    style={[styles.item, styles.itemGrow]}
                  >
                    <Image
                      source={
                        imageMap[meal.value] ||
                        require("../assets/images/sauce.jpg")
                      }
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                    <View style={styles.itemContent}>
                      <Text style={styles.itemText}>{meal.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            {/* DIET RANDOM GENERATED */}
            <View style={styles.homeItem}>
              <Text style={styles.homeItemTitle}>
                Stay fit with {dietName}!
              </Text>
              <ScrollView
                horizontal
                showsVerticalScrollIndicator={false} // Hides vertical scroll bar
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.homeItemList}>
                  {dietMeals.map((item) => (
                    <TouchableOpacity
                      onPress={() => router.push(`/dishes/${item.id}`)}
                      style={styles.item}
                      key={item.id}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <View style={styles.itemContent}>
                        <Text style={styles.itemText}>{item.title}</Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
            {/* CUSTOMIZE */}
            <View style={styles.homeItemContainer}>
              <Image
                source={homeCustomizeImage}
                style={{ width: "100%", height: 200, objectFit: "cover" }}
              />
              <View style={styles.homeSloganContent}>
                <Text style={styles.homeSloganText}>
                  Let’s craft your meal, your way!
                </Text>
                <TouchableOpacity
                  onPress={() => router.push("/explore")}
                  style={styles.homeSloganBtnContainer}
                >
                  <Text style={styles.homeSloganBtnText}>Customize it</Text>
                  <Icon name="arrow-forward" style={styles.homeSloganBtnIcon} />
                </TouchableOpacity>
              </View>
            </View>
            {/* RECOMMEND */}
            <View style={styles.homeItem}>
              <Text style={styles.homeItemTitle}>Handpicked just for you!</Text>
              <ScrollView
                horizontal
                showsVerticalScrollIndicator={false} // Hides vertical scroll bar
                showsHorizontalScrollIndicator={false}
              >
                <View style={styles.homeItemList}>
                  {recommend.map((item) => (
                    <TouchableOpacity
                      onPress={() => router.push(`/dishes/${item.id}`)}
                      style={styles.item}
                      key={item.id}
                    >
                      <Image
                        source={{ uri: item.image }}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                      <View style={styles.itemContent}>
                        <Text style={styles.itemText}>{item.title}</Text>
                        <View style={styles.itemTimeTaken}>
                          <Icon
                            style={styles.itemTimeTakenIcon}
                            name="time-outline"
                          />
                          <Text style={styles.itemTimeTakenText}>
                            {item.readyInMinutes} mins
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
        <View style={styles.homeBottomTabs}>
          <View style={styles.homeBottomTabsContent}>
            <View style={styles.homeTabsItem}>
              <Icon
                name="home"
                style={[styles.homeTabsItemIcon, styles.homeTabsItemHome]}
              />
              <Text style={styles.homeTabsItemName}>Home</Text>
            </View>
            {homeNav.map((item) => (
              <TouchableOpacity
                key={item.url}
                onPress={() => router.push(`${item.url}`)}
                style={styles.homeTabsItem}
              >
                <Icon
                  name={item.iconValue as IconName}
                  style={styles.homeTabsItemIcon}
                />
                <Text style={styles.homeTabsItemName}>{item.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
