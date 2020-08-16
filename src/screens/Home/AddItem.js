import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, ActivityIndicator, Image } from 'react-native';

import { Input, Button } from '../../components'
import { connect } from 'react-redux';
import { postData } from '../../actions'
import { TouchableOpacity } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';

const AddItems = (props) => {

    const [name, setName] = useState('Kodluyoruz3')
    const [status, setStatus] = useState('Alive')
    const [species, setSpecies] = useState('Human')
    const [gender, setGender] = useState('male')

    const [image, setImage] = useState(null)

    return (
        <ScrollView>
            <View style={{
                alignItems: 'center',
                paddingTop: 30,
                flex: 1
            }}>

                <Input
                    placeholder='name'
                    value={name}
                    onChangeText={(value) => setName(value)}
                />

                <Input
                    placeholder='status'
                    value={status}
                    onChangeText={(value) => setStatus(value)}
                />

                <Input
                    placeholder='species'
                    value={species}
                    onChangeText={(value) => setSpecies(value)}
                />

                <Input
                    placeholder='gender'
                    value={gender}
                    onChangeText={(value) => setGender(value)}
                />

                <View style={{ margin: 20}}>

                    <TouchableOpacity
                        onPress={() => {


                            const options = {
                                title: 'Resim Seç',
                                quality: 0.2,
                                storageOptions: {
                                    skipBackup: true,
                                    path: 'images',
                                },
                            };


                            ImagePicker.showImagePicker(options, (response) => {
                                console.log('Response = ', response);

                                if (response.didCancel) {
                                    console.log('User cancelled image picker');
                                } else if (response.error) {
                                    console.log('ImagePicker Error: ', response.error);
                                } else if (response.customButton) {
                                    console.log('User tapped custom button: ', response.customButton);
                                } else {
                                    const source = { uri: response.uri };
                                    setImage(source)
                                }
                            });

                        }}

                    >
                        <Image
                            source={image}
                            defaultSource={require('../../img/dummy.png')}
                            style={{ width: 100, height: 100, borderRadius: 50 }}

                        />

                    </TouchableOpacity>

                </View>

                <Button
                    text={'Add'}
                    loading={props.loadingAddItem}
                    style={{ height: 40 }}
                    onPress={() => {
                        const params = {
                            name,
                            gender,
                            species,
                            status,
                            image: image,
                            type: ''
                        }
                        props.postData(params)
                    }}
                />

            </View>
        </ScrollView>
    )
}


const mapStateToProps = ({ charactersResponse }) => {
    const { loadingAddItem } = charactersResponse;
    return { loadingAddItem };
};

export default connect(mapStateToProps, { postData })(AddItems);
