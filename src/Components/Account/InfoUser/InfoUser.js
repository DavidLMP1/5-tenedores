import React from "react";
import { View } from "react-native";
import { Avatar, Text } from "react-native-elements";
import { getAuth } from "firebase/auth";
import { styles } from "./InfoUser.styles";

export function InfoUser() {
  const { uid, photoURl, displayName, email } = getAuth().currentUser;

  const changeAvatar = () => {
    console.log("cambiar avatar");
  };

  return (
    <View style={styles.content}>
      <Avatar
        size="large"
        rounded
        containerStyle={styles.avatar}
        icon={{ type: "material", name: "person" }}
        // source={{ uri: photoURl }}
      >
        <Avatar.Accessory size={24} onPress={changeAvatar} />
      </Avatar>
      <View>
        <Text style={styles.displayName}>{displayName || "Nombre"}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  );
}
