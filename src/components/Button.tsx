import React, { ReactNode } from "react";
import { TouchableOpacity, View, useColorScheme } from "react-native";
import { useRestyle, createVariant, VariantProps, createText, createRestyleComponent, ThemeProvider } from "@shopify/restyle";
import theme, { darkTheme, Theme } from '../styles';
import { ButtonType } from "../types/components/Button";


const buttonTextVariants = createVariant<Theme, 'buttonTextVariants'>({ themeKey: 'buttonTextVariants', defaults: {} });
const buttonContainerVariants = createVariant<Theme, 'buttonContainerVariants'>({ themeKey: 'buttonContainerVariants', defaults: {} });

type TextProps = VariantProps<Theme, 'buttonTextVariants'> & { children: ReactNode };
type ContainerProps = VariantProps<Theme, 'buttonContainerVariants'>;

const restyleFunctions = [buttonContainerVariants];
const TextRestyleFunctions = [buttonTextVariants];

const Box = createRestyleComponent<
  ContainerProps & React.ComponentProps<typeof View>
  , Theme>([buttonContainerVariants], View);

  const TextContainer = createText<Theme, TextProps>();

const Button = ({ children, disabled, onPress, variant }: ButtonType) => {
  const ContainerProps = useRestyle(restyleFunctions, { variant });
  const TextProps = useRestyle(TextRestyleFunctions, { variant });

  const isDarkMode = useColorScheme() === 'dark';


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : theme}>
      <TouchableOpacity onPress={onPress} disabled={disabled} {...ContainerProps}>
        <Box {...ContainerProps}>
          <TextContainer {...TextProps}>
            {children}
          </TextContainer>
        </Box>
      </TouchableOpacity>
    </ThemeProvider>
  );
}

export default Button;