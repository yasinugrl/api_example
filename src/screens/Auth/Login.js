import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';

import { Input, Button } from '../../components'
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { login } from '../../actions'
import { StackActions } from '@react-navigation/native';
import { LOCAL_AUTH_ID, USER } from '../../actions/types';
import AsyncStorage from '@react-native-community/async-storage';

import * as RootNavigation from '../../RootNavigation';



const Login = (props) => {
    const [email, setEmail] = useState('Test51@test.com')
    const [password, setPassword] = useState('123456')

    const [loading, setLoading] = useState(true)


    useEffect(() => {
        AsyncStorage.getItem(LOCAL_AUTH_ID).then((token) =>{
            if(token) {
                console.log('Gelen Token Data', token);
                USER.token = token
                RootNavigation.replace('Home')
            } else {
                setLoading(false)
            }
        })
    }, [])


    return (
        <ScrollView>
            {
                loading ? <ActivityIndicator size='large' /> :

                <View style={{
                    alignItems: 'center',
                    paddingTop: 30,
                    flex: 1
                }}>
    
                    <Input
                        placeholder='email'
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                    />
    
                    <Input
                        placeholder='password'
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        secureTextEntry
                    />
    
                    <Button
                        text={'Login'}
                        style={{ height: 40 }}
                        loading={props.loading}
                        onPress={() => {
                            const params = {
                                email: email.toLowerCase(),
                                password
                            }
                            props.login(params)
    
                        }}
                    />
    
                    <TouchableOpacity
                        style={{ marginTop: 30 }}
                        onPress={() => props.navigation.navigate('Register')}
                    >
                        <Text>Sign Up!</Text>
                    </TouchableOpacity>
    
                </View>

            }
            
        </ScrollView>
    )
}


const mapStateToProps = ({ authResponse }) => {
    const { loading, user } = authResponse;
    return { loading, user };
};

export default connect(mapStateToProps, { login })(Login);
