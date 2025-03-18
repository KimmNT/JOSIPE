import { MealType } from "@/interfaces";
import React, { useState } from "react";
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
  data: MealType[] | null;
  selectedItem: (value: string) => void;
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  data,
  selectedItem,
}) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelectedItem = (value: string) => {
    setSelected(value);
    selectedItem(value);
    onClose();
  };

  return (
    <Modal
      transparent
      visible={visible}
      animationType="slide"
      onRequestClose={onClose} // Android back button support
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeadline}>Choose your cuisine</Text>
          <View style={styles.modalBreakLine}></View>
          <View style={styles.modalItemList}>
            {data?.map((item) => (
              <TouchableOpacity
                key={item.name}
                onPress={() => handleSelectedItem(item.value)}
                style={[
                  styles.modalItem,
                  selected === item.value ? styles.modalItemActive : "",
                ]}
              >
                <Text
                  style={[
                    styles.modalItemName,
                    selected === item.value ? styles.modalItemNameActive : "",
                  ]}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;
