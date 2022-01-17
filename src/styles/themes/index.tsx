import { createTheme } from '@shopify/restyle';
import remToPixel from '../../helpers/styleAssets/sizesConverter';
import colors from '../colors';

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
    textVariants: {
        header: {
          fontFamily: 'ShopifySans-Bold',
          fontWeight: 'bold',
          fontSize: 14,
          lineHeight: 42.5,
          color: 'white',
        },
        subheader: {
          fontFamily: 'ShopifySans-SemiBold',
          fontWeight: '600',
          fontSize: 28,
          lineHeight: 36,
          color: 'black',
        },
        body: {
          fontFamily: 'ShopifySans',
          fontSize: 16,
          lineHeight: 24,
          color: 'black',
        },
      },    
    buttonVariants: {
        primary: {
            elevation: 1,
            borderRadius: remToPixel(0.25),
            backgroundColor: 'buttonPrimaryBg',
        },
        secondary: {
            elevation: 1,
            borderRadius: remToPixel(0.25),
            backgroundColor: 'buttonSecondaryBg',
            borderWidth: 1,
            borderColor: 'buttonSecondaryBorder',
        },
    },
    buttonTextVariants: {
        primary: {
            textAlign: 'center',
            fontWeight: '500',
            color: 'buttonPrimaryFont',
        },
        secondary: {
            textAlign: 'center',
            fontWeight: '500',
            color: 'buttonSecondaryFont',
        },
    }
})

export type Theme = typeof theme;
export default theme;
