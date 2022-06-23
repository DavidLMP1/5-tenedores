import React, { useState, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import {
  doc,
  onSnapshot,
  collection,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { db } from "../../../utils";
import { Carousel, Loading } from "../../../Components/Shared";
import { styles } from "./RestaurantScreen.styles";

const { width } = Dimensions.get("window");

export function RestaurantScreen(props) {
  const { route } = props;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    setRestaurant(null);
    onSnapshot(doc(db, "restaurants", route.params.id), (doc) => {
      setRestaurant(doc.data());
    });
  }, [route.params.id]);

  if (!restaurant) return <Loading show text="Cargando Restaurantes" />;

  return (
    <ScrollView style={styles.content}>
      <Carousel arrayImages={restaurant.images} height={250} width={width} />
    </ScrollView>
  );
}
