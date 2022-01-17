import { BackgroundColorProps, BorderProps, ResponsiveValue, SpacingProps } from "@shopify/restyle";
import { ReactNode } from "react";
import { NativeSyntheticEvent, NativeTouchEvent } from "react-native";
import { Theme } from "../../styles/themes";

export type ButtonType =
    SpacingProps<Theme> &
    BackgroundColorProps<Theme> & 
    BorderProps<Theme> &
    {
        children: ReactNode;
        disabled?: boolean;
        variant: 'primary' | 'secondary';
        textVariant: ResponsiveValue<never, Theme>;
        onPress: (ev: NativeSyntheticEvent<NativeTouchEvent>) => void;
        // buttonVariant: VariantProps<Theme, 'buttonVariants'>;
        // textStyle: VariantProps<Theme, 'buttonTextVariants'>;
    };
