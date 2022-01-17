import React, { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import { backgroundColor, border, spacing, useRestyle, ThemeProvider, createBox, createRestyleComponent, createVariant, VariantProps, createText } from "@shopify/restyle";
import theme, { Theme } from '../styles/themes';
import { ButtonType } from "../types/components/Button";

const Box = createBox<Theme>();
const TextContainer = createText<Theme, TextProps>();

const buttonTextVariants = createVariant<Theme, 'buttonTextVariants'>(
  {
    themeKey: 'buttonTextVariants',
    defaults: {
      color: 'white'
    }
  });

type TextProps = VariantProps<Theme, 'buttonTextVariants'> & { children: ReactNode };
type ContainerProps = VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof Box>;
const Container = createRestyleComponent<ContainerProps, Theme>(
  [createVariant({ themeKey: 'buttonVariants' })],
  Box,
);

const restyleFunctions = [spacing, backgroundColor, border];
const TextRestyleFunctions = [buttonTextVariants];

const Button = ({ children, disabled, onPress, variant, textVariant, ...rest }: ButtonType) => {
  const ContainerProps = useRestyle(restyleFunctions, rest);
  const TextProps = useRestyle(TextRestyleFunctions, { variant });
  return (
    <ThemeProvider theme={theme}>
      <TouchableOpacity onPress={onPress} disabled={disabled} style={{ minHeight: 300 }}>
        <Container {...ContainerProps} variant="primary">
          <TextContainer {...TextProps}>
            Holi acá estoy
          </TextContainer>
        </Container>
      </TouchableOpacity>
    </ThemeProvider>
  );
}

export default Button;