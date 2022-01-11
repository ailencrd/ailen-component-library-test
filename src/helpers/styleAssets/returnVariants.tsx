const variants = {
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

const returnVariant = (
  componentType: string,
  componentHierarchy: string,
  variantName: string,
) => variants[componentType][componentHierarchy][variantName];

export default returnVariant;
