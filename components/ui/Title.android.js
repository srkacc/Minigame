import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
  title: {
    fontFamily: "open-sans-bold",
    fontSize: 24,
    color: Colors.primary1,
    textAlign: "center",
    // borderWidth: Platform.OS === "ios" ? 2 : 0,
    //borderWidth: Platform.select({ ios: 2, android: 0 }),
    borderColor: Colors.primary1,
    padding: 12,
    borderRadius: 15,
    maxWidth: "80%",
    width: 300,
  },
});
