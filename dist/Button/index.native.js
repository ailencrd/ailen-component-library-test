import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import getStyles from '../styles/components/Button';
var Button = function (_a) {
    var children = _a.children, onPress = _a.onPress, variant = _a.variant, _b = _a.size, size = _b === void 0 ? 'normal' : _b, disabled = _a.disabled, _c = _a.containerStyle, containerStyle = _c === void 0 ? {} : _c, _d = _a.textStyle, textStyle = _d === void 0 ? {} : _d, _e = _a.activeOpacity, activeOpacity = _e === void 0 ? 0.8 : _e;
    var styles = getStyles('base');
    return (React.createElement(TouchableOpacity, { activeOpacity: activeOpacity, onPress: onPress, disabled: disabled, style: [
            styles.container[variant],
            styles.container[size],
            disabled ? styles.disabled.container[variant] : '',
            containerStyle,
        ] },
        React.createElement(Text, { style: [
                styles.text[variant],
                styles.text[size],
                disabled ? styles.disabled.text[variant] : '',
                textStyle,
            ] }, children)));
};
export default Button;
//# sourceMappingURL=index.native.js.map