import React from "react";
import { Text, TextProps } from "react-native";

type TextType = "normal" | "h1" | "h2" | "semi-bold" | "link";

interface Props extends TextProps {
  className?: string;
  type?: TextType;
}

const ThemedText = ({ className, type, children, ...rest }: Props) => {
  return (
    //className="mt-10 text-3xl text-light-text dark:text-dark-text"
    <Text
      className={[
        "text-light-text dark:text-dark-text",
        type === "normal" ? "text-base" : "",
        type === "h1" ? "text-3xl" : "",
        type === "h2" ? "text-xl" : "",
        type === "semi-bold" ? "font-semibold" : "",
        type === "link" ? "font-normal underline" : "",
        className,
      ].join(" ")}
      {...rest}
    >
      {children}
    </Text>
  );
};

export default ThemedText;
