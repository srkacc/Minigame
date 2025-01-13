import {
  View,
  Image,
  StyleSheet,
  Text,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }) {
  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }

  if (height < 400) {
    imageSize = 80;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };

  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.screen}>
        <Title>GAME OVER !</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Tvoj telefon je potreboval
          <Text style={styles.highlight}> {roundsNumber}</Text> poskusov za
          ugotovitev števila <Text style={styles.highlight}>{userNumber}</Text>.
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Začni znova</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default GameOverScreen;

//const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  screen: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    //borderRadius: deviceWidth < 380 ? 75 : 150,
    //width: deviceWidth < 380 ? 150 : 300, // mora biti podano v vrednosti npr px, ker je width različen od height => therefore 50% width nebo isto 50% height
    //height: deviceWidth < 380 ? 150 : 300,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: Colors.primary4,
    margin: 36,
  },
  image: {
    width: "100%", // procenti od parent containera aka imageContainer :D torej 100% od 300px
    height: "100%",
  },
  summaryText: {
    fontFamily: "open-sans",
    color: Colors.primary3,
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: "#fff",
  },
});
