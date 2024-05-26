import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { icons } from "../constants";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  isLoading,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${isLoading && "opacity-50"} ${otherStyles}`}>
      <Text className="font-pmedium text-base text-gray-100">{title}</Text>

      <View className="h-16 w-full flex-row items-center rounded-2xl border-2 border-black-200 bg-black-100 px-4 focus:border-secondary">
        <TextInput
          className="flex-1 font-psemibold text-xs text-white"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          editable={!isLoading}
          autoCapitalize="none"
        />

        {title === "Password" && (
          <TouchableOpacity
            onPress={() =>
              setShowPassword((prevShowPassword) => !prevShowPassword)
            }
          >
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              alt={!showPassword ? "Show password" : "Hide password"}
              className="h-6 w-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
