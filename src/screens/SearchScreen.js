import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/search-bar/SearchBar";
import useResults from "../hooks/useResults";
import RestaurantList from "../components/restaurant-list/RestaurantList";

const SearchScreen = (props) => {
  console.log(props);
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };

  return (
    <View style={styles.background}>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <Text style={styles.text}>We have found {results.length} results</Text>
      )}
      <ScrollView style={{ marginVertical: 8 }}>
        <RestaurantList
          results={filterResultByPrice("$")}
          title="Cost Effective"
        />
        <RestaurantList
          results={filterResultByPrice("$$")}
          title="Bit Pricier"
        />
        <RestaurantList
          results={filterResultByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "white",
    flex: 1,
  },
  text: {
    marginLeft: 16,
  },
});

export default SearchScreen;
