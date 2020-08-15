import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Auth/Login'
import Register from './screens/Auth/Register'
import Home from './screens/Home/Home'

const Stack = createStackNavigator();

function Router(props) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Login'>

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={({ navigation, route }) => ({
                        title: 'Login',
                        // headerRight: () => (
                        //     <TouchableOpacity
                        //     onPress={() => navigation.navigate('ListDetail')}
                        //     style={{ 
                        //         marginRight: 20
                        //     }}
                        //     >
                        //         <Text style={{ fontSize: 30}}>+</Text>
                        //     </TouchableOpacity>
                        //   ),
                    })}
                />


                <Stack.Screen
                    name="Register"
                    component={Register}
                    options={{ title: 'Register' }}
                />


                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'Home' }}
                />


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;