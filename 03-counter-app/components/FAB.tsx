import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

interface Props {
  label: string;
  //Methods
  onPress?: () => void;
  onLongPress?: () => void;

  position?: "left" | "right";
}

export default function FAB({
  label,
  onPress,
  onLongPress,
  position = "right",
}: Props) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.floatingButton,
        position === "right" ? styles.positionRight : styles.positionLeft,
        pressed ? { opacity: 0.5 } : { opacity: 1 },
    ]}
      onPress={onPress}
      onLongPress={onLongPress}
    >
      <Text style={{ color: "white", fontSize: 20 }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 20,

    backgroundColor: "blue",
    padding: 20,
    borderRadius: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },

  positionRight: {
    right: 20,
  },

  positionLeft: {
    left: 20,
  },
});
