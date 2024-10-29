import { TouchableOpacity,Text, StyleSheet } from "react-native"
import React from "react"
interface ButtonProps {
    title: string;
    onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ title, onPress }) => {
    return <TouchableOpacity onPress= {onPress}style = {styles.container} activeOpacity={0.6} >
        <Text style= {styles.title}>{title}</Text>
    </TouchableOpacity>
   
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#4F63AC',
        paddingVertical: 20,
        paddingHorizontal:8,
        borderRadius:8, 
        width: '100%'
    },
    title: {
        color: "#FFFF",
        textAlign: 'center',
        fontSize:16,
        fontWeight: 'bold',
    }
})
