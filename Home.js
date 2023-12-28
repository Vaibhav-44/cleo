import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";
import { ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Image
          style={{
            height: scale(40),
            width: scale(40),
            borderRadius: scale(60),
          }}
          source={require("./assets/img7.jpg")}
        />
        <View style={styles.topbar_items}>
          <Text style={styles.topbar_text}>{"   All   "}</Text>
        </View>
        <View style={styles.topbar_items}>
          <Text style={styles.topbar_text}>{"   Music   "}</Text>
        </View>
        <View style={styles.topbar_items}>
          <Text style={styles.topbar_text}>{"   Podcast   "}</Text>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.homecont}>
          <View style={styles.homebox}>
            <Image
              style={styles.desimg}
              source={require("./assets/img1.jpg")}
            />
            <Text style={styles.desimg_text}>Join Room</Text>
          </View>
          <View style={styles.homebox}>
            <Image
              style={styles.desimg}
              source={require("./assets/img2.jpg")}
            />
            <Text style={styles.desimg_text}>Create Room</Text>
          </View>
        </View>
        <View style={styles.adv} />
        <View style={styles.adv} />
        <View style={styles.adv} />
        <View style={styles.adv} />
        <View style={styles.adv} />
      </ScrollView>

      <View style={styles.footer}>
        <Image
          style={{ height: 40, width: 40 }}
          source={require("./assets/home-icon.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  topbar: {
    height: scale(45),
    width: "100%",
    marginTop: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  footer: {
    height: scale(60),
    width: "100%",
    bottom: scale(0),
    backgroundColor: "rgba(0, 0, 0, 0.09)",
    position: "fixed",
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  topbar_items: {
    height: scale(25),
    width: "auto",
    borderWidth: 0,
    borderColor: "white",
    borderRadius: scale(30),
    backgroundColor: "#383838",
  },
  topbar_text: {
    fontSize: scale(18),
    color: "white",
    textAlign: "center",
    verticalAlign: "middle",
  },
  homebox: {
    height: scale(52),
    width: "47%",
    alignContent: "center",
    alignSelf: "center",
    backgroundColor: "#383838",
    borderRadius: scale(6),
    flexDirection: "row",
  },
  homecont: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "96%",
    alignSelf: "center",
    marginTop: "6%",
  },
  desimg: {
    height: scale(52),
    width: scale(52),
    borderTopLeftRadius: scale(6),
    borderBottomLeftRadius: scale(6),
  },
  desimg_text: {
    fontSize: scale(15),
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    marginLeft: scale(12),
    fontWeight: "bold",
  },
  adv: {
    height: scale(150),
    width: "90%",
    backgroundColor: "#383838",
    alignSelf: "center",
    marginTop: "6%",
    borderRadius: scale(6),
  },
});
