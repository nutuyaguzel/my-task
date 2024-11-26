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
  const [ongoing, setOngoing] = useState(0);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [cancel, setCancel] = useState(0);







  const getTask = async () => {
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
      setTasks(JSON.parse(savedTask));
      let CompletedCount = 0;
      let PendingCount = 0;
      let OngoingCount = 0;
      let CancelCount = 0;
      for (const task of JSON.parse(savedTask)) {
        if (task.status === 1 ) {
          OngoingCount++;
        }

        if (task.status === 2) {
          PendingCount++;
        }
        if (task.status === 3) {
          CompletedCount++;
        }


        if (task.status === 4) {
          CancelCount++;
        }
        setOngoing(OngoingCount);
        setPending(PendingCount);
        setCompleted(CompletedCount);
        setCancel(CancelCount);


}
    }
      
      catch (error) {
    console.log(error);

  }
};

const onRefresh = () => {
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
      ListHeaderComponent={<HeaderComponent ongoing={ongoing} pending={pending} completed={completed} cancel={cancel} />}
      renderItem={({ item }) => <TaskCart item={item} />}
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
