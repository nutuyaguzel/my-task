import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import FloatActionButton from '../../components/ui/floatActionButton';
import { ADDTASK } from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TaskCart from '../../components/home/taskCart';
import HeaderComponent from '../../components/home/headerComponent';

const Home = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [tasks, setTasks] = useState([]);

  const getTask = async () => {
    let myTask = [];
    try {
      const task = await AsyncStorage.getItem('task');
      myTask.push(JSON.parse(task));
      console.log('Task');
      setTasks(myTask);

    } catch (error) {
      console.log(error);

    }
  };

  const onRefresh = ()=>{
    setRefreshing(true);
    getTask();
    setRefreshing(false);
  };

  useEffect(() => {
    getTask();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        ListHeaderComponent={<HeaderComponent/>}
        renderItem={({ item }) => <TaskCart item={item}/>}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }

      />

      <FloatActionButton onPress={() => navigation.navigate(ADDTASK)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
