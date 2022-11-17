import * as Yup from "yup";

export const loginFormValidation = () => {
  return Yup.object().shape({
    email: Yup.string()
      .required("Required Field")
      .email("Please, provide a valid email."),
    password: Yup.string().required("Required Field"),
  });
};
