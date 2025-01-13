import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

export default Card;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center", //top 2 bottom
    alignItems: "center", //left to right
    marginTop: deviceWidth < 380 ? 20 : 36,
    marginHorizontal: 36,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.primary2,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 0.4,
  },
});
