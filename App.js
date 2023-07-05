import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';


// You can import from local files
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Homescreen from './components/pages/Homescreen';
import Formpage from './components/pages/Formpage';
import Splash1 from './components/pages/SplashScreen1';
import Splash2 from './components/pages/Splash2';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
          <stack.Navigator
         
          >
            
                  
                    <stack.Screen name="Details" component={Formpage} options={{header:()=>null}} 
             
           />
                  <stack.Screen name='Home' component={Homescreen} options={{header:()=>null}}/>
                  
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
