import React from "react"
import { Platform, StyleSheet, View, Text } from "react-native"

// export const NativeComponent = () => (
//     <Button title="I'm native" />
// )
// export const AndroidComponent = () => (
//     <Button title="I'm Android" />
// )

// export const ExtraComponent = Platform.select({
//         ios: () => require('AndroidComponent'),
//         native: () => require('NativeComponent'),
//         default: () => null,
//     })();



const PlatformView = () => (
    <View style={styles.container}>
        {/* <ExtraComponent /> */}
        <Text>Sistema operativo: {Platform.OS}</Text>
        <Text>Versión: {Platform.Version}</Text>
    </View>
)

export default PlatformView;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      minHeight: 100,
      minWidth: 100,
      ...Platform.select({
        ios: {
          backgroundColor: 'red',
        },
        android: {
          backgroundColor: 'green',
        },
        default: {
          // other platforms, web for example
          backgroundColor: 'blue',
        },
      }),
    },
  });