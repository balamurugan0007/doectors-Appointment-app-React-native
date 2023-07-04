import React from 'react'
import {View,StyleSheet,Button,Text} from "react-native"
import { useFonts,Inter_500Medium,Inter_700Bold,Inter_400Regular } from '@expo-google-fonts/inter';
import Ionicons from '@expo/vector-icons/Ionicons';


const Homescreen = ({navigation,route}) => {
  const detail=route.params;

  const daoctordetail= {'id':1,
    
  "name": "Dr. Rajesh Kumar",
  "specialization": "Cardiology",
  "qualification": "MBBS, MD",
  "hospital": "Apollo Hospital",
  "city": "Chennai",
  "pic":'../../assets/form.png'
};


  let [fontsLoaded] = useFonts({
    Inter_500Medium,Inter_400Regular,Inter_700Bold,
    
 });

 if (!fontsLoaded) {
   return null;
 }
 
  return (
   <View>
    
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

      <Text style={styles.cataogorytext}>
          Catogory
      </Text>

        
   
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
    fontSize:20,
    
  }

})
