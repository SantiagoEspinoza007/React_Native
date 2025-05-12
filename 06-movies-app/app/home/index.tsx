import MainSlidesshow from "@/presentation/components/Movies/MainSlidesshow";
import MovieHorizontalList from "@/presentation/components/Movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="items-center justify-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>

        <MainSlidesshow movies={nowPlayingQuery.data ?? []} />

        <MovieHorizontalList
          title="Popular Movies"
          movies={popularQuery.data ?? []}
        />

        <MovieHorizontalList
          title="Top Rated Movies"
          movies={topRatedQuery.data ?? []}
        />

        <MovieHorizontalList
          title="Coming soon to theaters"
          movies={upcomingQuery.data ?? []}
        />

        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          className="pb-10"
        />

      </View>
    </ScrollView>
  );
};

export default HomeScreen;
