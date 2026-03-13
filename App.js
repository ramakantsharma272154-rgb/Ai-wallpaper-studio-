import React from "react";
import { Text, View, Button, Image, FlatList, TouchableOpacity } from "react-native";

const wallpapers = [
  { id: "1", image: require("./assets/wallpaper1.jpg") },
  { id: "2", image: require("./assets/wallpaper2.jpg") },
  { id: "3", image: require("./assets/wallpaper3.jpg") }
];

export default function App() {
  const downloadWallpaper = (wallpaper) => {
    alert("Download feature coming soon!"); 
  };

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: "#fff" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold", textAlign: "center" }}>
        AI Wallpaper Studio
      </Text>

      <FlatList
        data={wallpapers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => downloadWallpaper(item)}>
            <Image
              source={item.image}
              style={{ width: "100%", height: 200, marginVertical: 10, borderRadius: 10 }}
              resizeMode="cover"
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
