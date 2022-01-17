import { createBox, createRestyleComponent, createVariant } from "@shopify/restyle";
import React from "react";
import { View, Text } from 'react-native';
var Box = createBox();
var Container = createRestyleComponent([createVariant({ themeKey: 'buttonVariants' })], Box);
var TextComponent = function () { return (React.createElement(View, null,
    React.createElement(Container, { variant: "primary" },
        React.createElement(Text, null, "Hola si ando")),
    React.createElement(Container, { variant: "secondary" },
        React.createElement(Text, null, "Hola tambi\u00E9n ando")))); };
export default TextComponent;
//# sourceMappingURL=TextComponent.js.map