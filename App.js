import { SafeAreaView} from 'react-native';
import Splash from './src/screens/auth/Splash';
import Signup from './src/screens/auth/Signup';
import Config from 'react-native-config';
import Signin from './src/screens/auth/Signin';

export default function App() {
  const googleData = {
    webClientId: Config.GOOGLE_WEB_CLIENT_ID
  }
  console.log(googleData)
  return (
    <SafeAreaView>
      
      {/* <Splash /> */}
      {/* <Signup /> */}
      <Signin />
    </SafeAreaView>
    
  );
}
