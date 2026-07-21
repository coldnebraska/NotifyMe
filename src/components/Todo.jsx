import {Text, View, StyleSheet} from 'react-native';

export default function ToDo({ name }) {
    return (
        <View style={styles.container}>
            <Text>{"[ ]"}</Text>
            <Text>{name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        gap: 6,
    },
    notification: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
