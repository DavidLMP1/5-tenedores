import * as Yup from "yup";

export function initilValues() {
  return {
    displayName: "",
  };
}

export function validationSquema() {
  return Yup.object({
    displayName: Yup.string().required("El nombre y apellido son requeridos"),
  });
}
