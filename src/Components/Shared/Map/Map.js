import React from "react";
import MapView, { Marker } from "react-native-maps";
import open from "react-native-open-maps";
import { styles } from "./Map.styles";

export function Map(props) {
  const { location, name } = props;

  const openAppMap = () => {
    openAppMap({
      latitude: location.latitude,
      longitude: location.longitude,
      zoom: 19,
    });
  };
  return (
    <MapView
      style={styles.content}
      initialRegion={location}
      onPress={openAppMap}
    >
      <Marker coordinate={location} />
    </MapView>
  );
}
