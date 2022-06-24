import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Text, Button } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./BtnReviewForm.styles";

export function BtnReviewForm(props) {
  const { idRestaurant } = props;
  const [hasLogged, setHasLogged] = useState(false);

  const auth = getAuth();
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate(screen.account.tab, {
      screen: screen.account.login,
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setHasLogged(user ? true : false);
    });
  }, []);

  const goToAddReview = () => {
    navigation.navigate(screen.restaurant.addReviewRestaurant, {
      idRestaurant,
    });
  };

  return (
    <View style={styles.content}>
      {hasLogged ? (
        <Button
          onPress={goToAddReview}
          buttonStyle={styles.btn}
          titleStyle={styles.btnText}
          title="Escribe una opinión"
          icon={{
            type: "material-community",
            name: "square-edit-outline",
            color: "#00a680",
          }}
        />
      ) : (
        <Text style={styles.text}>
          Para escribir una opinión es necesario iniciar sesión{" "}
          <Text onPress={goToLogin} style={styles.textClick}>
            Pulsa aqui para iniciar sesión
          </Text>
        </Text>
      )}
    </View>
  );
}
