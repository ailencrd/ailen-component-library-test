import React, { ReactNode } from "react";
import { TouchableOpacity, View } from "react-native";
import { useRestyle, createVariant, VariantProps, createText, createRestyleComponent } from "@shopify/restyle";
import { Theme } from '../styles';
import { ButtonType } from "../types/components/Button";


const buttonTextVariants = createVariant<Theme, 'buttonTextVariants'>({ themeKey: 'buttonTextVariants', defaults: {} });
const buttonContainerVariants = createVariant<Theme, 'buttonContainerVariants'>({ themeKey: 'buttonContainerVariants', defaults: {} });

const ContainerRestyleFunctions = [buttonContainerVariants];
const TextRestyleFunctions = [buttonTextVariants];

type TextProps = VariantProps<Theme, 'buttonTextVariants'> & { children: ReactNode };
type ContainerProps = VariantProps<Theme, 'buttonContainerVariants'>;


const Container = createRestyleComponent<
  ContainerProps & React.ComponentProps<typeof View>
  , Theme>([buttonContainerVariants], View);

const Text = createText<Theme, TextProps>();

const Button = ({ children, disabled, onPress, variant }: ButtonType) => {
  const ContainerProps = useRestyle(ContainerRestyleFunctions, { variant });
  const TextProps = useRestyle(TextRestyleFunctions, { variant });

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Container {...ContainerProps}>
        <Text {...TextProps}>
          {children}
        </Text>
      </Container>
    </TouchableOpacity>
  );
}

export default Button;