import { useAnimation } from "@/hooks/useAnimation";
import ThemedButton from "@/presentation/shared/ThemedButton";
import ThemedView from "@/presentation/shared/ThemedView";
import { Animated, Easing } from "react-native";

const Animation101Screen = () => {
  const { animationOpacity, animatedTop, fadeIn, fadeOut, startMovingTop } =
    useAnimation();

  return (
    <ThemedView margin className="justify-center items-center flex-1">
      <Animated.View
        className="bg-light-secondary dark:bg-dark-secondary rounded-xl p-4"
        style={{
          width: 200,
          height: 200,
          opacity: animationOpacity,
          transform: [{ translateY: animatedTop }],
        }}
      />

      <ThemedButton
        className="my-5"
        onPress={() => {
          fadeIn({}), startMovingTop({
            easing: Easing.bounce,
            duration: 1000,
          });
        }}
      >
        Fade in
      </ThemedButton>
      <ThemedButton className="my-5" onPress={() => fadeOut({})}>
        Fade Out
      </ThemedButton>
    </ThemedView>
  );
};
export default Animation101Screen;
