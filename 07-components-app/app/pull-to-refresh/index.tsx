import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor(
    {
      dark: "black",
      light: "white",
    },
    "primary"
  );

  const [isRefreshing, setIsRefreshing] = useState(false);

  const onRefresh = async () => {
    setIsRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setIsRefreshing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefresh}
          colors={[primaryColor, "blue", "cyan", "green"]}
          progressBackgroundColor={backgroundColor}
          
        />
      }
    >
      <ThemedView>
        <ThemedText>PullToRefreshScreen</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
