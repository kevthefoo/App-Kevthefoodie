import { StyleSheet, Text, View } from "react-native";
import React from "react";

const RootLayout = () => {
    return (
        <View style={styles.container}>
            <Text>sdfsdfsdf</Text>
        </View>
    );
};

export default RootLayout;

const styles = StyleSheet.create({
    container: {
        borderColor: "red",
        borderWidth: 10,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});
