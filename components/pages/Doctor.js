import React from 'react'
import { View,Text, SafeAreaView,Image ,StyleSheet, Pressable, TouchableOpacity} from 'react-native'
import { Doctorslist } from '../data/Catogory';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const Doctor = ({route}) => {
    const data=route.params;
  const navigation=useNavigation();
  return (
   <SafeAreaView style={styles.container}>
      <View style={styles.hederfield}>
      <Pressable onPress={()=>navigation.goBack()}>
      <Ionicons name="arrow-back-outline"  size={32} color="#3A3A3A" />
      </Pressable>
          <Text style={styles.headertext}>Doctor Details</Text>

          <Ionicons name="share-social"  size={27} color="#3A3A3A" />
          
      </View>

       <View>
            {Doctorslist && Doctorslist.filter(docname=>docname.id===data.id).map(profile=>(
              <View key={profile.id} > 
                   
                   <View style={styles.Imgview}>
                   <Image style={styles.doctor_img} resizeMode='contain' source={profile.pic}/>
                    </View>

                    <View style={styles.deatailsfield}>

                      <View>
                        <Text style={styles.doctorname}>{profile.name}</Text>
                        <Text style={styles.doctorcity}>{profile.city}</Text>
                      </View>

                      <View> 
                        <Text style={styles.doctorname}>
                        <Ionicons name="star"  size={27} color="#FFE500" />
                          {profile.rating}</Text>
                      </View>

                      
                    </View>
                    <Text style={styles.doctip}>
                         {profile.tip}
                      </Text>

                      <View style={styles.appointmentview}>
                          <TouchableOpacity style={styles.callIconbtn}>
                          <Ionicons name="call"  size={32} color="#1916C8" />
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.appointment}>
                               <Text style={styles.appointmenttext}>Appiontment</Text>
                          </TouchableOpacity>
                      </View>

                
                
                </View>
            ))}
       </View>
       
   </SafeAreaView>
  )
}

export default Doctor


const styles=StyleSheet.create({
 
  container:{
    backgroundColor:'#ffffff',
    height:'100%'
  },
  doctor_img:{
    height:250,
    width:250,
    borderRadius:400/2,
    


  },
  hederfield:{
    flexDirection:'row',
    marginTop:30,
    justifyContent:'space-between',
    padding:10

  },
  headertext:{
    alignItems:'center',
    fontFamily:'Inter_700Bold',
    fontSize:21,
    color:'#3A3A3A'
    

  },
  Imgview:{
    justifyContent:'center',
    alignItems:'center',
    marginTop:15
  },
  deatailsfield:{
    flexDirection:'row',
    margin:15,
    justifyContent:'space-between',
    padding:15
  },
  doctorname:{
    fontFamily:'Inter_700Bold',
    fontSize:21,
    color:'#454545'
  },
  doctorcity:{
    fontFamily:'Inter_500Medium',
    fontSize:18,
    color:'#6A6969',
  },
  doctip:{
    fontFamily:"Inter_400Regular",
    fontSize:16,
    color:'#4E4D4D',
    margin:10,
    padding:2
  },
  appointmentview:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:15,
    padding:25,
  },
  appointment:{
    fontFamily:"Inter_700Bold",
    backgroundColor:'#1916C8',
    borderRadius:10,
    width:150,
    height:45,

  },
  appointmenttext:{
    color:'#FFFFFF',
    fontFamily:'Inter_700Bold',
    fontSize:21,
    opacity:.95,
    margin:8,
    padding:1
  },
  callIconbtn:{
    backgroundColor:'#EEEDED',
    width:70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    height:45,
  }

})