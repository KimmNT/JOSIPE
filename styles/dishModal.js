const { StyleSheet, Dimensions } = require("react-native");
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    position: "relative",
    padding: res * 0.02,
    backgroundColor: light,
    borderRadius: res * 0.02,
    width: "90%",
  },
  modalHeadline: {
    fontSize: res * 0.02,
    fontWeight: "600",
  },
  modalBreakLine: {
    width: "100%",
    height: res * 0.002,
    backgroundColor: background,
    marginVertical: res * 0.02,
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
    flexGrow: 1,
    paddingVertical: res * 0.005,
    paddingHorizontal: res * 0.01,
    borderRadius: res * 0.02,
    backgroundColor: gray,
  },
  modalItemActive: {
    backgroundColor: primary,
  },
  modalItemName: {
    textAlign: "center",
    color: dark,
  },
  modalItemNameActive: {
    color: light,
  },
});

export default styles;
