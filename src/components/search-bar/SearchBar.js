import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
  return (
    <View style={styles.background}>
      <Feather name="search" size={30} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.textInput}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
  },

  textInput: {
    marginHorizontal: 12,
    flex: 1,
    fontSize: 18,
  },
});

export default SearchBar;
