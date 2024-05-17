export type InputType = {
  email: string;
  description: string;
  password: string;
  confirmPassword: string;
  isToggled: boolean;
};

export function validationRules(values: InputType) {
  const regExEmail = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const errors: InputType = {
    email: "",
    description: "",
    password: "",
    confirmPassword: "",
    isToggled: false,
  };
  if (!values.description) {
    errors.description = "Описание обязательно";
  }
  if (!values.email) {
    errors.email = "Почта обязательна";
  } else if (!regExEmail.test(values.email.toLowerCase())) {
    errors.email = "Введите почту правильно";
  }
  if (!values.password) {
    errors.password = "Пароль обязателен";
  } else if (values.password.length < 6) {
    errors.password = "Минимальная длина пароля 6 символов";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Заполните поле";
  } else if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Пароли не совпадают";
  }
  return errors;
}
