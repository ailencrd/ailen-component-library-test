import { BackgroundColorProps, BorderProps, SpacingProps, VariantProps } from "@shopify/restyle";
import { ReactNode } from "react";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import { Theme } from "../../styles";

export type ContainerProps = VariantProps<Theme, 'buttonContainerVariants'>;
export type TextProps = VariantProps<Theme, 'buttonTextVariants'> & { children: ReactNode };

export type ButtonType =
    SpacingProps<Theme> &
    BackgroundColorProps<Theme> & 
    BorderProps<Theme> &
    {
        children: ReactNode;
        disabled?: boolean;
        variant: 'primary' | 'secondary';
        onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
    };
