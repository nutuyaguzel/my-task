import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { Button, Divider } from '@ui-kitten/components';
import moment from 'moment';
import { setCategory } from '../../utils/function';
import { status, taskValues } from '../../utils/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';


const TaskDetail = ({route}) => {
  const {item}=route?.params;

 //delete butonu taskları silmek için 
  const deleteTask = async ()=>{
    try{
 //mevcut görevleri al
 const savedTasks= await AsyncStorage.getItem('tasks')
   
 if(savedTasks=== null){
   //görev yoksa durdur
   return;
 }
  const tasks=JSON.parse(savedTasks)
  //görev silinmesi için index bul

  const filterredTasks = tasks.filter(task => task.id !== item.id);
  //yeni görevleri  filtrele kaydet depola

   await AsyncStorage.setItem('tasks', JSON.stringify(filterredTasks))


   //görev silindiğinde ana sayfaya dön
    } catch(e){

    }
  }
// ubdate butonları güncellemek için 

const updateTask = async (newstatus)=> {
  try { 
const savedTasks = await AsyncStorage.getItem('tasks');
if (savedTasks===null){
return;

}

const tasks = JSON.parse(savedTasks);

const updatedTasks = tasks.map(task =>{
   if(task.id === item.id){
    return {...task, status: newstatus}//yeni durumu uygular 
   }
   return task;

})
//yeni durumu uygular depolar 
await AsyncStorage.setItem('tasks', JSON.stringify(updatedTasks));
} catch(e){
    console.log(e);
  }

}

  return (
    <View style={styles.container}>
<ScrollView>
  <View 
  style={{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:15,
    alignItems:'center',
    marginBottom:10
  }} >
    <Text 
    style={{
      fontSize:18,
      fontWeight:'500',
      
      }}>Title:</Text>
    <Text>{item.title}</Text>
  </View>
  <Divider />
  <View 
  style={{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:15,
    alignItems:'center',
    marginBottom:10
  }} >
    <Text 
    style={{
      fontSize:18,
      fontWeight:'500',
      
      }}>Description:</Text>
    <Text>{item.description}</Text>
  </View>
  <Divider />
  <View 
  style={{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:15,
    alignItems:'center',
    marginBottom:10
  }} >
    <Text 
    style={{
      fontSize:18,
      fontWeight:'500',
      
      }}>Start Date:</Text>
    <Text> {moment(item.startDate).format('DD/MM/YYYY')}</Text>
  </View>
  <Divider />
  <View 
  style={{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:15,
    alignItems:'center',
    marginBottom:10
  }} >
    <Text 
    style={{
      fontSize:18,
      fontWeight:'500',
      
      }}>End Date:</Text>
    <Text>{moment(item.endDate).format('DD/MM/YYYY')}</Text>
  </View>
  <Divider />
  <View 
  style={{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:15,
    alignItems:'center',
    marginBottom:10
  }} >
    <Text 
    style={{
      fontSize:18,
      fontWeight:'500',
      
      }}>Category:</Text>
    <Text>{setCategory(item.category)}</Text>
  </View>
  <Divider />
  <View 
  style={{
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:15,
    alignItems:'center',
    marginBottom:10
  }} >
    <Text 
    style={{
      fontSize:18,
      fontWeight:'500',
      
      }}>Status:</Text>
    <Text>{taskValues.find(task=>task.status === item?.status)?.title}</Text>
  </View>
  <Divider />
  </ScrollView>
  <View >
    <Button onPress={()=>updateTask(status.PENDING)} style={styles.button} status='primary' >START</Button>
    <Button onPress={()=>updateTask(status.COMPLETED)} style={styles.button} status='success'>COMPLETED</Button>
    <Button onPress={()=>updateTask(status.CANCEL)}   style={styles.button} status='danger'>CANCEL</Button>
    <Button  onPress={deleteTask} style={styles.button} status='warning'>DELETE</Button>

</View>

    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    marginVertical: 5,
 

  },
});
