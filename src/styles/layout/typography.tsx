import { TextStyle } from 'react-native';
import remToPixel from '../../helpers/styleAssets/sizesConverter';

const typography = {
  size: {
    xs: remToPixel(0.75),
    s: remToPixel(0.875),
    m: remToPixel(1),
    l: remToPixel(1.25),
    xl: remToPixel(1.5),
  },
  lineHeight: {
    xs: remToPixel(1.125),
    s: remToPixel(1.25),
    m: remToPixel(1.5),
    l: remToPixel(1.625),
    xl: remToPixel(1.875),
  },
};

export const title: TextStyle = {
  fontWeight: '600',
  fontSize: typography.size.l,
  lineHeight: typography.lineHeight.l,
};

export const textLarge: TextStyle = {
  fontSize: typography.size.s,
  lineHeight: typography.lineHeight.s,
};

export const textMedium: TextStyle = {
  fontSize: typography.size.xs,
  lineHeight: typography.lineHeight.xs,
};

export default typography;
