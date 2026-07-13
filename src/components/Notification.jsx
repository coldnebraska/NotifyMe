import {Text, View, StyleSheet} from 'react-native';

export default function Notification() {
    return (
        <View style={styles.container}>
            <View>
                <Text>6:00</Text>
                <Text>AM</Text>
            </View>

            <View>
                <Text>Notification Name, Notification Repeat</Text>
            </View>

            <Text>Sound</Text>
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
    notification: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})
