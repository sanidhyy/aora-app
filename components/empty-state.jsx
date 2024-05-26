import { router } from "expo-router";
import { Image, Text, View } from "react-native";

import CustomButton from "./custom-button";

import { images } from "../constants";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="items-center justify-center px-4">
      <Image
        source={images.empty}
        alt="No videos found"
        className="h-[215px] w-[272px]"
        resizeMode="contain"
      />

      <Text className="text-psemibold mt-2 text-center text-xl text-white">
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
