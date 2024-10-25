import { validateForm } from "../services/user.service.js";

export const renderHome = (req, res) => {
  res.render("home", { title: "Bienvenido a nuestra aplicación" });
};

export const renderForm = (req, res) => {
  res.render("form", { title: "Formulario", errorMessage: null });
};

export const processForm = (req, res) => {
  const { name, age, email } = req.body;

  const errors = validateForm({ name, age, email });
  if (errors.length > 0) {
    return res.render("form", {
      title: "Formulario",
      errorMessage: errors.join(", "),
    });
  }

  res.redirect(`/confirm`);
};

export const renderConfirm = (req, res) => {
  const { name, age, email } = req.query;
  res.render("confirm", { title: "Confirmación", name, age, email });
};
