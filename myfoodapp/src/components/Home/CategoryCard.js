import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";

const CategoryCard = ({ data, onPress }) => {
  const renderCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => onPress(item.categoryName)}
    >
      <Image source={{ uri: item.categoryImage }} style={styles.image} />
      <Text style={styles.text}>{item.categoryName}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderCategory}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  card: {
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: "#ddd",
  },
  text: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
  },
});

export default CategoryCard;
