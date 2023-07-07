
import React, { forwardRef } from 'react'
import { View ,Text,StyleSheet,Image,ScrollView ,TouchableOpacity} from 'react-native'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const Catogorycard = forwardRef(({doctor},ref) => {

   const navigation= useNavigation();
  return (
    
         
               <View style={styles.catogorybox} ref={ref} >
                   <TouchableOpacity  onPress={()=>navigation.navigate('Catogory',{'id':doctor.id,'name':doctor.name})}>
             <Image style={styles.Icons} source={doctor.icon}/>
             </TouchableOpacity>
             <Text style={styles.catogoryname}>{doctor.name}</Text>
          </View>
         

       
    
  )
}
)
export default Catogorycard

const styles=StyleSheet.create({

   catogorybox:{
    width:80,
    height:80,
    margin:10,
    backgroundColor:'#F0F0F0',
    opacity:.8,
    overflow:'scroll',
    marginTop:40,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:15,
    border:2 ,
    borderStyle:'solid',
    borderColor:'#4542E5',
   
    

   },
   catogoryname:{
    fontFamily:'Inter_500Medium',
    fontSize:8,
    opacity:.7,
   },
   Icons:{
    width:50,
    height:50,
    

   }
})
