import React, { useRef, useState } from "react";
import { useAutoSizeTextarea } from "../../hooks";
import { Button } from "../ui/button/button";
import { Container } from "../ui/container/Container";
import { Input } from "../ui/input/input";
import { Switch } from "../ui/switch/Switch";
import { validationRules } from "./validation.rules";
import eyeOn from "../../../public/iconmonstr-eye-2.svg";
import eyeOff from "../../../public/iconmonstr-eye-off-thin.svg";

export function SecondBlock() {
  /* --------------------------------------------------------------------------- */
  /* variables
  /* --------------------------------------------------------------------------- */
  const defaultInput = {
    email: "",
    description: "",
    password: "",
    confirmPassword: "",
    isToggled: false,
  };

  const [input, setInput] = useState(defaultInput);
  const [error, setError] = useState(defaultInput);
  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(eyeOff);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  /* --------------------------------------------------------------------------- */
  /* functions
  /* --------------------------------------------------------------------------- */

  useAutoSizeTextarea({
    textAreaRef,
    value: input.description ?? "",
    height: 35,
  });

  const validateField = (name: string, value: string) => {
    const tempInput = { ...input, [name]: value };
    const tempError = validationRules(tempInput);

    setError((prevError) => ({
      ...prevError,
      [name]: (tempError as { [key: string]: unknown })[name],
    }));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(() => validationRules(input));
    console.log("input", input);
  };

  const handleToggle = () => {
    if (type === "password") {
      setIcon(eyeOn);
      setType("text");
    } else {
      setIcon(eyeOff);
      setType("password");
    }
  };

  /* --------------------------------------------------------------------------- */
  return (
    <form onSubmit={onSubmit} noValidate>
      <Container>
        <Input
          mode="input"
          name="email"
          placeholder="Эл. почта"
          errorText={error.email}
          value={input.email}
          onChange={handleChange}
          onBlur={() => setError(defaultInput)}
        />
        <Input
          name="description"
          mode="textarea"
          ref={textAreaRef}
          placeholder="Описание"
          errorText={error.description}
          value={input.description}
          onChange={handleChange}
          onBlur={() => setError(defaultInput)}
        />
        <Input
          mode="input"
          name="password"
          type={type}
          placeholder="Пароль"
          errorText={error.password}
          value={input.password}
          onChange={handleChange}
          onBlur={() => setError(defaultInput)}
          icon={icon}
          onIconClick={handleToggle}
        />
        <Input
          mode="input"
          name="confirmPassword"
          type={type}
          placeholder="Подтвердите пароль"
          errorText={error.confirmPassword}
          value={input.confirmPassword}
          onChange={handleChange}
          onBlur={() => setError(defaultInput)}
        />
        <Switch
          text="Запомнить сессию"
          checked={input.isToggled}
          onClick={(checked) =>
            setInput((prev) => ({ ...prev, isToggled: checked }))
          }
        />
        <Button style={{ marginTop: "1rem" }} type="submit">
          Подтвердить
        </Button>
      </Container>
    </form>
  );
}
