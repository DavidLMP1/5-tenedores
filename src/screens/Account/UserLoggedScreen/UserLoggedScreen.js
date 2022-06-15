import React from "react";
import { Text, View } from "react-native";
import { InfoUser } from "../../../Components/Account";
import { styles } from "./UserLoggedScreen.styles";

export function UserLoggedScreen() {
  return (
    <View style={styles.content}>
      <InfoUser />
    </View>
  );
}
