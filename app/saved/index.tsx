import {
  View,
  Text,
  Button,
  ActivityIndicator,
  ScrollView,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  loadList,
  addToList,
  removeFromList,
  clearAll,
} from "../../utility/storage";
import { fetchData } from "@/services/api.services";
import styles from "../../styles/savedStyle";
import TopNav from "@/components/topNav";
import { Dish } from "@/interfaces";
import { router } from "expo-router";

export default function index() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Dish[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    getSavedItems();
  }, []);

  const getSavedItems = async () => {
    const data = await loadList();
    // setLocalSaveItems(data);
    const saveItems = data.join(",");
    setLoading(true);
    try {
      const resonpse = await fetchData(
        `/recipes/informationBulk?ids=${saveItems}`
      );
      setData(resonpse);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.saveContainer}>
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
                getSavedItems();
              }}
            />
          }
          style={styles.saveContent}
        >
          <View style={styles.saveHeadlineContainer}>
            <Text style={styles.saveHeadline}>Your collections</Text>
          </View>
          <View style={styles.saveList}>
            {data.map((item) => (
              <TouchableOpacity
                key={item.title}
                style={styles.saveItem}
                onPress={() => router.push(`/dishes/${item.id}`)}
              >
                <Image
                  source={{ uri: item.image }}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <View style={styles.saveItemTitle}>
                  <Text style={styles.saveItemTitleValue}>{item.title}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}
