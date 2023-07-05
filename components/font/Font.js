import { useFonts,Inter_500Medium ,Inter_700Bold,Inter_400Regular} from '@expo-google-fonts/inter';


export const Font=()=>{
  let [fontsLoaded] = useFonts({
    Inter_500Medium,Inter_400Regular,Inter_700Bold,
    
 });

 if (!fontsLoaded) {
   return null;
 }
}
 