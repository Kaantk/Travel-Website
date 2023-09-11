import * as Yup from "yup";

export const SignupFormValidation = Yup.object().shape({
  name: Yup.string().required("The name cannot be left blank."),
  email: Yup.string()
    .email("Enter a valid email address.")
    .required("E-mail address cannot be left blank."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .required("Password cannot be left blank."),
  isAccepted: Yup.boolean()
    .oneOf([true], "You must accept the terms & policy")
    .required("You must accept the terms & policy"),
});
