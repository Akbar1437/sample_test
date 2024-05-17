import { useEffect } from "react";

export const useAutoSizeTextarea = ({
  textAreaRef,
  value,
  height = 35,
}: {
  textAreaRef: React.RefObject<HTMLTextAreaElement>;
  value: string;
  height?: number;
}) => {
  useEffect(() => {
    const textArea = textAreaRef.current;
    if (textArea && value !== undefined) {
      textArea.style.height = "auto";
      const scrollHeight = Math.max(textArea.scrollHeight, height);
      textArea.style.height = `${scrollHeight}px`;
    }
  }, [height, textAreaRef, value]);
};
