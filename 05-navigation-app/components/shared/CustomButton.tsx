import React from "react";
import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";

  variant?: "contained" | "textonly";

  className?: string;
}

const CustomButton = ({
  children,
  color = "primary",
  onPress,
  onLongPress,
  variant = "contained",
  className
}: Props) => {
  const btnColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  if (variant === "textonly") {
    return (
      <Pressable className={`p-3 ${className}`} onPress={onPress} onLongPress={onLongPress}>
        <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
      </Pressable>
    );
  }

  return (
    <Pressable
      className={`p-3 ${className} rounded-md ${btnColor} active:opacity-90`}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text className="text-white text-center font-work-medium">{children}</Text>
    </Pressable>
  );
};

export default CustomButton;
