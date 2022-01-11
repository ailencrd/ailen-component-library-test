import remToPixel from '../../helpers/styleAssets/sizesConverter';
var typography = {
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
export var title = {
    fontWeight: '600',
    fontSize: typography.size.l,
    lineHeight: typography.lineHeight.l,
};
export var textLarge = {
    fontSize: typography.size.s,
    lineHeight: typography.lineHeight.s,
};
export var textMedium = {
    fontSize: typography.size.xs,
    lineHeight: typography.lineHeight.xs,
};
export default typography;
//# sourceMappingURL=typography.js.map