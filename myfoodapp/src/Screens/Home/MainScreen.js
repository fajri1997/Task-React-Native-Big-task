import React from "react";
import {
  SafeAreaView,
  FlatList,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import CategoryCard from "../../components/Home/CategoryCard";
import RestaurantCard from "../../components/Home/RestaurantCard";
import restaurantCategories from "../../DATA/restaurantCategories";
import restaurants from "../../DATA/restaurants";

const MainScreen = ({ navigation }) => {
  const handleCategoryPress = (categoryName) => {
    console.log(`Category selected: ${categoryName}`);
  };

  const handleRestaurantPress = (restaurant) => {
    console.log(`Restaurant selected: ${restaurant.name}`);
    navigation.navigate("MenuScreen", { restaurant });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Explore Restaurants</Text>

      {/* Categories Section */}
      <View>
        <CategoryCard
          data={restaurantCategories}
          onPress={handleCategoryPress}
        />
      </View>

      {/* Restaurants Section */}
      <View style={styles.restaurantSection}>
        <RestaurantCard data={restaurants} onPress={handleRestaurantPress} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#f8f8f8",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 15,
    marginVertical: 10,
    color: "#333",
  },
  restaurantSection: {
    // flex: 1,
    marginTop: 10,
  },
});

export default MainScreen;
