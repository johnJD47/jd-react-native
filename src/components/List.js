import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const ListItem = (props) => (
    <View style={styles.container}>
        <Text>{props.placenam}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#eee',
        margin: 5,
        padding: 10,

    }
});

export default ListItem;