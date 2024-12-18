import React from "react";
import { ScrollView, View, Text, StyleSheet } from "react-native";
import MenuItem from "../components/MenuItem";

const MenuScreen = ({ route }) => {
  const { restaurant } = route.params; // Get restaurant details from navigation
  const menuItems = restaurant.menuItems; // Assume menuItems exist in restaurant object

  const handleAddToCart = (item) => {
    console.log(`Added ${item.name} to cart`);
    // Implement cart logic here
  };

  return (
    <ScrollView style={styles.container}>
      {/* Restaurant Header */}
      <View style={styles.header}>
        <Text style={styles.restaurantName}>{restaurant.name}</Text>
        <Text style={styles.restaurantDetails}>
          ⭐ {restaurant.rating} | ⏱ {restaurant.deliveryTime}
        </Text>
      </View>

      {/* Menu Items */}
      <View style={styles.menuList}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.id} // Use unique key for each menu item
            name={item.name}
            price={item.price}
            image={item.image}
            description={item.description}
            onAddToCart={() => handleAddToCart(item)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    padding: 15,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  restaurantName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  restaurantDetails: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
  },
  menuList: {
    padding: 15,
  },
});

export default MenuScreen;
