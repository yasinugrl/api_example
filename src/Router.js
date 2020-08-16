import * as React from 'react';
import { View, Text, TouchableOpacity, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Auth/Login'
import Register from './screens/Auth/Register'
import Home from './screens/Home/Home'
import { navigationRef } from './RootNavigation';
import AsyncStorage from '@react-native-community/async-storage';
import { LOCAL_AUTH_ID, USER } from './actions/types';

const Stack = createStackNavigator();

function Router(props) {
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator initialRouteName='Login'>

                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={({ navigation, route }) => ({
                        title: 'Login',
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
                    options={({ navigation, route }) => ({
                        title: 'Home',
                        headerLeft: () => (
                            <TouchableOpacity
                            onPress={() => {
                                AsyncStorage.removeItem(LOCAL_AUTH_ID)
                                USER.token = null
                                navigation.replace('Login')
                            }}
                            style={{ 
                                marginRight: 20
                            }}
                            >
                                <Image source={require('./img/logout.png')} style={{ width: 20, height: 20, margin: 10}} />
                            </TouchableOpacity>
                          ),
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


            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Router;