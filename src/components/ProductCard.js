/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const ProductCard = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.imgURL }}
                style={styles.image}
            />
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <Text>{product.title}</Text>
                <Text style={{ fontWeight: 'bold' }}>{product.price}</Text>
            </View>
        </View>
    )
}
export { ProductCard }