import { Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { TASKDETAIL } from '../../utils/routes';
import { taskValues } from '../../utils/constant';
import { setCategory } from '../../utils/function';


const TaskCart = ({ item }) => {
  const navigation = useNavigation();
  return (
    <Pressable onPress={()=>navigation.navigate(TASKDETAIL,{item:item})} style={styles.container}>
<View style={{backgroundColor:taskValues.find(task=>task.status=== item?.status)?.color}}>
  {taskValues.find(task=>task.status=== item?.status)?.icon}
</View>
<View style={{flex:1,marginLeft:10 }}>
  <Text style={{fontSize:16,fontWeight:'600', color:'black'}}>{item.title}</Text>
  <Text style={{fontSize:14,fontWeight:'300', color:'gray'}}>{item.description}</Text>
  <Text style={{fontSize:14,fontWeight:'300', color:'gray'}}>
    {moment(item.startDate).format('DD/MM/YYYY')} - {moment(item.endDate).format('DD/MM/YYYY')}
  </Text>
</View>
<View >
 <Text
 style={{fontSize:14,fontWeight:'300', color:'gray'}}
  >
   {setCategory(item.category)}
  
 </Text>

</View>


    </Pressable>
  
  );
};

export default TaskCart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 10,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',

    
  },
  title: {
    fontWeight: 'bold', // Yazıyı kalın yapar
    fontSize: 15, // Daha büyük görünmesi için
  },
});