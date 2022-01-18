import { __assign } from "tslib";
import React from "react";
import { TouchableOpacity, Text, View, useColorScheme } from "react-native";
import { useRestyle, createVariant, createText, createRestyleComponent, ThemeProvider } from "@shopify/restyle";
import theme, { darkTheme } from '../styles';
var buttonTextVariants = createVariant({ themeKey: 'buttonTextVariants', defaults: {} });
var buttonContainerVariants = createVariant({ themeKey: 'buttonContainerVariants', defaults: {} });
var restyleFunctions = [buttonContainerVariants];
var TextRestyleFunctions = [buttonTextVariants];
// const Box = createBox<Theme, ContainerProps>();
var Box = createRestyleComponent([buttonContainerVariants], View);
var TextContainer = createText();
var Button = function (_a) {
    var children = _a.children, disabled = _a.disabled, onPress = _a.onPress, variant = _a.variant;
    var ContainerProps = useRestyle(restyleFunctions, { variant: variant });
    var TextProps = useRestyle(TextRestyleFunctions, { variant: variant });
    var isDarkMode = useColorScheme() === 'dark';
    return (React.createElement(ThemeProvider, { theme: isDarkMode ? darkTheme : theme },
        React.createElement(TouchableOpacity, __assign({ onPress: onPress, disabled: disabled }, ContainerProps),
            React.createElement(Box, __assign({}, ContainerProps),
                React.createElement(Text, null, "Aqui probando 4"),
                React.createElement(TextContainer, __assign({}, TextProps), children)))));
};
export default Button;
//# sourceMappingURL=Button.js.map