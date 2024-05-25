import { ResizeMode, Video } from "expo-av";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CustomButton from "../../components/custom-button";
import FormField from "../../components/form-field";
import { icons } from "../../constants";
import { useGlobalContext } from "../../context/global-provider";
import { createVideo } from "../../lib/appwrite";

const Create = () => {
  const { user } = useGlobalContext();
  const [isUploading, setIsUploading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    prompt: "",
    video: null,
    thumbnail: null,
  });

  const openPicker = async (selectType) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:
        selectType === "image"
          ? ImagePicker.MediaTypeOptions.Images
          : ImagePicker.MediaTypeOptions.Videos,
      aspect: [4, 3],
      quality: 1,
      videoQuality: 1,
    });

    if (result.canceled) return;

    if (selectType === "image") {
      setForm({ ...form, thumbnail: result.assets[0] });
    }

    if (selectType === "video") {
      setForm({ ...form, video: result.assets[0] });
    }
  };

  const onSubmit = async () => {
    if (!form.prompt || !form.title || !form.video || !form.thumbnail) {
      return Alert.alert("Error", "Please fill in all the fields.");
    }

    setIsUploading(true);

    try {
      await createVideo({
        ...form,
        userId: user.$id,
      });

      Alert.alert("Success", "Post uploaded successfuly!");
      router.push("/home");
    } catch (error) {
      Alert.alert("Error", error?.message);
    } finally {
      setForm({
        title: "",
        prompt: "",
        video: null,
        thumbnail: null,
      });
      setIsUploading(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView className="px-4 my-6">
        <Text className="text-2xl text-white text-psemibold">Upload Video</Text>

        <FormField
          title="Video title"
          value={form.title}
          placeholder="Give your video a title..."
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
          isLoading={isUploading}
        />

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 font-pmedium">
            Upload video
          </Text>

          <TouchableOpacity
            onPress={() => openPicker("video")}
            disabled={isUploading}
            className={`${isUploading && "opacity-50"}`}
          >
            {form.video ? (
              <Video
                source={{ uri: form.video.uri }}
                className="w-full h-64 rounded-2xl"
                resizeMode={ResizeMode.COVER}
              />
            ) : (
              <View className="w-full h-40 px-4 bg-black-100 rounded-2xl justify-center items-center">
                <View className="w-14 h-14 border border-dashed border-secondary-100 justify-center items-center">
                  <Image
                    source={icons.upload}
                    alt="Upload video"
                    resizeMode="contain"
                    className="w-1/2 h-1/2"
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-7 space-y-2">
          <Text className="text-base text-gray-100 text-pmedium">
            Thumbnail Image
          </Text>

          <TouchableOpacity
            onPress={() => openPicker("image")}
            disabled={isUploading}
            className={`${isUploading && "opacity-50"}`}
          >
            {form.thumbnail ? (
              <Image
                source={{ uri: form.thumbnail.uri }}
                alt="Uploaded thumbnail"
                resizeMode="cover"
                className="w-full h-64 rounded-2xl"
              />
            ) : (
              <View className="w-full h-16 px-4 bg-black-100 rounded-2xl justify-center items-center border-2 border-black-200 flex-row space-x-2">
                <Image
                  alt="Upload thumbnail"
                  source={icons.upload}
                  resizeMode="contain"
                  className="w-5 h-5"
                />

                <Text className="text-sm text-gray-100 font-pmedium">
                  Choose a file
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <FormField
          title="AI Prompt"
          value={form.prompt}
          placeholder="The prompt you used to create it"
          handleChangeText={(e) => setForm({ ...form, prompt: e })}
          otherStyles="mt-7"
          isLoading={isUploading}
        />

        <CustomButton
          title="Submit & Publish"
          handlePress={onSubmit}
          containerStyles="mt-7"
          isLoading={isUploading}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Create;
