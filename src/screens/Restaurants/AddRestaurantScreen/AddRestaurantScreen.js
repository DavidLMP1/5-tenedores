import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import {
  InfoForm,
  UploadImageForm,
} from "../../../Components/Restaurants/AddRestaurant";
import { useFormik } from "formik";
import { initialValues, validationSquema } from "./AddRestaurantScreen.data";
import { styles } from "./AddRestaurantScreen.styles";

export function AddRestaurantScreen() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSquema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });

  return (
    <View>
      <InfoForm formik={formik} />

      <UploadImageForm formik={formik} />

      <Button
        title="Crear Restaurante"
        buttonStyle={styles.addRestaurant}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
