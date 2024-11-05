import { TouchableOpacity,Text, StyleSheet } from "react-native"
import React from "react"
interface GoogleLoginProps {
    title: string;
    onPress?: () => void;
    style?: object;
}

const GoogleLogin: React.FC<GoogleLoginProps> = ({ title, onPress, style }) => {
    return <TouchableOpacity onPress= {onPress}style = {[styles.container, style]} activeOpacity={0.6} >
        <Text style= {styles.title}>{title}</Text>
    </TouchableOpacity>
   
}

export default React.memo(GoogleLogin); 

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
