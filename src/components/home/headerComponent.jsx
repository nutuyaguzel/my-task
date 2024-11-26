import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppColor } from '../../theme/color'
import { ArrowCircleRight, ChartCircle, Clock, CloseCircle, TickCircle } from 'iconsax-react-native'

const HeaderComponent = ({ongoing,pending,completed,cancel}) => {
  const tasks = [
    {
      id: 1,
      title: "Ongoing",
      color: AppColor.ONGOING,
      icon: <ChartCircle size="32" color={AppColor.WHITE} />,
      count:ongoing,
    
    },
    {
      id: 2,
      title: "Pending",
      color: AppColor.PENDİNG,
      icon: <Clock size="32" color="#FF8A65" />,
      count: pending,
    },
    {
      id: 3,
      title: "Completed",
      color: AppColor.COMPLETED,
      icon: <TickCircle size="32" color={AppColor.WHITE} />,
      count: completed,
    },
    {
      id: 4,
      title: "Cancel",
      color: AppColor.CANCEL,
      icon: <CloseCircle size="32" color={AppColor.WHITE} />,
      count: cancel,
    },

  ]

  const Task = ({ item }) => {
    return (

      <Pressable style={{
        width: '45%', backgroundColor: item.color, padding: 10, margin: 10,
        borderRadius: 10
      }} >
        {item.icon}
        <View
         style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 30

        }}>
        
<View>
<Text style={{ color: AppColor.WHITE, fontSize: 14, fontWeight: '600' }}>{item.title}</Text>
          <Text style={{
            color: AppColor.WHITE,
            fontSize: 16, fontWeight: '600',
            marginTop: 5
          }}>{item.count} Task</Text>
</View>
     
            <View>
              <ArrowCircleRight size="24" color={AppColor.WHITE} />
            </View>
         
        </View>



      </Pressable>
    );


  };




  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={tasks}
        renderItem={({ item }) => <Task item={item} />} />
        <View>
          <Text style={{
            fontSize:18,
            fontWeight:'500',
            marginTop: 10,
            marginHorizontal:20
          
           
          }}>All Tasks</Text>
        </View>


    </View>
  )
}

export default HeaderComponent

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})