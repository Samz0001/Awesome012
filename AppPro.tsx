// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';

import {
    View,
    Text,
    StyleSheet,
    useColorScheme
} from 'react-native'

function AppPro() : JSX.Element{
    const IsDarkMode = useColorScheme() === 'dark'
return(
    <View style={styles.container}>
        <Text style={IsDarkMode ? styles.whiteText: styles.darkText}>
            Hello World !
        </Text>

    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:"center",
       
    },
    whiteText : {
        color: '#FFFFFF'
    },
    darkText: {
        color: "#000000"
    }
})

export default AppPro;
