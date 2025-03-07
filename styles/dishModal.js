const { StyleSheet, Dimensions } = require("react-native");
const primary = "#0a9b86";
const secondary = "#303733";
const dark = "#000";
const softDark = "#2A3335";
const light = "#fff";
const dangerous = "#A31D1D";
const background = "#f2f6fe";
const favorite = "#ee9da0";
const saved = "#fac703";
// Get screen height dynamically
const res = Dimensions.get("window").height;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    position: "relative",
    padding: 20,
    backgroundColor: light,
    borderRadius: 10,
    alignItems: "center",
    flexDirection: "column",
    gap: res * 0.05,
    height: "80%",
    minWidth: "80%",
  },
  modalItemList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: res * 0.02,
  },
  modalItem: {
    width: "46%",
    // height: res * 0.4,
    backgroundColor: saved,
    backgroundColor: background,
    borderRadius: res * 0.01,
    overflow: "hidden",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  modalItemImage: {
    width: "100%",
    height: res * 0.2,
    objectFit: "cover",
  },
  modalItemContent: {
    padding: res * 0.01,
    gap: res * 0.01,
    flexDirection: "column",
  },
  modalItemTitle: {
    minHeight: res * 0.03,
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  modalItemIngre: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: res * 0.01,
    width: "100%",
  },
  modalItemIngreUse: {
    // backgroundColor: primary,
  },
  modalItemIngreUseText: {
    color: primary,
  },
  modalItemIngreNotUse: {
    backgroundColor: dark,
    paddingVertical: res * 0.002,
    paddingHorizontal: res * 0.01,
    borderRadius: res * 0.05,
  },
  modalItemIngreNotUseText: {
    color: light,
  },
  closeButton: {
    position: "absolute",
    bottom: res * -0.02,
    right: res * 0.02,
    backgroundColor: dangerous,
    borderRadius: (res * 0.05) / 2,
    width: res * 0.05,
    height: res * 0.05,
    alignItems: "center",
    justifyContent: "center",
  },
  closeButtonText: {
    color: light,
    fontSize: res * 0.02,
  },
});

export default styles;
