import * as Yup from "yup";

export const registrationFormValidation = () => {
  return Yup.object().shape({
    fullName: Yup.string()
      .required("Required Field")
      .min(2, "Min length is 2"),
    email: Yup.string()
      .required("Required Field")
      .email("Provide a valid email."),
    password: Yup.string()
      .required("Required Field")
      .min(8, "Min length 8"),
    repeat_password: Yup.string().test(
      "password-confirmation",
      "Passwords do not match",
      (value, context) => context.parent.password === value
    ),
  });
};
