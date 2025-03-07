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
  detailContainer: {
    flex: 1,
    gap: res * 0.01,
    // paddingVertical: Platform.OS === "ios" ? res * 0.04 : "",
  },
  detailHeader: {
    position: "relative",
  },
  detailHeaderController: {
    position: "absolute",
    top: 20,
    left: 0,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    width: "100%",
    padding: res * 0.01,
    zIndex: 100,
  },
  detailHeaderBackBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: light,
    width: res * 0.06,
    height: res * 0.06,
    borderRadius: (res * 0.06) / 2,
    borderWidth: res * 0.001,
    borderColor: light,
    borderStyle: "solid",
  },
  detailHeaderBackBtnIcon: {
    fontSize: res * 0.03,
    color: dark,
  },
  detailHeaderCustomize: {
    flexDirection: "column",
    gap: res * 0.02,
  },
  detailHeaderBtnFav: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: light,
    width: res * 0.05,
    height: res * 0.05,
    borderRadius: (res * 0.05) / 2,
    borderWidth: res * 0.001,
    borderColor: light,
    borderStyle: "solid",
  },
  detailHeaderBtnFavIcon: {
    fontSize: res * 0.025,
    color: dark,
  },
  detailHeaderBtnSave: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: light,
    width: res * 0.05,
    height: res * 0.05,
    borderRadius: (res * 0.05) / 2,
    borderWidth: res * 0.001,
    borderColor: light,
    borderStyle: "solid",
  },
  detailHeaderBtnSaveIcon: {
    fontSize: res * 0.025,
    color: dark,
  },
  detailContentContainer: {
    width: "100%",
    flexGrow: 1,
    // paddingBottom: res * 0.15,
  },
  // detailImage: {
  //   width: "100%",
  //   height: res * 0.3,
  //   objectFit: "fill",
  //   borderRadius: res * 0.01,
  // },
  detailContent: {
    width: "100%",
    // height: res * 1,
    backgroundColor: light,
    borderRadius: res * 0.01,
    marginTop: res * 0.01,
    padding: res * 0.02,
    gap: res * 0.03,
  },
  detailContentItem: {
    gap: res * 0.01,
  },
  detailItemText: {
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  detailItemList: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: res * 0.01,
  },
  detailItem: {
    backgroundColor: primary,
    paddingVertical: res * 0.005,
    paddingHorizontal: res * 0.01,
    borderRadius: res * 0.005,
  },
  detailItemArea: {
    backgroundColor: light,
    paddingVertical: res * 0.005,
    paddingHorizontal: res * 0.01,
    borderRadius: res * 0.005,
  },
  detailItemName: {
    color: light,
  },
});

export default styles;
