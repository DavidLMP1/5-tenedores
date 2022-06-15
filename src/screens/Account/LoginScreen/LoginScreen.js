import React from "react";
import { View, ScrollView } from "react-native";
import { Image, Text } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { LoginForm } from "../../../Components/Auth";
import { screen } from "../../../utils";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
  const navigation = useNavigation();
  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };

  return (
    <ScrollView>
      <Image
        source={require("../../../../assets/img/5tenedores.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <LoginForm />

        <Text style={styles.textRegister}>
          ¿Aun no tienes una cuenta?
          <Text onPress={goToRegister} style={styles.btnRegister}>
            Registrarse
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}
