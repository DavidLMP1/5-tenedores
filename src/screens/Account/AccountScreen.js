import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { UserGuestScreen } from "./UserGuestScreen/UserGuestScreen";
import { UserLoggedScreen } from "./UserLoggedScreen";
import { LoadingModal } from "../../Components";

export function AccountScreen() {
  const [hasLogged, sethasLogged] = useState(null);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      sethasLogged(user ? true : false);
    });
  }, []);

  if (hasLogged === null) {
    return <LoadingModal show text="Cargando" />;
  }

  return hasLogged ? <UserLoggedScreen /> : <UserGuestScreen />;
}
