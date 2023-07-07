import React, { useState } from 'react'
import {View,StyleSheet,Button,Text,Image,FlatList,ScrollView} from "react-native"

import Ionicons from '@expo/vector-icons/Ionicons';
import { Catogory } from '../data/Catogory';
import Catogorycard from '../cards/Catogorycard';
import { Doctorslist } from '../data/Catogory';
import Doctorprofilecard from '../cards/Doctorprofilecard';





const Homescreen = ({navigation,route}) => {
  const detail=route.params;
  




 
  return (
   <View style={styles.container}>
    
       <View style={styles.headertextview}>
          <View >
            <Text style={styles.textheader}>Doctors</Text>
             <Text style={styles.textheader} >Here</Text>
          </View>
          <View style={styles.userprofile}>
            <Ionicons name="person-circle-outline"  size={32} color="#1815C8" />
             <Text style={styles.username}>{detail.name}</Text>
          </View>
       </View>

     
     <ScrollView>
     <View>
         <Text style={styles.catogorytext}> Catogory </Text>
           <ScrollView horizontal showsHorizontalScrollIndicator={false}
                style={styles.catogoryfields}  >
                {Catogory && Catogory.map((doctor) => (
          
              <Catogorycard key={doctor.id} doctor={doctor} navigation={navigation}/>
        
                ))}
           </ScrollView>
     
     </View>


     <View>
     <Text style={styles.catogorytext}> Top Doctors </Text>
         {  Doctorslist && Doctorslist.map((list)=>(
          <Doctorprofilecard key={list.id} list={list}/>
         ))}
     </View>
     </ScrollView>
   
    
   
   </View>
  )
}

export default Homescreen

const styles=StyleSheet.create({
  textheader:{
     fontFamily:'Inter_700Bold',
     color:'#5C5C5C',
     fontSize:30,
     marginLeft:30,
     

  },
  headertextview:{
    marginTop:40,
    flexDirection:'row',
    justifyContent:'space-between'
    
  },
  userprofile:{
   marginTop:15,
   marginRight:30,
   justifyContent:'center',
   alignItems:'center'
  },
  username:{
    fontFamily:'Inter_500Medium',
    fontSize:16,
    
  },
  catogoryfields:{
    flexDirection:'row',
    overflow:'scroll'
  },
  container:{
    backgroundColor:'#FFFFFF',
    
  },
  catogorytext:{
    fontFamily:"Inter_700Bold",
    fontSize:18,
    color:'#504F4F',
    marginTop:18,
    marginLeft:10,

  }

})
