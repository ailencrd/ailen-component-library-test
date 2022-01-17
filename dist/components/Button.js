import { __assign, __rest } from "tslib";
import React from "react";
import { TouchableOpacity } from "react-native";
import { backgroundColor, border, spacing, useRestyle, ThemeProvider, createBox, createRestyleComponent, createVariant, createText } from "@shopify/restyle";
import theme from '../styles/themes';
var Box = createBox();
var TextContainer = createText();
var buttonTextVariants = createVariant({
    themeKey: 'buttonTextVariants',
    defaults: {
        color: 'white'
    }
});
var Container = createRestyleComponent([createVariant({ themeKey: 'buttonVariants' })], Box);
var restyleFunctions = [spacing, backgroundColor, border];
var TextRestyleFunctions = [buttonTextVariants];
var Button = function (_a) {
    var children = _a.children, disabled = _a.disabled, onPress = _a.onPress, variant = _a.variant, textVariant = _a.textVariant, rest = __rest(_a, ["children", "disabled", "onPress", "variant", "textVariant"]);
    var ContainerProps = useRestyle(restyleFunctions, rest);
    var TextProps = useRestyle(TextRestyleFunctions, { variant: variant });
    return (React.createElement(ThemeProvider, { theme: theme },
        React.createElement(TouchableOpacity, { onPress: onPress, disabled: disabled, style: { minHeight: 300 } },
            React.createElement(Container, __assign({}, ContainerProps, { variant: "primary" }),
                React.createElement(TextContainer, __assign({}, TextProps), "Holi ac\u00E1 estoy")))));
};
export default Button;
//# sourceMappingURL=Button.js.map