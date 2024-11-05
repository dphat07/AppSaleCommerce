import { TouchableOpacity, Text, StyleSheet, View } from "react-native"
import Fontisto from '@expo/vector-icons/Fontisto';
import { colors } from "../../../utils/colors";
import React from "react";

interface CheckBoxProps {
    checked: boolean;
    onCheck: (checked: boolean) => void;
}


const CheckBox: React.FC<CheckBoxProps> = ({ checked, onCheck }) => {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={() => onCheck(!checked)} style = {style.container}>
          {checked ?
            <View >
               <Fontisto name="checkbox-active" size={22} color={colors.grey} />
            </View> : 
            <View>
                <Fontisto name="checkbox-passive" size={22} color={colors.grey} />
            </View>
          
          }
        </TouchableOpacity>
    )
}

export default React.memo(CheckBox);    

const style = StyleSheet.create({
    container:{
        marginLeft:10
    },

})