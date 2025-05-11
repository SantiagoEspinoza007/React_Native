import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation } from "expo-router";
import React from "react";
import { SafeAreaView, View } from "react-native";

const HomeScreen = () => {

  const navigation = useNavigation();
  
  const onToggleDrawer = () => {
    navigation.dispatch( DrawerActions.toggleDrawer() );
  }


  return (
    <SafeAreaView>
      <View className="px-10 mt-5">
        <CustomButton
          color="primary"
          onPress={() => router.push("/products")}
          className="mb-2"
        >
          Productos
        </CustomButton>
        <CustomButton
          onPress={() => router.push("/profile")}
          className="mb-2"
          color="secondary"
        >
          Profile
        </CustomButton>
        <CustomButton
          onPress={() => router.push("/settings")}
          className="mb-2"
          color="tertiary"
        >
          Settings
        </CustomButton>
        <CustomButton onPress={onToggleDrawer} className="mb-2">
          Abrir menú
        </CustomButton>
        {/* <Link href={"/products"} asChild>
          <CustomButton
          variant="textonly"
            color="primary"
            onPress={() => router.push("/")}
            className="mb-5"
          >
            Settings
          </CustomButton>
        </Link> */}
        {/* <Text>HomeScreen</Text>
        <Link className="mb-5" href="/products">Productos</Link>
        <Link className="mb-5" href="/products">Perfil</Link>
        <Link className="mb-5" href="/products">Ajustes</Link> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
