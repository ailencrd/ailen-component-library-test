import React from "react";
import { Platform, View, Text, Appearance } from "react-native";
import ConditionalComponent from "./platformComponents/PlatformView";
import styles from "./styles/PlatformView";
var PlatformView = function () { return (React.createElement(View, { style: styles.container },
    React.createElement(ConditionalComponent, null),
    React.createElement(Text, { style: { fontSize: 12, color: '#ffffff' } },
        "Sistema operativo: ",
        Platform.OS),
    React.createElement(Text, { style: { fontSize: 12, color: '#ffffff' } },
        "Versi\u00F3n: ",
        Platform.Version),
    React.createElement(Text, { style: { fontSize: 16, color: '#ffffff' } },
        "Modo: ",
        JSON.stringify(Appearance.getColorScheme())))); };
export default PlatformView;
//# sourceMappingURL=PlatformView.js.map