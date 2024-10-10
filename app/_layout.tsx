import {View,TextInput,Button,Text,ScrollView,FlatList} from "react-native"
import {StyleSheet} from "react-native"
import {useState} from "react"
import GoalItem from "@/components/goalItem"
import GoalInput from "@/components/goalInput"
import {StatusBar} from "expo-status-bar"


const App=()=>{
 
   const [modal,setModal] = useState(false)
  const [ courseGoals,setCourseGoals] = useState(null)

function startAddGoalHandler(){
  setModal(true)
}
  function addGoalHandler(enteredGoalText){

if(Array.isArray(courseGoals)){
  setCourseGoals([...courseGoals,{text:enteredGoalText,id : Math.random().toString()}])
}else{
  setCourseGoals([{text:enteredGoalText,id : Math.random().toString()}])
}

endAddGoalHandler()
// setCourseGoals([...courseGoals,enteredGoalText])
  }

  function endAddGoalHandler(){
    setModal(false)
  }


  function deleteGoalHandler(id){
    // setCourseGoals(courseGoals => {
    //   return courseGoals?.filter((item)=>item.id != id)
    // })

    const details = courseGoals.filter((item)=>item.id != id)
    setCourseGoals(details)
  }

console.log(courseGoals)
  return(
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
    <Button title="Add Goal" color="#5e08cc" onPress={startAddGoalHandler}/> 
    <GoalInput visible={modal} funt={addGoalHandler} onCancel={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
      {/* <ScrollView alwaysBounceVertical={false} >
 {courseGoals?.map((goal,id)=> (
  <View key={goal} style={styles.goalItem}>
    <Text style={styles.goalText}>{goal}</Text>
  </View>
 ))}
      </ScrollView> */}
      <FlatList data={courseGoals} renderItem={(itemData) =>{
        return <GoalItem data={itemData} onDeleteItem={deleteGoalHandler}/>
      
      } } alwaysBounceVertical={false}/> 
      </View>
    </View>
    </>
  )
}


const styles = StyleSheet.create({
appContainer:{
  flex:1,
  paddingTop:50,
  paddingHorizontal:16,
  backgroundColor:"#1e085a"
},

goalsContainer:{
  flex:5,

},
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

export default App