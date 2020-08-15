import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ActivityIndicator } from 'react-native';

import { Input, Button } from '../../components'
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { login } from '../../actions'

const Login = (props) => {
    const [email, setEmail] = useState('test51@test.com')
    const [password, setPassword] = useState('123456')

    useEffect(() => {
        console.log('User DAta: ', props);
        if(props.user) {
            props.navigation.navigate('Home')
        }
    }, [props.user])

    return (
        <ScrollView>
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
                            email,
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
        </ScrollView>
    )
}


const mapStateToProps = ({ authResponse }) => {
    const { loading, user } = authResponse;
    return { loading, user };
};

export default connect(mapStateToProps, { login })(Login);
