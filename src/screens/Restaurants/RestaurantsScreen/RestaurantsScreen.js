import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { screen } from "../../../utils";
import { styles } from "./RestaurantsScreen.styles";

export function RestaurantsScreen(props) {
  const { navigation } = props;

  const [currentUser, setCurrentUser] = useState(null);
  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurants);

    // PARA NAVEGAR A UN COMPONENTE FUERA DEL PROPIO STACK
    // navigation.navigate(screen.account.tab, { screen: screen.account.account });
  };

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  return (
    <View style={styles.content}>
      <Text>Hello Im on Restaurants</Text>
      {currentUser && (
        <Icon
          reverse
          type="material-community"
          name="plus"
          color="darkred"
          containerStyle={styles.btnContainer}
          onPress={goToAddRestaurant}
        />
      )}
    </View>
  );
}
