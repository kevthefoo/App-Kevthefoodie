import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Slot } from "expo-router";

const RootLayout = () => {
    return (
        <>
            <Text>Header</Text>

            <Slot />

            <Text>Footer</Text>
        </>
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
