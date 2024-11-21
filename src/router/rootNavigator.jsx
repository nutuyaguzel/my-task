import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();


import React from 'react'
import { ADDTASK, TASKDETAIL, TASKS } from '../utils/routes';
import AddTask from '../screens/addTask';
import Home from '../screens/home';
import TaskDetail from '../screens/taskDetail';

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TASKS} component={Home} />
      <Stack.Screen name={ADDTASK} component={AddTask} />
    <Stack.Screen name={TASKDETAIL} component={TaskDetail} />
     
    
    </Stack.Navigator>
  );
}

export default RootNavigator