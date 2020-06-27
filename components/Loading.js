import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

export default class Loading extends Component {
    goToScreen(routeName) {
        this.props.navigation.navigate(routeName);
    }
    componentDidMount() {
        setTimeout(
            () => {
                this.goToScreen("Index");
            },
            3500,
            this
        );
    }
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0f4c75" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
});
