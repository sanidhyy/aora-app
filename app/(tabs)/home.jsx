import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import EmptyState from "../../components/empty-state";
import SearchInput from "../../components/search-input";
import Trending from "../../components/trending";
import VideoCard from "../../components/video-card";
import { images, links } from "../../constants";
import { useGlobalContext } from "../../context/global-provider";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/use-appwrite";
import { Link } from "expo-router";

const Home = () => {
  const { user } = useGlobalContext();
  const { data: posts, refetch } = useAppwrite(getAllPosts);
  const { data: latestPosts } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);

    await refetch();

    setRefreshing(false);
  };

  return (
    <SafeAreaView className="h-full bg-primary">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} />}
        ListHeaderComponent={() => (
          <View className="my-6 space-y-6 px-4">
            <View className="mb-6 flex-row items-start justify-between">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome back
                </Text>

                <Text className="text-psemibold text-2xl text-white">
                  {user?.username}
                </Text>
              </View>

              <View className="flex flex-row space-x-4">
                <Image
                  source={images.logoSmall}
                  alt="Aora's small logo"
                  className="h-9 w-9"
                  resizeMode="contain"
                />

                <Link
                  href={links.sourceCode}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Image
                    source={images.github}
                    alt="Source code"
                    className="h-7 w-7"
                    resizeMode="contain"
                  />
                </Link>
              </View>
            </View>

            <SearchInput />

            {/* Latest videos */}
            <View className="w-full flex-1 pb-8 pt-5">
              <Text className="font-pregular text-lg text-gray-100">
                Latest Videos
              </Text>

              <Trending posts={latestPosts ?? []} />
            </View>
          </View>
        )}
        ListEmptyComponent={() => (
          <EmptyState
            title="No videos found."
            subtitle="Be the first one to upload a video."
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
