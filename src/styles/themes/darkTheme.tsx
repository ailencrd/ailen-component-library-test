import theme, { Theme } from "..";
import colors from "../colors";

const darkTheme: Theme = {
    ...theme,
    colors: {
        ...theme.colors,
        white: colors.black,
        black: colors.white,
        buttonPrimaryBg: colors.green200,
        buttonPrimaryFont: colors.white,

        buttonSecondaryBg: colors.black,
        buttonSecondaryFont: colors.yellow200,
        buttonSecondaryBorder: colors.yellow200,
    },
};


export default darkTheme;
