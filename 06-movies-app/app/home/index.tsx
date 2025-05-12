import MainSlidesshow from "@/presentation/components/Movies/MainSlidesshow";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery } = useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <View className="mt-20" style={{ paddingTop: safeArea.top }}>
      <Text className="text-3xl font-bold text-center px-4 mb-2">
        Movies App
      </Text>


      <MainSlidesshow movies={ nowPlayingQuery.data ?? [] } />
    </View>
  );
};

export default HomeScreen;
