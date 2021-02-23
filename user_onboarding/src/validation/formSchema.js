import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Tell us your name!")
    .min(32 "Your name is atleast 2 letters, right??"),
  email: yup
    .string()
    .email("Doesn't look like an email to me...")
    .required("We need that email homie!"),
  role: yup
    .string()
    .oneOf(["lead", "guitar", "bass", "drums", "vocals"], "role is required"),
  // we are done with checkboxes
  jam: yup.boolean(),
  indie: yup.boolean(),
  funk: yup.boolean(),
  blues: yup.boolean(),
  folk: yup.boolean(),
});
