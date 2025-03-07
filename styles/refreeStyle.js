import { StyleSheet, Dimensions } from "react-native";
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
  homePageContainer: {
    backgroundColor: background,
    // paddingVertical: Platform.OS === "ios" ? res * 0.015 : "",
    paddingHorizontal: res * 0.01,
    display: "flex",
    width: "100%",
    height: "100%",
    position: "relative",
    flexDirection: "column",
    gap: res * 0.01,
  },
  homePageHeadline: {
    color: dark,
    fontWeight: "600",
    fontSize: res * 0.06,
    marginVertical: res * 0.04,
  },
  homepageInputContainer: {
    display: "flex",
    flexDirection: "row",
    gap: res * 0.01,
    backgroundColor: light,
    paddingHorizontal: res * 0.03,
    paddingVertical: res * 0.01,
    borderRadius: res * 0.05,
    alignItems: "center",
    borderWidth: res * 0.001,
    borderColor: dark,
    borderStyle: "solid",
  },
  homepageInput: {
    padding: res * 0.005,
    width: "100%",
  },
  homepageSuggestion: {
    width: "100%",
    position: "relative",
    zIndex: 10,
  },
  homepageSuggestionList: {
    position: "absolute",
    top: -5,
    left: 0,
    backgroundColor: light,
    width: "100%",
    padding: res * 0.01,
    borderRadius: res * 0.01,
    borderWidth: res * 0.001,
    borderColor: dark,
    borderStyle: "solid",
  },
  homepageSuggestionItem: {
    padding: res * 0.01,
    backgroundColor: background,
    borderRadius: res * 0.01,
    marginTop: res * 0.01,
  },
  homepageSuggestionItemText: {
    color: dark,
    fontWeight: "600",
  },
  homepageIngreContainer: {
    display: "flex",
    flexDirection: "column",
    gap: res * 0.01,
  },
  homepageIngreList: {
    display: "flex",
    flexDirection: "row",
    gap: res * 0.01,
    marginTop: res * 0.01,
    flexWrap: "wrap",
  },
  homepageIngreItem: {
    display: "flex",
    flexDirection: "row",
    gap: res * 0.02,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: light,
    paddingVertical: res * 0.008,
    paddingHorizontal: res * 0.01,
    borderRadius: res * 0.05,
    borderWidth: res * 0.001,
    borderColor: dark,
    borderStyle: "solid",
  },
  homepageIngreItemTitle: {
    fontSize: res * 0.02,
    color: secondary,
    fontWeight: "bold",
  },
  homepageIngreItemButton: {
    backgroundColor: dangerous,
    borderRadius: (res * 0.03) / 2,
    width: res * 0.03,
    height: res * 0.03,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  homepageCreateDishBtn: {
    backgroundColor: primary,
    paddingHorizontal: res * 0.05,
    borderWidth: res * 0.001,
    borderColor: primary,
    borderStyle: "solid",
  },
  homepageCreateDishBtnText: {
    fontSize: res * 0.02,
    color: light,
  },
});

export default styles;
