import styles from "./styles.module.css";

export const Switch = ({
  text,
  checked,
  onClick,
}: {
  checked: boolean;
  onClick?: (checked: boolean) => void;
  text: string;
}) => {
  /* --------------------------------------------------------------------------- */
  /* functions
  /* --------------------------------------------------------------------------- */

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    if (onClick) {
      onClick(newChecked);
    }
  };

  /* --------------------------------------------------------------------------- */
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.checkbox}
        type="checkbox"
        id="switch"
        checked={checked}
        onChange={handleChange}
      />
      <label className={styles.label} htmlFor="switch"></label>{" "}
      <span className={styles.text}>{text}</span>
    </div>
  );
};
