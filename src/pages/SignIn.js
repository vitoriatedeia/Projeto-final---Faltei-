import { Text, View, TouchableOpacity, Pressable } from "react-native";

import { StatusBar } from "expo-status-bar";

import { useNavigation } from "@react-navigation/native";

// Import Styles!
import { stylesSign } from "../styles/StylesSign";

export default function SignIn() {
  const navigation = useNavigation();
  return (
    <View>
      <View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#00000088",
          padding: 40,
          justifyContent: "center",
        }}
      >
        <Text style={stylesSign.title}>Sign In</Text>
        <Text style={stylesSign.text}>
          Sign in now to acces your excercises and saved music
        </Text>

        <View style={{ marginTop: 80 }}>
          0{/* COMPONENTES CRIADOS */}
          <InputComp textPlaceholder={"Email Address"} password={false} />
          <InputComp textPlaceholder={"Password"} password={true} />
          <Pressable style={{ position: "absolute", right: 0, bottom: -20 }}>
            <Text style={{ color: "#8b4513" }}>Forgot password?</Text>
          </Pressable>
        </View>

        <TouchableOpacity
          style={[StylesOnboarding.btn, { marginTop: 80, width: "100%" }]}
        >
          <Text style={StylesOnboarding.txt}>LOGIN</Text>
        </TouchableOpacity>

        <View style={StylesOnboarding.viewSignUp}>
          <Text style={StylesOnboarding.txt}>Don't have an account? </Text>
          <Pressable onPress={() => navigation.navigate("SignUp")}>
            <Text style={{ fontWeight: "bold", color: "#8b4513" }}>
              Sign Up
            </Text>
          </Pressable>
        </View>
      </View>
      <StatusBar hidden />
    </View>
  );
}
