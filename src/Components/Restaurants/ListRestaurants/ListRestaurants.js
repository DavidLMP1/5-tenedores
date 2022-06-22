import React from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, Image } from "react-native-elements";
import { styles } from "./ListRestaurants.styles";

export function ListRestaurants(props) {
  const { restaurants } = props;

  const goToRestaurant = (restaurant) => {
    console.log("ir al restaurante", restaurant.name);
  };
  return (
    <FlatList
      data={restaurants}
      renderItem={(doc) => {
        const restaurant = doc.item.data();
        return (
          <TouchableOpacity onPress={() => goToRestaurant(restaurant)}>
            <View style={styles.content}>
              <Image
                source={{ uri: restaurant.images[0] }}
                style={styles.image}
              />
              <View>
                <Text style={styles.name}>{restaurant.name}</Text>
                <Text style={styles.info}>{restaurant.address}</Text>
                <Text style={styles.info}>{restaurant.description}</Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
}
