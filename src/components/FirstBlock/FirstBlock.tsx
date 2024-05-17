import React, { useState } from "react";
import { useDebounce, useThrottle } from "../../hooks";
import { Container } from "../ui/container/Container";
import { Input } from "../ui/input/input";
import styles from "./styles.module.css";

export function FirstBlock() {
  /* --------------------------------------------------------------------------- */
  /* variables
  /* --------------------------------------------------------------------------- */

  const [debounceKeyword, setDebounceKeyword] = useState("");
  const [throttleKeyword, setThrottleKeyword] = useState("");
  const [throttle, setThrottle] = useState("");
  const debounce = useDebounce(debounceKeyword);

  /* --------------------------------------------------------------------------- */
  /* functions
  /* --------------------------------------------------------------------------- */

  const handleThrottledInput = useThrottle((value: string) => {
    setThrottle(value);
  }, 400);

  const handleDebounce = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDebounceKeyword(event.target.value);
  };

  const handleThrottle = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    handleThrottledInput(value);
    setThrottleKeyword(value);
  };

  /* --------------------------------------------------------------------------- */
  return (
    <Container>
      <Input
        mode="input"
        type="text"
        value={debounceKeyword}
        onChange={handleDebounce}
        placeholder="debounce тест"
      />
      <Input
        mode="input"
        type="text"
        value={throttleKeyword}
        onChange={handleThrottle}
        placeholder="throttling тест"
      />
      <div className={styles.textContainer}>
        <span className={styles.text}>Debounce: {debounce}</span>
        <span className={styles.text}>Throttle:{throttle} </span>
      </div>
    </Container>
  );
}
