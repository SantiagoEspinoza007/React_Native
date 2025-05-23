import { useRef } from "react";
import { Animated, Easing } from "react-native";

export const useAnimation = () => {
  const animationOpacity = useRef(new Animated.Value(0)).current;
  const animatedTop = useRef(new Animated.Value(0)).current;

  const fadeIn = ({
    duration = 500,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.bounce,
    callback = () => {},
  }) => {
    Animated.timing(animationOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(callback);
  };

  const fadeOut = ({
    duration = 500,
    toValue = 0,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {
    Animated.timing(animationOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(
      // () => animatedTop.setValue(-200),
      //   () => animatedTop.resetAnimation()
      callback
    );
  };

  const startMovingTop = ({
    initialPosition = -200,
    duration = 500,
    toValue = 1,
    useNativeDriver = true,
    easing = Easing.ease,
    callback = () => {},
  }) => {

    animatedTop.setValue(initialPosition);

    Animated.timing(animatedTop, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
      easing: easing,
    }).start(callback);
  };

  return {
    animatedTop,
    animationOpacity,

    //Methods
    fadeIn,
    fadeOut,
    startMovingTop,
  };
};
