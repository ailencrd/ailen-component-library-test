import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: 100,
        minWidth: 100,
        ...Platform.select({
            ios: {
                backgroundColor: '#619B8A',
            },
            android: {
                backgroundColor: '#A1C181',
            },
            default: {
                // other platforms, web for example
                backgroundColor: '#233D4D',
            },
        }),
    },
});

export default styles;