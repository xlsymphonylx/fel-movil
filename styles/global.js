import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  shadowBorder: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  primary: {
    color: "#343B41",
  },
  secondary: {
    color: "#FEFFFE",
  },
  accent: {
    color: "#F4F7F8",
  },
  backgroundColor: {
    backgroundColor: "#343B41",
  },
  backgroundSecondaryColor: {
    backgroundColor: "#FEFFFE",
  },
  accentColor: {
    backgroundColor: "#F4F7F8",
  },
  title: {
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    paddingVertical: 2,
  },
  selectContainer: {
    margin: 1,
    padding: 0,
    overflow: true,
    zIndex: 3, // works on ios
    elevation: 3, // works on android
  },
  
});
