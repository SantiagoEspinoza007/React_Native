import React from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...rest }: Props) => {
  return (
    <View>
      <TextInput
        className="py-4 px-2 text-black dark:text-white"
        placeholderTextColor="grey"
        {...rest}
      />
    </View>
  );
};

export default ThemedTextInput;
 