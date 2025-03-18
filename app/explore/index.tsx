import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import TopNav from "@/components/topNav";
import styles from "@/styles/exploreStyle";
import exploreData from "@/json/explore.json";
import CustomModal from "@/model/Modal";
import { MealType } from "@/interfaces";

export default function index() {
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedDiet, setSelectedDiet] = useState("");
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedMinCarbs, setSelectedMinCarbs] = useState(10);
  const [selectedMaxCarbs, setSelectedMaxCarbs] = useState(50);
  const [selectedMinProtein, setSelectedMinProtein] = useState(10);
  const [selectedMaxProtein, setSelectedMaxProtein] = useState(50);
  const [selectedMinCalories, setSelectedMinCalories] = useState(100);
  const [selectedMaxCalories, setSelectedMaxCalories] = useState(400);
  const [selectedMinFat, setSelectedMinFat] = useState(10);
  const [selectedMaxFat, setSelectedMaxFat] = useState(50);
  const [selectedNumber, setSelectedNumber] = useState(1);
  const [isCuisineModalVisible, setIsCuisineModalVisible] = useState(false);
  const [isDietModalVisible, setIsDietModalVisible] = useState(false);
  const [isEquipmentModalVisible, setIsEquipmentModalVisible] = useState(false);
  const [isTypeModalVisible, setIsTypeModalVisible] = useState(false);
  const [isReadyTimeModalVisible, setIsReadyTimeModalVisible] = useState(false);
  const [isCarbsModalVisible, setIsCarbsModalVisible] = useState(false);
  const [isProteinModalVisible, setIsProteinModalVisible] = useState(false);
  const [isCaloriesModalVisible, setIsCaloriesModalVisible] = useState(false);
  const [isFatModalVisible, setIsFatModalVisible] = useState(false);
  const [isNumberModalVisible, setIsNumberModalVisible] = useState(false);
  const [selectedData, setSelectedData] = useState<MealType[]>([]);

  // const handleSelectEquipment = (equipment: string) => {
  //   setSelectedEquipment((prev) => {
  //     if (prev.includes(equipment)) {
  //       // Remove if already selected
  //       return prev.filter((item) => item !== equipment);
  //     } else {
  //       // Add if not selected
  //       return [...prev, equipment];
  //     }
  //   });
  // };

  const handleOpenCuisineModal = (data: MealType[]) => {
    setSelectedData(data);
    setIsCuisineModalVisible(true);
  };

  const getSelectedItemName = (
    data: MealType[],
    value: string | null | undefined
  ) => {
    const result = data.find((item) => item.value === value);

    return result?.name || "itemName";
  };

  return (
    <View style={styles.exploreContainer}>
      <TopNav />
      <ScrollView
        showsVerticalScrollIndicator={false} // Hides vertical scroll bar
        showsHorizontalScrollIndicator={false}
        style={styles.exploreContent}
      >
        <View style={styles.exploreHeadlineContainer}>
          <Text style={styles.exploreHeadline}>Explore the meals</Text>
        </View>
        <View style={styles.exploreList}>
          {/* CUISINE */}
          <TouchableOpacity
            onPress={() => handleOpenCuisineModal(exploreData.cuisine)}
            style={styles.exploreItem}
          >
            <View style={styles.exploreItemTitleContainer}>
              <Text style={styles.exploreItemTitle}>Cuisien</Text>
            </View>
            <View style={styles.exploreSelectedItem}>
              <Text style={styles.exploreSelectedItemName}>
                {getSelectedItemName(exploreData.cuisine, selectedCuisine)}
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.exploreBreakLine}></View>

          <TouchableOpacity
            onPress={() => handleOpenCuisineModal(exploreData.cuisine)}
            style={styles.exploreItem}
          >
            <View style={styles.exploreItemTitleContainer}>
              <Text style={styles.exploreItemTitle}>Cuisien</Text>
            </View>
            <View style={styles.exploreSelectedItem}>
              <Text style={styles.exploreSelectedItemName}>
                {getSelectedItemName(exploreData.cuisine, selectedCuisine)}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <CustomModal
        visible={isCuisineModalVisible}
        onClose={() => setIsCuisineModalVisible(false)}
        data={selectedData}
        selectedItem={(value) => setSelectedCuisine(value)}
      />
    </View>
  );
}
