import { __assign } from "tslib";
import React from "react";
import { Platform, StyleSheet, View, Text, Button } from "react-native";
export var NativeComponent = function () { return (React.createElement(Button, { title: "I'm native" })); };
export var AndroidComponent = function () { return (React.createElement(Button, { title: "I'm Android", color: 'pink' })); };
export var ExtraComponent = function () { return Platform.select({
    ios: function () { return React.createElement(Button, { title: "I'm ios" }); },
    android: function () { return React.createElement(AndroidComponent, null); },
    native: function () { return React.createElement(NativeComponent, null); },
    default: function () { return React.createElement(Button, { title: "I'm default" }); },
})(); };
var PlatformView = function () { return (React.createElement(View, { style: styles.container },
    React.createElement(ExtraComponent, null),
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