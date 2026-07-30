import { StyleSheet } from 'react-native';

export const colors = {
    backgroundSecondary: '#ccc',
    darkMode: {
        bgDark: 'hsl(0, 0%, 0%)',
        bg: 'hsl(0, 0%, 5%)',
        bgLight: 'hsl(0, 0%, 10%)',
        text: 'hsl(0, 0%, 95%)',
        textMuted: 'hsl(0, 0%, 70%)',
    },
    lightMode: {
        bgDark: 'hsl(0, 0%, 90%)',
        bg: 'hsl(0, 0%, 95%)',
        bgLight: 'hsl(0, 0%, 100%)',
        text: 'hsl(0, 0%, 5%)',
        textMuted: 'hsl(0, 0%, 30%)',
    },
}

export const globalStyles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginTop: 10,
    },
    SectionTitle: {
        color: colors.lightMode.text,
        fontSize: 24,
        fontWeight: 'bold',
    },
    header: {
        fontSize: 32,
        fontWeight: 'bold',
    },
})
