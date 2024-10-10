import {View,Button,TextInput,StyleSheet,Image} from "react-native"
import {useState} from "react"
import {Modal} from "react-native"

function goalInput({funt,visible,onCancel}){
    console.log(visible)
    const [enteredGoalText,setEnteredGoalText] = useState("")

  function goalInputHandler(enteredText){
    console.log(enteredText)
    setEnteredGoalText(enteredText)

  }

  function addGoalHandler1(){
    funt(enteredGoalText)
  }
    return(
        <Modal visible = {visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image}
             source={require("@/assets/images/goal.jpg")}
             />
            <TextInput style={styles.textInput} placeholder="Your Course Goal" onChangeText={goalInputHandler}/>
        <View style={styles.buttonContainer}>
            <View style={styles.button}>
        <Button title ="Add Goal" onPress={addGoalHandler1} color="#b180f0" />
        </View>
        <View style={styles.button} >
        <Button title="cancel" onPress={onCancel} color="#f31282"/>
        </View>
        </View>
        </View>
       
        </Modal>
    )
}

export default goalInput



const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
    justifyContent:"center",
      alignItems:"center",
      padding:16,
     backgroundColor:"#311b6b"
    
      
      },
      image:{
        width:100,
        height:100,
        margin:20
      },
      textInput:{
        borderWidth:1,
        borderColor:"#e4d0ff",
        backgroundColor:"#e4d0ff",
        width:"100%",
    borderRadius:6,
        padding:16,
        color:"#120438"
      
      },
      buttonContainer:{
        marginTop:16,
        flexDirection:"row",

      },
      button:{
        width:100,
        marginHorizontal:8

      }
})