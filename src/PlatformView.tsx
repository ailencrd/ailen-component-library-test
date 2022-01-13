import React from "react"
import { Platform, StyleSheet, View, Text, Button } from "react-native"

export const NativeComponent = () => (
    <Button title="I'm native" />
)
export const AndroidComponent = () => (
    <Button title="I'm Android" color='pink' />
)

export const ExtraComponent = () => Platform.select({
    ios: () => <Button title="I'm ios" />,
    android: () => <AndroidComponent />,
    native: () => <NativeComponent />,
    default: () => <Button title="I'm default" />,
})();

const PlatformView = () => (
    <View style={styles.container}>
        <ExtraComponent />
        <Text>Sistema operativo: {Platform.OS}</Text>
        <Text>Versión: {Platform.Version}</Text>
    </View>
)

export default PlatformView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 100,
        minWidth: 100,
        ...Platform.select({
            ios: {
                backgroundColor: 'red',
            },
            android: {
                backgroundColor: 'green',
            },
            default: {
                // other platforms, web for example
                backgroundColor: 'blue',
            },
        }),
    },
});