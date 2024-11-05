import { TouchableOpacity,Text, StyleSheet, View } from "react-native"
import React from "react"
import { colors } from "../../../utils/colors";
interface SeperatorProps {
    text: string;
   
}

const Seperator: React.FC<SeperatorProps> = ({ text }) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.line}/>
            <Text style= {styles.text}>{text}</Text>
            <View style = {styles.line}/>
        </View>
    )
   
}

export default Seperator

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        
    },
    line: {
        height: 1,
        flex:1, 
        backgroundColor: colors.lightGrey,
    }, 
    text: {
        color: colors.blue,
        fontWeight: '500',
        marginHorizontal:8
    }
  
})
