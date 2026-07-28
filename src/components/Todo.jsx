import {Text, View, StyleSheet, Pressable} from 'react-native';
import { useState } from 'react';

export default function ToDo({ name, completed }) {
    const [isCompleted, setIsCompleted] = useState(completed);

    return (
        <View style={styles.container}>
            <Pressable onPress={() => setIsCompleted(!isCompleted)}>
                <Text>{isCompleted ? "[✓]" : "[   ]"}</Text>
            </Pressable>
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
})
