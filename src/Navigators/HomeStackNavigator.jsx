import { createStackNavigator } from '@react-navigation/stack';
import DetailProductScreen from '../Screens/DetailProductScreen';
import HomeScreen from '../Screens/HomeScreen';
import ChatScreen from '../Screens/ChatScreen';
import RightHeaderChat from '../Components/RightHeaderChat';

const Stack = createStackNavigator();

function HomeStackNavigator() {
  return (
    <>
      <Stack.Navigator
        screenOptions={
          { headerShown: false }
        }
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailProductScreen} />
        <Stack.Screen name="Chat" component={ChatScreen}
        />
      </Stack.Navigator>
    </>
  );
}

export default HomeStackNavigator