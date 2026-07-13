import {colors, globalStyles} from '../styles/global'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'
import TodoList from './TodoList'
import AlarmList from './AlarmList'
import NotificationList from './NotificationList'

export default function HomeSection({ props }) {
    return (
        <View style={styles.container}>
            <Text style={globalStyles.SectionTitle}>{props.title}</Text>

            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>+</Text>
            </TouchableOpacity>

            <View>
                {props.title === 'To Do' ? <TodoList /> : null}
                {props.title === 'Alarms' ? <AlarmList /> : null}
                {props.title === 'Notifications' ? <NotificationList /> : null}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        position: 'relative',
    },
    sectionTitle: {
        color: colors.title,
        fontSize: 24,
        fontWeight: 'bold',
    },
    addButton: {
        position: 'absolute',
        right: 0,
        top: 0,
    },
    addButtonText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})
