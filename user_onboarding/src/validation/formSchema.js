import * as yup from "yup";

export default yup.object().shape({
  name: yup
    .string()
    .required("Tell us your name!")
    .min(2, "Your name is at least 2 letters, right??"),
  email: yup
    .string()
    .email("Not Snail Mail! E-mail!")
    .required("We need that email homie!"),
  role: yup
    .string()
    .oneOf(["lead", "guitar", "bass", "drums", "vocals"], "What do you play, man??"),
  // we are done with checkboxes
  jam: yup.boolean(),
  indie: yup.boolean(),
  funk: yup.boolean(),
  blues: yup.boolean(),
  folk: yup.boolean(),
});
