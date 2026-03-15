import React, { useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, Modal, StyleSheet } from "react-native";

const wallpapers = [
  { id: "1", image: { uri: "https://picsum.photos/400/800?1" } },
  { id: "2", image: { uri: "https://picsum.photos/400/800?2" } },
  { id: "3", image: { uri: "https://picsum.photos/400/800?3" } },
  { id: "4", image: { uri: "https://picsum.photos/400/800?4" } },
  { id: "5", image: { uri: "https://picsum.photos/400/800?5" } }
];

export default function App() {

  const [selectedImage, setSelectedImage] = useState(null);

  const openWallpaper = (image) => {
    setSelectedImage(image);
  };

  const closeWallpaper = () => {
    setSelectedImage(null);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => openWallpaper(item.image)}>
      <Image source={item.image} style={styles.wallpaper} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>

      <Text style={styles.title}>AI Wallpaper Studio</Text>

      <FlatList
        data={wallpapers}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
      />

      <Modal visible={selectedImage !== null} transparent={true}>
        <View style={styles.modalContainer}>

          {selectedImage && (
            <Image source={selectedImage} style={styles.fullImage} />
          )}

          <TouchableOpacity style={styles.closeButton} onPress={closeWallpaper}>
            <Text style={{color:"white"}}>Close</Text>
          </TouchableOpacity>

        </View>
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40
  },

  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10
  },

  wallpaper: {
    width: 180,
    height: 300,
    margin: 5,
    borderRadius: 10
  },

  modalContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center"
  },

  fullImage: {
    width: "100%",
    height: "80%"
  },

  closeButton: {
    backgroundColor: "red",
    padding: 10,
    marginTop: 20,
    borderRadius: 10
  }

});
