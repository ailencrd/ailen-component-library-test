import React from "react";
import { Button, Platform } from "react-native";

export const NativeComponent = () => (
    <Button title="I'm native" color="#FE7F2D" />
)
export const AndroidComponent = () => (
    <Button title="I'm Android" color='#526D36' />
)

const ConditionalComponent = () => Platform.select({
    ios: () => <Button title="I'm ios" color="#B4D0C7" />,
    android: () => <AndroidComponent />,
    native: () => <NativeComponent />,
    default: () => <Button title="I'm default" />,
})();

export default ConditionalComponent;