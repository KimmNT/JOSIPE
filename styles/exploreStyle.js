import { StyleSheet, Dimensions, Platform } from "react-native";
const primary = "#E9762B";
const secondary = "#0D4715";
const dark = "#000";
const softDark = "#2A3335";
const light = "#fff";
const dangerous = "#A31D1D";
const background = "#F1F0E9";
const favorite = "#ee9da0";
const saved = "#FE4F2D";
const gray = "#EEEEEE";
// Get screen height dynamically
const res = Dimensions.get("window").height;

const styles = StyleSheet.create({
  exploreContainer: {},
  exploreContent: {
    width: "100%",
    flexGrow: 1,
    padding: res * 0.02,
  },
  exploreHeadlineContainer: {
    alignItems: "flex-end",
    marginBottom: res * 0.02,
  },
  exploreHeadline: {
    fontSize: res * 0.04,
  },
  exploreList: {
    flexDirection: "column",
    gap: res * 0.02,
    position: "relative",
    backgroundColor: light,
    borderRadius: res * 0.01,
    padding: res * 0.02,
  },
  exploreItem: {
    width: "100%",
    gap: res * 0.01,
    flexDirection: "row",
    alignItems: "center",
  },
  exploreBreakLine: {
    width: "100%",
    height: res * 0.002,
    backgroundColor: gray,
  },
  exploreItemTitleContainer: {},
  exploreItemTitle: {
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  exploreSelectedItem: {
    paddingVertical: res * 0.005,
    paddingHorizontal: res * 0.01,
    backgroundColor: primary,
    borderRadius: res * 0.05,
  },
  exploreSelectedItemName: {
    color: light,
    fontSize: res * 0.02,
  },
});

export default styles;
