import {colors, globalStyles} from '../styles/global'
import {Text, View, ScrollView, StyleSheet} from 'react-native'

export default function HomeHeader() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'long',
        day: 'numeric',
    })
    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.header}>NotifyMe</Text>
            <Text style={styles.date}>{currentDate}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    date: {
        fontSize: 14,
        color: colors.textSecondary,
        marginTop: 4,
        marginBottom: 30,
    },
})
