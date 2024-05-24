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
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="border-2 border-black-200 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary items-center flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          editable={!isLoading}
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
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
