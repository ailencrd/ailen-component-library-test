import { __assign } from "tslib";
import React from "react";
import { Platform, StyleSheet, View, Text } from "react-native";
// export const NativeComponent = () => (
//     <Button title="I'm native" />
// )
// export const AndroidComponent = () => (
//     <Button title="I'm Android" />
// )
// export const ExtraComponent = Platform.select({
//         ios: () => require('AndroidComponent'),
//         native: () => require('NativeComponent'),
//         default: () => null,
//     })();
var PlatformView = function () { return (React.createElement(View, { style: styles.container },
    React.createElement(Text, null,
        "Sistema operativo: ",
        Platform.OS),
    React.createElement(Text, null,
        "Versi\u00F3n: ",
        Platform.Version))); };
export default PlatformView;
var styles = StyleSheet.create({
    container: __assign({ flex: 1, minHeight: 100, minWidth: 100 }, Platform.select({
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
    })),
});
//# sourceMappingURL=PlatformView.js.map