import MainSlidesshow from "@/presentation/components/Movies/MainSlidesshow";
import MovieHorizontalList from "@/presentation/components/Movies/MovieHorizontalList";
import { useMovies } from "@/presentation/hooks/useMovies";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="items-center justify-center flex-1 bg-white">
        <ActivityIndicator color="#8b5cf6" size={40} />
        <Text className="mt-4 text-lg text-gray-500">
          Cargando películas...
        </Text>
      </View>
    );
  }

  return (
    <ScrollView
      className="bg-white"
      contentContainerStyle={{
        paddingBottom: 32,
        paddingTop: safeArea.top + 8,
      }}
      showsVerticalScrollIndicator={false}
    >
      <View className="px-4">
        <View className="flex flex-row items-center mb-2">
          <Ionicons name="film-outline" size={32} color="#8b5cf6" />
          <Text className="text-3xl font-bold ml-2 text-gray-900">
            Movies App
          </Text>
        </View>
        <Text className="text-base text-gray-500 mb-4">
          ¡Descubre y explora las mejores películas!
        </Text>
      </View>

      <MainSlidesshow movies={nowPlayingQuery.data ?? []} />

      <View className="">
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
        />
      </View>

      <View className="mt-4">
        <MovieHorizontalList
          title="Mejor valoradas"
          movies={topRatedQuery.data?.pages.flat() ?? []}
          loadNextPage={topRatedQuery.fetchNextPage}
        />
      </View>

      <View className="mt-4">
        <MovieHorizontalList
          title="Próximamente en cines"
          movies={upcomingQuery.data ?? []}
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
