import { Text, View } from "react-native";

const InfoBox = ({ title, subtitle, containerStyles, titleStyles }) => {
  return (
    <View className={containerStyles}>
      <Text className={`text-center font-psemibold text-white ${titleStyles}`}>
        {title}
      </Text>

      <Text className="text-center font-pregular text-sm text-gray-100">
        {subtitle}
      </Text>
    </View>
  );
};

export default InfoBox;
