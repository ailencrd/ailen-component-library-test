import { __assign } from "tslib";
import theme from "..";
import colors from "../colors";
var darkTheme = __assign(__assign({}, theme), { colors: __assign(__assign({}, theme.colors), { white: colors.black, black: colors.white, buttonPrimaryBg: colors.green200, buttonPrimaryFont: colors.white, buttonSecondaryBg: colors.black, buttonSecondaryFont: colors.yellow200, buttonSecondaryBorder: colors.yellow200 }) });
export default darkTheme;
//# sourceMappingURL=darkTheme.js.map