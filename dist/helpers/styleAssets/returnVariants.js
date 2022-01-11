var variants = {
    button: {
        container: {
            primary: {
                backgroundColor: '#00aeef',
            },
            secondary: {
                backgroundColor: '#ffffff',
                borderWidth: 1,
                borderColor: '#0097d0',
            },
        },
        text: {
            primary: {
                color: '#ffffff',
            },
            secondary: {
                color: '#0097d0',
            },
        },
    },
};
var returnVariant = function (componentType, componentHierarchy, variantName) { return variants[componentType][componentHierarchy][variantName]; };
export default returnVariant;
//# sourceMappingURL=returnVariants.js.map