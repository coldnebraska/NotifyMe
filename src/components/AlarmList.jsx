import {StyleSheet, Text, View} from 'react-native'
import Alarm from './Alarm'

export default function AlarmList() {
    return (
        <View style={styles.container}>
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
            <Alarm />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#f0f0f0',
    },
    alarm1: {
        padding: 10,
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderBottomColor: '#ccc',
        borderTopColor: '#ccc',
    },
    alarm: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
})
