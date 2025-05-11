import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItemList
} from "@react-navigation/drawer";
import React from "react";
import { Text, View } from "react-native";

const CustomDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View className="flex justify-center items-center mx-3 p-10 mb-10 h-[150px] bg-primary rounded-2xl">
        <View className="flex justify-center items-center bg-white rounded-full w-24 h-24">
          <Text className="text-3xl font-work-black text-primary">SV</Text>
        </View>
      </View>

        {/* DrawerItems */}
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
