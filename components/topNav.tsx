import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import detailStyle from "../styles/dishDetailStyle";
import React from "react";
import { router } from "expo-router";
import Icon from "@expo/vector-icons/MaterialIcons";

const res = Dimensions.get("window").height;

export default function TopNav() {
  const handleNavigateBack = () => {
    router.back();
  };

  return (
    <View style={styles.detailHeader}>
      <View style={styles.detailHeaderController}>
        <TouchableOpacity
          onPress={handleNavigateBack}
          style={styles.detailHeaderBackBtn}
        >
          <Icon style={styles.detailHeaderBackBtnIcon} name="arrow-back" />
        </TouchableOpacity>
        {/* <View style={detailStyle.detailHeaderCustomize}>
          <TouchableOpacity style={detailStyle.detailHeaderBtnFav}>
            <Icon style={detailStyle.detailHeaderBtnFavIcon} name="favorite" />
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailHeader: {
    position: "relative",
  },
  detailHeaderController: {
    position: "absolute",
    top: 10,
    left: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: res * 0.01,
    zIndex: 100,
    // backgroundColor: "#000",
  },
  detailHeaderBackBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: res * 0.06,
    height: res * 0.06,
    borderRadius: (res * 0.06) / 2,
    borderWidth: res * 0.001,
    borderColor: "#FFF",
    borderStyle: "solid",
  },
  detailHeaderBackBtnIcon: {
    fontSize: res * 0.03,
    color: "#000",
  },
});
