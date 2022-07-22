import Home from "./screens/home";
import * as Font from 'expo-font';
import { useState } from "react";
import {AppLoading} from 'expo';

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./assets/font/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/font/Nunito-Bold.ttf')
  });

export default function App() {
  
  const [fontsLoaded,setFontsLoaded] = useState(false);

  if(fontsLoaded)
  {
    return (
      <Home />
    );
  }else
  {
   return(
     <AppLoading startAsync={getFonts} onFinish={() => { setFontsLoaded(true) }} />
   );
  }
}
