import { SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Config from 'react-native-config';
import Signin from './src/screens/auth/Signin';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from './src/utils/colors';

const Stack = createNativeStackNavigator();

const theme = {
  colors: {
    background: colors.white,
  }
}

export default function App() {
  const googleData = {
    webClientId: Config.GOOGLE_WEB_CLIENT_ID
  }

  return (
    // <SafeAreaView>
    //   <Splash />
    // </SafeAreaView>
      
      <NavigationContainer theme = {theme}>
        <Stack.Navigator>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Signin" component={Signin} />
          <Stack.Screen name="Signup" component={Signup} />
        </Stack.Navigator>
      </NavigationContainer>
   
    
  );
}
