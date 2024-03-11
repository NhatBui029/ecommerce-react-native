import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import CartScreen from './src/Screens/CartScreen';
import HomeStackNavigator from './src/Navigators/HomeStackNavigator';
import ProfileScreen from './src/Screens/ProfileScreen';
import ProfileTabNavigator from './src/Navigators/ProfileTabNavigator';
import OrderStackNavigator from './src/Navigators/OrderStackNavigator';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Tab.Navigator 
         screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
  
            if (route.name === 'Home') {
              iconName = focused? 'home': 'home-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'cart' : 'cart-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
  
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          headerShown: false
        })}
      >
        <Tab.Screen name="Home" component={HomeStackNavigator} />
        <Tab.Screen name="Cart" component={OrderStackNavigator} options={{ tabBarBadge: 3 }}/>
        <Tab.Screen name="Profile" component={ProfileTabNavigator} />
      </Tab.Navigator>
    </ NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
