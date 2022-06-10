import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";
import { screen } from "../../utils";

export function RestaurantsScreen(props) {
  const { navigation } = props;
  const goToAddRestaurant = () => {
    navigation.navigate(screen.restaurant.addRestaurants);

    // PARA NAVEGAR A UN COMPONENTE FUERA DEL PROPIO STACK
    // navigation.navigate(screen.account.tab, { screen: screen.account.account });
  };
  return (
    <View>
      <Text>Hello Im on Restaurants</Text>
      <Button title="Crear Restaurante" onPress={goToAddRestaurant} />
    </View>
  );
}

const styles = StyleSheet.create({});
