import {Text, View, StyleSheet} from 'react-native';

export default function Alarm() {
    return (
        <View style={styles.container}>
            <View>
                <Text>6:00</Text>
                <Text>AM</Text>
            </View>

            <View>
                <Text>Alarm Name, Alarm Repeat</Text>
            </View>

            <Text>Switch Button</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    alarm: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
