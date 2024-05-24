import { router } from "expo-router";
import { Image, Text, View } from "react-native";

import CustomButton from "./custom-button";

import { images } from "../constants";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4">
      <Image
        source={images.empty}
        className="w-[272px] h-[215px]"
        resizeMode="contain"
      />

      <Text className="text-xl text-center text-psemibold text-white mt-2">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
