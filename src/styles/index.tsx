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
    },
    spacing: {
        xxxs: 2,
        xxs: 4,
        xs: 8,
        s: 12,
        m: 16,
        l: 24,
        xl: 40,
    },
    breakpoints: {
        phone: 0,
        tablet: 768,
    },
    // typography: {
    //     fontSize: {
    //         xs: remToPixel(0.75),
    //         s: remToPixel(0.875),
    //         m: remToPixel(1),
    //         l: remToPixel(1.25),
    //         xl: remToPixel(1.5),        
    //     }
    // },
    buttonContainerVariants: {
        primary: {
            elevation: 1,
            borderRadius: remToPixel(0.25),
            backgroundColor: 'buttonPrimaryBg',
            padding: 's',
        },
        secondary: {
            elevation: 1,
            borderRadius: remToPixel(0.25),
            borderWidth: 1,
            backgroundColor: 'buttonSecondaryBg',
            borderColor: 'buttonSecondaryBorder',
            padding: 's',
        },
    },
    buttonTextVariants: {
        primary: {
            fontSize: remToPixel(0.875),
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: '500',
            color: 'buttonPrimaryFont',
        },
        secondary: {
            fontSize: remToPixel(0.875),
            justifyContent: 'center',
            textAlign: 'center',
            fontWeight: '500',
            color: 'buttonSecondaryFont',
        },
    }
})

export type Theme = typeof theme;
export default theme;
