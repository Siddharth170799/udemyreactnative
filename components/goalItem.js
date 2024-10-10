import {StyleSheet} from "react-native"
import {View,Text} from "react-native"
import {Pressable} from "react-native"


function GoalItem({data,onDeleteItem}){

    return(
        <Pressable android_ripple={{color:"#dddddd"}} onPress={()=>onDeleteItem(data.item.id)}>
        <View  style={styles.goalItem}>
        <Text style={styles.goalText}>{data.item.text}</Text> 
      </View>
      </Pressable>
    )

}





export default GoalItem


const styles= StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:"#5e08cc",
        padding:8,
        color:"white"
      },goalText:{
        color:"white",
      }
})