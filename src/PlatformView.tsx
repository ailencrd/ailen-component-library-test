import React from "react"
import { Platform, View, Text, Appearance } from "react-native"
import ConditionalComponent from "./platformComponents/PlatformView";
import styles from "./styles/PlatformView";

const PlatformView = () => (
    <View style={styles.container}>
        <ConditionalComponent />
        <Text style={{fontSize: 12, color: '#ffffff'}}>Sistema operativo: {Platform.OS}</Text>
        <Text style={{fontSize: 12, color: '#ffffff'}}>Versión: {Platform.Version}</Text>
        <Text style={{fontSize: 16, color: '#ffffff'}}>Modo: {JSON.stringify(Appearance.getColorScheme())}</Text>
    </View>
)

export default PlatformView;

