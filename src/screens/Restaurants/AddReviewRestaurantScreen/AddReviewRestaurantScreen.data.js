import * as Yup from "yup";

export function initialValues() {
  return {
    title: "",
    comment: "",
    rating: 3,
  };
}

export function validationSquema() {
  return Yup.object({
    title: Yup.string().required("El titulo es requerido"),
    comment: Yup.string().required("El comentario es requerido"),
    rating: Yup.string().required("La calificación es requerida"),
  });
}
