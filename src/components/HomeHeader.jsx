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
            <Text style={styles.header}>Welcome Back, John!</Text>
            <Text style={styles.date}>{currentDate}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    date: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: colors.textSecondary,
        marginTop: 4,
        marginBottom: 10,
    },
})
