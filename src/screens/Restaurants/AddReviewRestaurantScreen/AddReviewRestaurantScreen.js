import React from "react";
import { View } from "react-native";
import { AirbnbRating, Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import {
  initialValues,
  validationSquema,
} from "./AddReviewRestaurantScreen.data";
import { styles } from "./AddReviewRestaurantScreen.styles";
import { async } from "@firebase/util";

export function AddReviewRestaurantScreen(props) {
  const { route } = props;

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: validationSquema(),
    onSubmit: async (formValue) => {
      console.log(formValue);
    },
  });
  return (
    <View style={styles.content}>
      <View>
        <View style={styles.ratingContent}>
          <AirbnbRating
            count={5}
            reviews={[
              "Pesimo",
              "Deficiente",
              "Normal",
              "Muy bueno",
              "Excelente",
            ]}
            defaultRating={formik.values.rating}
            size={35}
            onFinishRating={(rating) => formik.setFieldValue("rating", rating)}
          />
        </View>
        <View>
          <Input
            placeholder="titulo"
            onChangeText={(text) => formik.setFieldValue("title", text)}
            errorMessage={formik.errors.title}
          />
          <Input
            onChangeText={(text) => formik.setFieldValue("comment", text)}
            placeholder="Comentario"
            multiline
            inputContainerStyle={styles.comment}
            errorMessage={formik.errors.comment}
          />
        </View>
      </View>
      <Button
        title="Enviar Review"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
