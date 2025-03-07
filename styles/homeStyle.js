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
const res = Dimensions.get("screen").height;
const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  homeContainer: {
    backgroundColor: background,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  homeContent: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: background,
    padding: res * 0.016,
    alignItems: "center",
    // justifyContent: "center",
  },
  homeScroll: {
    width: "100%",
    flex: 1,
  },
  homeScrollContent: {
    marginTop: res * 0.01,
    gap: res * 0.04,
    marginBottom: res * 0.12,
  },
  homeHeadlineContainer: {
    width: "100%",
    paddingVertical: res * 0.03,
  },
  homeHeadline: {
    color: dark,
    fontWeight: "600",
    fontSize: res * 0.04,
  },
  homeItemContainer: {
    width: "100%",
    position: "relative",
    borderRadius: res * 0.02,
    overflow: "hidden",
  },
  homeSloganContent: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    width: "100%",
    height: "100%",
    padding: res * 0.02,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  homeSloganText: {
    fontSize: res * 0.04,
    color: light,
    width: "90%",
  },
  homeSloganBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: res * 0.02,
    paddingVertical: res * 0.01,
    backgroundColor: primary,
    borderRadius: res * 0.02,
    gap: res * 0.01,
    // width: res * 0.15,
  },
  homeSloganBtnText: {
    fontSize: res * 0.017,
    fontWeight: "600",
  },
  homeSloganBtnIcon: {
    fontSize: res * 0.03,
  },
  homeItem: {
    gap: res * 0.02,
  },
  homeItemTitle: {
    fontSize: res * 0.025,
    fontWeight: "600",
  },
  homeItemList: {
    flexDirection: "row",
    alignItems: "center",
    gap: res * 0.01,
    flexWrap: "wrap",
  },
  item: {
    position: "relative",
    width: screenWidth / 1.5,
    height: res * 0.2,
    borderRadius: res * 0.02,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  itemGrow: {
    flexGrow: 1,
    flexBasis: res * 0.02,
  },
  itemContent: {
    position: "absolute",
    bottom: res * 0.008,
    width: "95%",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: res * 0.01,
    borderRadius: res * 0.01,
  },
  itemText: {
    color: light,
    fontWeight: "600",
    fontSize: res * 0.02,
  },
  itemList: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  itemTimeTaken: {
    width: "45%",
    flexDirection: "row",
    alignItems: "center",
    gap: res * 0.01,
    marginTop: res * 0.01,
  },
  itemTimeTakenRow: {
    alignItems: "center",
  },
  itemTimeTakenRowText: {
    color: light,
  },
  itemTimeTakenIcon: {
    color: light,
    fontSize: res * 0.015,
  },
  itemTimeTakenText: {
    fontSize: res * 0.015,
    fontWeight: "600",
    color: light,
  },
  homeBottomTabs: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  homeBottomTabsContent: {
    backgroundColor: light,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: res * 0.03,
    paddingVertical: res * 0.015,
    borderRadius: res * 0.05,
  },
  homeTabsItem: {
    alignItems: "center",
    gap: res * 0.005,
  },
  homeTabsItemIcon: {
    fontSize: res * 0.025,
  },
  homeTabsItemHome: {
    color: primary,
  },
  homeTabsItemName: {
    fontSize: res * 0.015,
  },
});

export default styles;
