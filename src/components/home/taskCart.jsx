import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const TaskCart = ({item}) => {
  return (
    <View style={styles.container}>
        <Text style={styles.title} >{item.title}</Text>
        <Text>{item.description}</Text>
        <View style={{flexDirection:'row'}}>
            <View style={{flex:1}}>
                <Text style= {{ fontSize:14, fontWeight:'600', color:'black'}}>StartDate</Text>
                <Text style={{ fontSize:14, fontWeight:'300', color:'grey'}} >{item.startDate}</Text>
            </View>
            <View>
            <Text style={{ fontSize:14, fontWeight:'600', color:'black'}} > EndDate</Text>
            <Text style={{ fontSize:14, fontWeight:'600', color:'grey'}}>{item.endDate}</Text>
            </View>

        </View>
     
    </View>
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
    },
    title: {
        fontWeight: 'bold', // Yazıyı kalın yapar
        fontSize: 15, // Daha büyük görünmesi için
      },
});