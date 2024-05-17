import { PropsWithChildren } from "react";
import styles from "./styles.module.css";

export const Button = ({
  children,
  ...otherProps
}: {
  children: PropsWithChildren;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  /* --------------------------------------------------------------------------- */
  return (
    <button {...otherProps} className={styles.button} role="button">
      {children}
    </button>
  );
};
