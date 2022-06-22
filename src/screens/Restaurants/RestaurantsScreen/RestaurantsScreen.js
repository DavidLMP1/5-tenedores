import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { LoadingModal } from "../../../Components/Shared";
import { ListRestaurants } from "../../../Components/Restaurants";
import { screen, db } from "../../../utils";
import { styles } from "./RestaurantsScreen.styles";

export function RestaurantsScreen(props) {
  const { navigation } = props;

  const [restaurants, setRestaurants] = useState(null);

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

  useEffect(() => {
    const q = query(
      collection(db, "restaurants"),
      orderBy("createdAt", "desc")
    );

    onSnapshot(q, (snapshot) => {
      setRestaurants(snapshot.docs);
    });
  }, []);

  return (
    <View style={styles.content}>
      {!restaurants ? (
        <LoadingModal show text="Cargando" />
      ) : (
        <ListRestaurants restaurants={restaurants} />
      )}

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
