import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const MenuScreen = ({ route, navigation }) => {
  const { restaurant } = route.params || {}; // Safely access `restaurant`

  // Fallback if restaurant data is missing
  if (!restaurant) {
    return (
      <SafeAreaView style={styles.errorContainer}>
        <Text style={styles.errorText}>
          Error: Restaurant data not provided
        </Text>
      </SafeAreaView>
    );
  }

  const { menuItems, name, rating, deliveryTime } = restaurant;

  const handleDishPress = (dish) => {
    navigation.navigate("DishDetailsScreen", { dish });
  };

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleDishPress(item)}>
      <View style={styles.menuItemContainer}>
        <Image source={{ uri: item.image }} style={styles.menuItemImage} />
        <View style={styles.menuItemDetails}>
          <Text style={styles.menuItemName}>{item.name}</Text>
          <Text style={styles.menuItemDescription}>{item.description}</Text>
          <Text style={styles.menuItemPrice}>${item.price.toFixed(2)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Restaurant Header */}
      <View style={styles.header}>
        <Text style={styles.restaurantName}>{name}</Text>
        <Text style={styles.restaurantDetails}>
          ⭐ {rating} | ⏱ {deliveryTime}
        </Text>
      </View>

      {/* Menu Items List */}
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderMenuItem}
        contentContainerStyle={styles.menuList}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>
            No items available in the menu.
          </Text>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  header: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginBottom: 10,
  },
  restaurantName: { fontSize: 24, fontWeight: "bold", color: "#333" },
  restaurantDetails: { fontSize: 14, color: "#666", marginTop: 5 },
  menuList: { padding: 15 },
  menuItemContainer: {
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  menuItemImage: { width: 80, height: 80, borderRadius: 10 },
  menuItemDetails: { flex: 1, marginLeft: 10 },
  menuItemName: { fontSize: 16, fontWeight: "bold", color: "#333" },
  menuItemDescription: { fontSize: 14, color: "#666", marginVertical: 5 },
  menuItemPrice: { fontSize: 16, fontWeight: "bold", color: "#000" },
  errorContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
  errorText: { fontSize: 18, color: "red" },
  emptyMessage: {
    textAlign: "center",
    marginVertical: 20,
    color: "#666",
    fontSize: 16,
  },
});

export default MenuScreen;
