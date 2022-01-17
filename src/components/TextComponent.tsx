import {
    createBox,
    VariantProps,
    createRestyleComponent,
    createVariant
} from "@shopify/restyle";
import React from "react";
import { View, Text } from 'react-native';
import { Theme } from "../styles/themes";

const Box = createBox<Theme>();
type ContainerProps = VariantProps<Theme, 'buttonVariants'> & React.ComponentProps<typeof Box>;

const Container = createRestyleComponent<ContainerProps, Theme>(
    [createVariant({ themeKey: 'buttonVariants' })],
    Box,
);


const TextComponent = () => (
    <View>
        <Container variant="primary">
            <Text>Hola si ando</Text>
        </Container>
        <Container variant="secondary">
            <Text>Hola también ando</Text>
        </Container>
    </View>
);

export default TextComponent;