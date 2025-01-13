import { Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

function InsText({ children, style }) {
  return <Text style={[styles.instrText, style]}>{children}</Text>;
}

export default InsText;

const styles = StyleSheet.create({
  instrText: {
    fontFamily: "open-sans",
    color: Colors.accent1,
    fontWeight: "bold",
    fontSize: 20,
  },
});
