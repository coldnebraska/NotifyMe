import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

export default function Notification({ time, timeOfDay, name, repeat, volume }) {
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.timeContainer}>
                    <Text style={styles.time}>{time}</Text>
                    <Text style={styles.timeOfDay}>{timeOfDay}</Text>
                </View>

                <View style={styles.timeDataContainer}>
                    <Text style={styles.notificationText}>{name}, {repeat}</Text>
                    <Text style={styles.volumeText}>{volume}% sym</Text>
                </View>
            </View>

            <TouchableOpacity><Text>Toggle</Text></TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 40,
        padding: 10,
        backgroundColor: '#d3d3d3',
        borderRadius: 10,
    },
    timeContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    time: {
        fontSize: 48,
        fontWeight: 'bold',
    },
    timeOfDay: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 5,
    },
    timeDataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
    },
    notificationText: {
        fontSize: 16,
        fontWeight: 'normal',
    },
    volumeText: {
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'right',
    },
})
