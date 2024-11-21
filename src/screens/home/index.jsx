import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import FloatActionButton from '../../components/ui/floatActionButton';
import { ADDTASK } from '../../utils/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({ navigation }) => {
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
  useEffect(() => {
    getTask();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text>{item.title}</Text>}

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
