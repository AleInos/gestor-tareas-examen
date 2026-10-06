import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CreateTaskScreen from './src/screens/CreateTaskScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegisterScreen} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: () => null, title: 'Mis Tareas' }} />
        <Stack.Screen name="Alta" component={CreateTaskScreen} options={{ title: 'Nueva Tarea' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}