import { Dish } from "@/interfaces";
import React from "react";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import styles from "../styles/dishModal";
import { router } from "expo-router";
import Icon from "@expo/vector-icons/MaterialIcons";

interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  title?: string;
  content?: string;
  data: Dish[] | null;
}

const { width, height } = Dimensions.get("window");

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  title,
  content,
  data,
}) => {
  const handleDishDetail = (dishId: number) => {
    router.push(`/dishes/${dishId}`);
    onClose();
  };
  return (
    <Modal
      transparent
      visible={visible}
      animationType="fade"
      onRequestClose={onClose} // Android back button support
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false} // Hides vertical scroll bar
            showsHorizontalScrollIndicator={false} // Hides horizontal scroll bar
          >
            {data && data.length > 0 && (
              <View style={styles.modalItemList}>
                {data.map((data) => (
                  <Pressable
                    onPress={() => handleDishDetail(data.id)}
                    key={data.id}
                    style={styles.modalItem}
                  >
                    <Image
                      source={{ uri: data.image }}
                      style={styles.modalItemImage}
                    />
                    <View style={styles.modalItemContent}>
                      <Text style={styles.modalItemTitle}>{data.title}</Text>
                      <View style={styles.modalItemIngre}>
                        {data.usedIngredients.map((item) => (
                          <View key={item.id} style={styles.modalItemIngreUse}>
                            <Text style={styles.modalItemIngreUseText}>
                              {item.name}
                            </Text>
                          </View>
                        ))}
                        <View style={styles.modalItemIngreNotUse}>
                          <Text style={styles.modalItemIngreNotUseText}>
                            +{data.missedIngredientCount} more
                          </Text>
                        </View>
                      </View>
                    </View>
                  </Pressable>
                ))}
              </View>
            )}
          </ScrollView>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Icon name="close" style={styles.closeButtonText} />
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
