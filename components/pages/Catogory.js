import React, { useEffect, useState } from 'react'
import { View,Text, SafeAreaView,StyleSheet ,TextInput,Pressable, ScrollView, Alert,TouchableOpacity, Touchable} from 'react-native'
import  Ionicons  from '@expo/vector-icons/Ionicons';
import { Doctorslist } from '../data/Catogory';
import { useNavigation } from '@react-navigation/native';
import Doctorprofilecard from '../cards/Doctorprofilecard';
import FontAwesome  from '@expo/vector-icons/FontAwesome';

const CatogoryScreen = ({route}) => {
    const data=route.params;
    const navigation=useNavigation();

    const [city,setcity]=useState('Chennai')
    const [catogory,setdata]=useState('')

    const search=()=>{
      if (city === ''){
        Alert.alert('please enter the Location')
        console.log(city)
      }
    }



    useEffect(()=>{
      const catogoryfilter =()=>{
       const filteddata =  Doctorslist.filter(docname=>docname.city===city && data.name===docname.specialization)
       setdata(filteddata)
      }
      catogoryfilter();

    },[setcity])
  
  return (
   <SafeAreaView style={styles.container}>

      <View style={styles.hederfield}>
      <Pressable onPress={()=>navigation.goBack()}>
          <Ionicons name="arrow-back-outline"  size={32} color="#3A3A3A" />
          </Pressable>
          <Text style={styles.headertext}>{data.name}</Text>
          <TouchableOpacity onPress={()=>{console.log('click')}}>
          <FontAwesome name="filter"  size={24} color="#1916C8" />
          </TouchableOpacity>


        
          
      </View>
      <View>
        
          
          <ScrollView>
          <View>
     
     {Doctorslist? Doctorslist.filter(docname=>docname.city===city && data.name===docname.specialization).map(list=>(
          <Doctorprofilecard key={list.id} list={list}/>
         )):
         <Text>No results found ..!</Text>
         }
     </View>
    
          </ScrollView>
      </View>
       
   </SafeAreaView>
  )
}

export default CatogoryScreen

const styles=StyleSheet.create({

  container:{
    backgroundColor:'#ffff',
    width:'100%',
    height:'100%',
  },
  hederfield:{
    flexDirection:'row',
    marginTop:40,
    
    padding:10,
    justifyContent:'space-between'

  },
  headertext:{
    alignItems:'center',
    fontFamily:'Inter_700Bold',
    fontSize:21,
    color:'#3A3A3A',
    
    

  },
  
 
})
