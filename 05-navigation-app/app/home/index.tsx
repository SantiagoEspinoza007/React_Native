import { Link } from "expo-router";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <SafeAreaView className="px-10">
      <View>
        <Text>HomeScreen</Text>
        <Link className="mb-5" href="/products">Productos</Link>
        <Link className="mb-5" href="/products">Perfil</Link>
        <Link className="mb-5" href="/products">Ajustes</Link>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
