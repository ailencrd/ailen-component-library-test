import { __assign } from "tslib";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { useRestyle, createVariant, createText, createRestyleComponent } from "@shopify/restyle";
var buttonTextVariants = createVariant({ themeKey: 'buttonTextVariants', defaults: {} });
var buttonContainerVariants = createVariant({ themeKey: 'buttonContainerVariants', defaults: {} });
var ContainerRestyleFunctions = [buttonContainerVariants];
var TextRestyleFunctions = [buttonTextVariants];
var Container = createRestyleComponent([buttonContainerVariants], View);
var Text = createText();
var Button = function (_a) {
    var children = _a.children, disabled = _a.disabled, onPress = _a.onPress, variant = _a.variant;
    var ContainerProps = useRestyle(ContainerRestyleFunctions, { variant: variant });
    var TextProps = useRestyle(TextRestyleFunctions, { variant: variant });
    return (React.createElement(TouchableOpacity, { onPress: onPress, disabled: disabled },
        React.createElement(Container, __assign({}, ContainerProps),
            React.createElement(Text, __assign({}, TextProps), children))));
};
export default Button;
//# sourceMappingURL=Button.js.map