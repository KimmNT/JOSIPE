import { StyleSheet, Dimensions, Platform } from "react-native";
const primary = "#E9762B";
const secondary = "#0D4715";
const dark = "#000";
const softDark = "#2A3335";
const light = "#fff";
const dangerous = "#A31D1D";
const background = "#F1F0E9";
const favorite = "#ee9da0";
const saved = "#fac703";
// Get screen height dynamically
const res = Dimensions.get("window").height;

const styles = StyleSheet.create({
  mealListContainer: {},
  mealListContent: {
    width: "100%",
    flexGrow: 1,
    padding: res * 0.02,
  },
  mealListHeadlineContainer: {
    alignItems: "flex-end",
    marginBottom: res * 0.02,
  },
  mealListHeadline: {
    fontSize: res * 0.04,
  },
  mealList: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    gap: res * 0.02,
    position: "relative",
  },
  mealListItem: {
    width: "47%",
    height: res * 0.25,
    borderRadius: res * 0.02,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  mealListItemTitle: {
    position: "absolute",
    bottom: res * 0.008,
    width: "95%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: res * 0.01,
    borderRadius: res * 0.01,
  },
  mealListItemTitleValue: {
    color: light,
    fontWeight: "600",
    fontSize: res * 0.02,
  },
});

export default styles;
