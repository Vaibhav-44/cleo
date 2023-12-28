import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import { StatusBar } from "expo-status-bar";
import { TextInput } from "react-native";

export function SignUpScreen({ navigation }) {
  const Navigation = useNavigation();

  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: scale(35), top: scale(-90) }}>
          Sign Up
        </Text>
        <Text style={{ color: "white", fontSize: scale(12), top: scale(-40) }}>
          Already have an account? 𝗟𝗼𝗴𝗶𝗻
        </Text>
        <View style={styles.box}>
          <Text style={styles.uptext}>Enter Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Alex John"
            placeholderTextColor="rgba(256, 256, 256, 0.6)"
            caretHidden={true}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.uptext}>Email-id</Text>
          <TextInput
            style={styles.input}
            placeholder="abc@gmail.com"
            placeholderTextColor="rgba(256, 256, 256, 0.6)"
            caretHidden={true}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.uptext}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="****"
            placeholderTextColor="rgba(256, 256, 256, 0.6)"
            caretHidden={true}
          />
        </View>
        <View style={styles.box}>
          <Text style={styles.uptext}>Re-Enter Password</Text>
          <TextInput
            style={styles.input}
            placeholder="****"
            placeholderTextColor="rgba(256, 256, 256, 0.6)"
            caretHidden={true}
          />
        </View>

        <Text
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={[styles.register]}
        >
          REGISTER NOW
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  box: {
    width: "70%",
    marginTop: scale(20),
  },
  input: {
    width: "100%",
    borderRadius: scale(11),
    height: scale(50),
    backgroundColor: "#383838",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 16,
    bottom: scale(40),
  },
  register: {
    width: "70%",
    borderRadius: scale(11),
    height: scale(50),
    backgroundColor: "#383838",
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
  },
  uptext: {
    fontSize: scale(12),
    color: "white",
    top: scale(-33),
    zIndex: 1,
    left: scale(16),
  },
});
