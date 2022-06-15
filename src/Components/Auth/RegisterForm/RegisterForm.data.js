import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("El email no es correcto")
      .required("Email es necesario"),
    password: Yup.string().required("La contraseña es necesaria"),
    repeatPassword: Yup.string()
      .required("La contraseña es necesaria")
      .oneOf([Yup.ref("password")], "La contraseña no coincide"),
  });
}
