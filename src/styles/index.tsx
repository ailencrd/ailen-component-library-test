import { createTheme } from '@shopify/restyle';
import remToPixel from '../helpers/styleAssets/sizesConverter';
import colors from './colors';

const theme = createTheme({
    colors: {
        white: colors.white,
        black: colors.black,
        buttonPrimaryBg: colors.blue600,
        buttonPrimaryFont: colors.white,
        buttonPrimaryDisabledBg: colors.grey300,
        buttonPrimaryDisabledBorder: colors.grey300,

        buttonSecondaryBg: colors.white,
        buttonSecondaryFont: colors.blue800,
        buttonSecondaryBorder: colors.blue800,
        buttonSecondaryDisabledFont: colors.grey300,
        buttonSecondaryDisabledBorder: colors.grey300,

        // Creo que link no es necesario el button link, verificar
        buttonLinkFont: colors.blue600,
        buttonLinkDisabledFont: colors.grey600,

        testColorGreen: colors.green
    },
    spacing: {
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    buttonContainerVariants: {
        primary: {
            elevation: 1,
            borderRadius: remToPixel(0.25),
            backgroundColor: 'buttonPrimaryBg',
            minHeight: 50,
        },
        secondary: {
            elevation: 1,
            borderRadius: remToPixel(0.25),
            backgroundColor: 'buttonSecondaryBg',
            borderWidth: 1,
            borderColor: 'buttonSecondaryBorder',
            minHeight: 50,
        },
    },
    buttonTextVariants: {
        primary: {
            fontSize: 20,
            textAlign: 'center',
            fontWeight: '500',
            color: 'buttonPrimaryFont',
            backgroundColor: 'testColorGreen',
        },
        secondary: {
            textAlign: 'center',
            fontWeight: '500',
            color: 'buttonSecondaryFont',
        },
    }
})

export const darkTheme: Theme = {
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

        // Creo que link no es necesario el button link, verificar
        buttonLinkFont: colors.green200,
        buttonLinkDisabledFont: colors.grey600,

        testColorGreen: colors.green
    },
};


export type Theme = typeof theme;
export default theme;
