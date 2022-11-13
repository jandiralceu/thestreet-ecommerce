import * as Yup from "yup";

export const registrationFormValidation = () => {
  return Yup.object().shape({
    email: Yup.string()
      .required("Required Field")
      .email("Please, provide a valid email."),
    password: Yup.string()
      .required("Required Field")
      .min(8, "Your password must have 8 characters or more."),
    repeat_password: Yup.string().test(
      "password-confirmation",
      "Password doesn't match",
      (value, context) => context.parent.password === value
    ),
  });
};
