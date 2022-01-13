import React from "react";
import { Button, Platform } from "react-native";
export var NativeComponent = function () { return (React.createElement(Button, { title: "I'm native", color: "#FE7F2D" })); };
export var AndroidComponent = function () { return (React.createElement(Button, { title: "I'm Android", color: '#526D36' })); };
var ConditionalComponent = function () { return Platform.select({
    ios: function () { return React.createElement(Button, { title: "I'm ios", color: "#B4D0C7" }); },
    android: function () { return React.createElement(AndroidComponent, null); },
    native: function () { return React.createElement(NativeComponent, null); },
    default: function () { return React.createElement(Button, { title: "I'm default" }); },
})(); };
export default ConditionalComponent;
//# sourceMappingURL=PlatformView.js.map