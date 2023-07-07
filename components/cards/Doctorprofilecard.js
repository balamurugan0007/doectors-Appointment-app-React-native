import React, { forwardRef } from 'react'
import { View,Text ,StyleSheet,Image,TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'


const Doctorprofilecard = forwardRef(({list},ref) => {
    const navigation=useNavigation();
    
  return (
    <View  ref={ref} style={StyleSheet.docontainer}>
        
        <TouchableOpacity onPress={()=>navigation.navigate('Doctor',{'id':list.id,'name':list.name})} >
                      <View  style={styles.doclistview}>
                           <Image style={styles.docImage} resizeMode='contain' source={list.pic}/>
                           <View style={styles.textview}>
                          <Text style={styles.docfield}>{list.specialization}</Text>
                         <Text style={styles.docname} >{list.name}</Text>
                        
                          </View>
                     </View>
                       </TouchableOpacity>
        
    </View>
  )
})

export default Doctorprofilecard

const styles=StyleSheet.create({
    doclistview:{
        flexDirection:'row',
        marginTop:8,
        margin:20,
       
        backgroundColor:'#FAFAFA',
        height:90,
        alignItems:'center',
        borderRadius:10
        
        

    },
  
    docImage:{
        width:90,
        height:70,
        borderRadius:10,
        margin:15
        
    },
    docname:{
        fontFamily:"Inter_700Bold",
        fontSize:16,
        color:"#000000",
        opacity:.7,
        flexWrap:'wrap'
        
    },
    docfield:{
        fontFamily:'Inter_500Medium',
        fontSize:15,
        color:'#000000',
        opacity:.7,
    },
    textview:{
        justifyContent:'center',
        margin:10,
        width:170,
    }
    
})