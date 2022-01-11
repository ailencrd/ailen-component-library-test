import { StyleSheet } from 'react-native';
import merge from 'lodash/merge';
import remToPixel from '../../helpers/styleAssets/sizesConverter';
import colors from '../layout/colors';
import typography from '../layout/typography';
var base = {
    container: StyleSheet.create({
        primary: {
            elevation: 1,
            borderRadius: remToPixel(0.25),
            backgroundColor: colors.blue600,
        },
        secondary: {
            elevation: 1,
            borderRadius: remToPixel(0.25),
            backgroundColor: colors.white,
            borderWidth: 1,
            borderColor: colors.blue800,
        },
        normal: {
            padding: remToPixel(0.75),
        },
        small: {
            padding: remToPixel(0.375),
        },
    }),
    text: StyleSheet.create({
        primary: {
            textAlign: 'center',
            fontWeight: '500',
            color: colors.white,
        },
        secondary: {
            textAlign: 'center',
            fontWeight: '500',
            color: colors.blue800,
        },
        normal: {
            fontSize: typography.size.s,
        },
        small: {
            fontSize: typography.size.xs,
        },
    }),
    disabled: {
        container: StyleSheet.create({
            primary: {
                backgroundColor: colors.grey300,
            },
            secondary: {
                borderWidth: 1,
                borderColor: colors.grey300,
            },
        }),
        text: StyleSheet.create({
            primary: {
                color: colors.white,
            },
            secondary: {
                color: colors.grey300,
            },
        }),
    },
};
var darkMode = merge({}, base, { container: StyleSheet.create({
        primary: {
            backgroundColor: '#99E4FF',
        },
        secondary: {
            borderWidth: 1,
            borderColor: '#99E4FF',
        },
    }),
    text: StyleSheet.create({
        primary: {
            color: '#000',
        },
        secondary: {
            color: '#99E4FF',
        },
    }),
    disabled: {
        container: StyleSheet.create({
            primary: {
                backgroundColor: colors.grey600,
            },
            secondary: {
                backgroundColor: colors.black,
                borderWidth: 1,
                borderColor: colors.grey300,
            },
        }),
        text: StyleSheet.create({
            primary: {
                color: colors.white,
            },
            secondary: {
                color: colors.grey300,
            },
        }),
    },
});
var styles = {
    base: base,
    darkMode: darkMode,
};
var getStyles = function (theme) { return styles[theme]; };
export default getStyles;
//# sourceMappingURL=Button.js.map