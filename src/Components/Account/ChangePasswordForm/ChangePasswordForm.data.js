import * as Yup from "yup";

export function initialValues() {
  return {
    password: "",
    newPassword: "",
    repeatPassword: "",
  };
}

export function validationSquema() {
  return Yup.object({
    password: Yup.string().required("La contraseña es necesaria"),
    newPassword: Yup.string().required("Nueva contraseña es requerida"),
    repeatPassword: Yup.string()
      .required("Nueva contraseña es requerida")
      .oneOf([Yup.ref("newPassword"), "La contraseña no coincide"]),
  });
}
