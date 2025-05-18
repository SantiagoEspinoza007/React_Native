import { Formatter } from "@/config/helpers/formatter";
import { CompleteMovie } from "@/infrastructure/interfaces/movie.interface";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";

interface Props {
  movie: CompleteMovie;
}

const MovieDescription = ({ movie }: Props) => {
  return (
    <View className="mx-4 mt-4 bg-white/80 rounded-2xl p-4 shadow-md">
      <View className="flex flex-row items-center justify-between mb-2">
        <View className="flex flex-row items-center">
          <Ionicons name="film-outline" size={22} color="#facc15" />
          <Text className="ml-1 font-semibold text-lg text-gray-800">{movie.rating}</Text>
        </View>
        <View className="flex flex-row items-center">
          <Ionicons name="film-outline" size={18} color="#64748b" />
          <Text className="ml-1 text-gray-600">{movie.genres.join(", ")}</Text>
        </View>
      </View>

      <View className="border-t border-gray-200 my-2" />

      <Text className="font-bold text-2xl text-gray-900 mt-2">Description</Text>
      <Text className="font-normal mt-2 text-gray-700 leading-relaxed">
        {movie.description}
      </Text>

      <View className="border-t border-gray-200 my-4" />

      <View className="flex flex-row items-center mb-1">
        <MaterialIcons name="attach-money" size={22} color="#22c55e" />
        <Text className="font-bold text-2xl text-gray-900 ml-1">Budget</Text>
      </View>
      <Text className="font-normal mt-1 text-gray-700">
        {Formatter.currency(movie.budget)}
      </Text>
    </View>
  );
};

export default MovieDescription;
