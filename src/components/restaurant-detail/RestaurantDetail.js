import React, { memo } from "react";
import { View, Text, Image, StyleSheet } from "react-native"

const RestaurantDetail = memo(({ result }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: result.image_url }}/>
            <Text numberOfLines={1} style={styles.name}>{result.name}</Text>
            <Text style={styles.subtext}>
                {result.rating} Stars, {result.review_count} Reviews
            </Text>
        </View>
    );
});


const styles = StyleSheet.create({
    container: {
        marginLeft: 16
    },
    img: {
        width: 200,
        height: 120,
        borderRadius: 4,
    },
    name : {
        fontSize: 16,
        fontWeight: "500",
        maxWidth: 200,
    },
})

export default RestaurantDetail;