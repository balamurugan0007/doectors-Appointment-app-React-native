import React, { useState } from 'react'
import { View,Text ,StyleSheet,SafeAreaView,Image,TextInput, Pressable, Alert }from 'react-native'
import { useFonts,Inter_500Medium ,Inter_700Bold,Inter_400Regular} from '@expo-google-fonts/inter';

import { Button } from 'react-native-paper';

import { useNavigation } from '@react-navigation/native';




const Formpage = ({navigation}) => {

  const user={"name":name,"age":email,"city":password}
  const [name,setname]=useState('')
  const [email,setemail]=useState('')
  const [password,setpassword]=useState('')

  
  const handlesubmit=()=>{
    
    if (name === '' || email==='' || password=== ''){
      Alert.alert("please enter the all fields")
    
    }
      else{
        navigation.navigate("Home",{"name":name,"age":email,"city":password})
      }
     
  }

  
  let [fontsLoaded] = useFonts({
    Inter_500Medium,Inter_400Regular,Inter_700Bold,
    
 });

 if (!fontsLoaded) {
   return null;
 }
 

  return (
   <SafeAreaView style={styles.container}>
       <Text style={styles.header} >Doctors Here</Text>
       <Image source={require("../../assets/form.png")} alt='pic' style={styles.formpic} />
       <View style={styles.formtext}>
          
            <TextInput style={styles.formname} placeholder='  Username' onChangeText={newText => setname(newText)}/>
            <TextInput style={styles.formname} placeholder='  Age' onChangeText={newText => setemail(newText)} />
            <TextInput style={styles.formname}  placeholder='  City' onChangeText={newText => setpassword(newText)} />
            <Button
             mode="contained" style={styles.createbtn} 
             onPress={handlesubmit}>
              
   create an Account
  </Button>
   

       </View>
   </SafeAreaView>
  )
}


export default Formpage


const styles=StyleSheet.create({
  header:{
  
    fontFamily:'Inter_500Medium' , fontSize: 24,
    padding:2,
    color:"#EDEDED",
    marginTop:40,
    
    
  },
  container:{
    flex:1,
    backgroundColor:"#4744CD",
    alignItems:'center',
    
  },
  formpic:{
    width:267,
    height:300,
    alignItems:'center'
  },
  formname:{
    width:250,
    height:40,
    margin:7,
    backgroundColor:"#ffff",
    color:'black',
    borderRadius:10,
    fontFamily:'Inter_400Regular',
    fontSize:18,
   

  },
  formtext:{
    backgroundColor:'#E2E2E2',
    height:300,
    width:300,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:8,

  },
  createbtn:{
    backgroundColor: '#100CCD',
    borderRadius: 10,
    fontFamily:'Inter_700Bold',
    fontSize:22,
    margin:8,
    width:250
  },
  signintext:{
    opacity:8,
    fontFamily:'Inter_400Regular',
    fontSize:12,
    margin:5

  }
  
    
})