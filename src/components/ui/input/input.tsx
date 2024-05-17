import React, { forwardRef } from "react";
import styles from "./styles.module.css";

type CommonProps = {
  icon?: string;
  onIconClick?: () => void;
  mode: "input" | "textarea";
  placeholder?: string;
  errorText?: string;
};
type InputProps = CommonProps & React.InputHTMLAttributes<HTMLInputElement>;

type TextareaProps = CommonProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement>;

type Props = InputProps | TextareaProps;

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, Props>(
  ({ icon, onIconClick, mode, placeholder, errorText, ...otherProps }, ref) => {
    /* --------------------------------------------------------------------------- */
    /* variables
  /* --------------------------------------------------------------------------- */
    const commonProps = {
      style: errorText ? { borderColor: "#f44238", outline: "#da453b" } : {},
      className: styles.input,
      placeholder: "",
    };

    /* --------------------------------------------------------------------------- */
    return (
      <div className={styles.container}>
        <div className={styles.inputWrap}>
          {mode === "input" ? (
            <input
              {...commonProps}
              ref={ref as React.Ref<HTMLInputElement>}
              {...(otherProps as React.InputHTMLAttributes<HTMLInputElement>)}
            />
          ) : (
            <textarea
              {...commonProps}
              ref={ref as React.Ref<HTMLTextAreaElement>}
              {...(otherProps as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
            />
          )}
          <label
            className={styles.label}
            style={{ color: errorText ? "#da453b" : "" }}
          >
            {errorText ? errorText : placeholder}
          </label>

          {icon && (
            <div className={styles.imgContainer} onClick={onIconClick}>
              <img src={icon} alt="#icon" />
            </div>
          )}
        </div>
      </div>
    );
  }
);
