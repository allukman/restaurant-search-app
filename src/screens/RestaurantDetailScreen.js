import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const RestaurantDetailScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam("id");

  const getRestaurant = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{result.name}</Text>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      {/* <FlatList
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({item}) => {
                    return <Image style={styles.image} source={{ uri: item}}/>
                }}
            /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  } , 
  name: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 8,
    marginBottom: 24,
  },
  image: {
    height: 200,
    width: 300,
  },
});

export default RestaurantDetailScreen;
