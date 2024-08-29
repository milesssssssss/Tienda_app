import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home.js'
import Sesion from './src/screens/Sesion.js'
import SignUp from './src/screens/SignUp.js'
import UpdateUser from './src/screens/UpdateUser.js'
import Carga from './src/screens/carga.js'
import Productos from './src/screens/Productos.js';
import Carrito from './src/screens/Carrito.js';
import TabNavigator from './src/tabNavigator/TabNavigator.js';
import RecuperarContrasena from './src/screens/recuperacion.js';


export default function App() {


  const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Sesion'

        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Sesion" component={Sesion} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Recovery" component={RecuperarContrasena} />
        <Stack.Screen name="UpdateUser" component={UpdateUser} />
        <Stack.Screen name="carga" component={Carga} options={{ headerShown: false }} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
