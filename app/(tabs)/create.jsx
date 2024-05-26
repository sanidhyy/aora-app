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
    <SafeAreaView className="h-full bg-primary">
      <ScrollView className="my-6 px-4">
        <Text className="text-psemibold text-2xl text-white">Upload Video</Text>

        <FormField
          title="Video title"
          value={form.title}
          placeholder="Give your video a title..."
          handleChangeText={(e) => setForm({ ...form, title: e })}
          otherStyles="mt-10"
          isLoading={isUploading}
        />

        <View className="mt-7 space-y-2">
          <Text className="font-pmedium text-base text-gray-100">
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
                className="h-64 w-full rounded-2xl"
                resizeMode={ResizeMode.COVER}
              />
            ) : (
              <View className="h-40 w-full items-center justify-center rounded-2xl bg-black-100 px-4">
                <View className="h-14 w-14 items-center justify-center border border-dashed border-secondary-100">
                  <Image
                    source={icons.upload}
                    alt="Upload video"
                    resizeMode="contain"
                    className="h-1/2 w-1/2"
                  />
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View className="mt-7 space-y-2">
          <Text className="text-pmedium text-base text-gray-100">
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
                className="h-64 w-full rounded-2xl"
              />
            ) : (
              <View className="h-16 w-full flex-row items-center justify-center space-x-2 rounded-2xl border-2 border-black-200 bg-black-100 px-4">
                <Image
                  alt="Upload thumbnail"
                  source={icons.upload}
                  resizeMode="contain"
                  className="h-5 w-5"
                />

                <Text className="font-pmedium text-sm text-gray-100">
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
