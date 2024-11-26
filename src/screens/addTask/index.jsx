import { StyleSheet, View} from 'react-native';
import React from 'react';
import {Formik} from 'formik';
import {Input, Button, Radio,RadioGroup} from '@ui-kitten/components';
import CostomDatePicker from '../../components/ui/costomDatePicker';
import taskSchema from '../../utils/validation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { status } from '../../utils/constant';
import uuid from 'react-native-uuid'
const AddTask = () => {
  const saveTask= async(values)=>{
    try{
      const savedTasks = await AsyncStorage.getItem('tasks');
      let myTasks = savedTasks ? JSON.parse(savedTasks): [];
      myTasks.push(values);
      await AsyncStorage.setItem('tasks', JSON.stringify(myTasks));
    }catch{
      
      console.log('Task saved successfully');


    }

  };
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          id:uuid.v4(),
          title: 'Yazılım dersi',
          description: 'React-Native çalışılacak',
          startDate: null,
          endDate: null,
          category:null,
          status:status.ONGOING,
        }}
        validationSchema={taskSchema}
          onSubmit={(values) => saveTask(values)}
        >
        {({handleChange, handleSubmit, values, setFieldValue, errors}) => (
          <View>
            <Input
              size="large"
              label="Title"
              value={values.title}
              placeholder=""
              style={{marginVertical: 10}}
              onChangeText={handleChange('title')}
              status={errors.title ? 'danger': 'basic'}
              caption={errors.title}
          
            />
            <Input
              size="large"
              label="Description"
              value={values.description}
              placeholder=""
              style={{marginVertical: 10}}
              onChangeText={handleChange('description')}
              status={errors.description ? 'danger': 'basic'}
              caption={errors.description}

            />
            <CostomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.startDate}
              label={'Start Date'}
              onSelectDate={date => setFieldValue('startDate', date)}
              status={errors.startDate ? 'danger': 'basic'}
              caption={errors.startDate}
            />
            <RadioGroup
            selectedIndex={values.category} onChange={index=>setFieldValue('category',index) }>  
              <Radio status='success' >Software</Radio>
              <Radio status='success'>Desing</Radio>
              <Radio status='success'>Operation</Radio>
            </RadioGroup>
            <CostomDatePicker
              size="large"
              style={{marginVertical: 10}}
              date={values.endDate}
              label={'End Date'}
              onSelectDate={date => setFieldValue('endDate', date)}
              status={errors.endDate ? 'danger': 'basic'}
              caption={errors.endDate}
            />
           <Button
              status="success"
              style={{marginTop: 30}}
              onPress={handleSubmit}>
              CREATE
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },

});
