import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';


// You can import from local files
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './components/pages/Homescreen';
import Formpage from './components/pages/Formpage';
import Doctor from './components/pages/Doctor'

import CatogoryScreen from './components/pages/Catogory';


//import { createNavigationContainerRef } from "@react-navigation/native";

//export const navigationRef=createNavigationContainerRef();

const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
          <stack.Navigator
         
          >
             <stack.Screen name="Details" component={Formpage} options={{header:()=>null}} 
             
           />
                  <stack.Screen name='Home' component={Homescreen} options={{header:()=>null}}/>
                  <stack.Screen name='Doctor' component={Doctor} options={{header:()=>null}}/>
                  <stack.Screen name='Catogory' component={CatogoryScreen} options={{header:()=>null
            }}/>
          </stack.Navigator>
       
    </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },

});
