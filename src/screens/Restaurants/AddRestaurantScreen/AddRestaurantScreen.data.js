import * as Yup from "yup";

export function initialValues() {
  return {
    name: "",
    address: "",
    description: "",
    phone: "",
    email: "",
    location: null,
    images: [],
  };
}

export function validationSquema() {
  return Yup.object({
    name: Yup.string().required("Campo obligatorio"),
    address: Yup.string().required("Campo obligatorio"),
    description: Yup.string().required("Campo obligatorio"),
    phone: Yup.string().required("Campo obligatorio"),
    email: Yup.string()
      .email("No es un email valido")
      .required("Campo obligatorio"),
    location: Yup.object().required("La localización es requerida"),
    images: Yup.array()
      .min(1, "Se requiere al menos una imagen")
      .required("La imagen es necesaria"),
  });
}
