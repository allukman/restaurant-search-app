import React from "react";
import { View, Text, StyleSheet, FlatList} from 'react-native'
import RestaurantDetail from "../restaurant-detail/RestaurantDetail";

const RestaurantList = ({title, results}) => {
    return <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return <RestaurantDetail result={item}/>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "700",
        marginLeft: 16
    },
    container: {
        marginBottom: 8
    }

});

export default RestaurantList;