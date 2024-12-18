import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

const DishDetailsScreen = ({ route }) => {
  const { dish } = route.params; // Get dish details from navigation

  const handleAddToCart = () => {
    console.log(`${dish.name} added to cart`);
    // Implement cart logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Dish Image */}
        <Image source={{ uri: dish.image }} style={styles.dishImage} />

        {/* Dish Details */}
        <View style={styles.detailsContainer}>
          <Text style={styles.dishName}>{dish.name}</Text>
          <Text style={styles.dishPrice}>${dish.price.toFixed(2)}</Text>
          <Text style={styles.dishDescription}>{dish.description}</Text>

          {/* Ingredients Section */}
          {dish.ingredients && dish.ingredients.length > 0 && (
            <View style={styles.ingredientsContainer}>
              <Text style={styles.ingredientsTitle}>Ingredients:</Text>
              {dish.ingredients.map((ingredient, index) => (
                <Text key={index} style={styles.ingredientItem}>
                  - {ingredient}
                </Text>
              ))}
            </View>
          )}
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <TouchableOpacity
        style={styles.addToCartButton}
        onPress={handleAddToCart}
      >
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f8f8",
  },
  dishImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: -20,
  },
  dishName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  dishPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
    marginVertical: 10,
  },
  dishDescription: {
    fontSize: 16,
    color: "#666",
    marginTop: 10,
  },
  ingredientsContainer: {
    marginTop: 20,
  },
  ingredientsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  ingredientItem: {
    fontSize: 16,
    color: "#666",
    marginVertical: 5,
  },
  addToCartButton: {
    backgroundColor: "#007bff",
    padding: 15,
    borderRadius: 10,
    margin: 20,
    alignItems: "center",
  },
  addToCartButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default DishDetailsScreen;
