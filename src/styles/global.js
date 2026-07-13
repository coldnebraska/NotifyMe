import { StyleSheet } from 'react-native';

export const colors = {
    background: '#ffffff',
    title: '#000000',
    textSecondary: '#666666',
}

export const globalStyles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 10,
    },
    SectionTitle: {
        color: colors.title,
        fontSize: 24,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
    },
})
