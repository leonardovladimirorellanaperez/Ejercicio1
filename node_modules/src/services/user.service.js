export const validateForm = ({ name, age, email }) => {
  const errors = [];

  if (!name || name.trim() === "") {
    errors.push("El nombre es obligatorio");
  }

  if (!age || isNaN(age)) {
    errors.push("La edad es obligatoria y debe ser un número");
  }

  if (!email || email.trim() === "") {
    errors.push("El correo es obligatorio");
  }

  return errors;
};
