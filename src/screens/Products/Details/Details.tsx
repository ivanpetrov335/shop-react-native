import React, { Component } from 'react';
import { Button, Text, View, Image } from 'react-native';
import { Product } from '../reducer';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { Appbar } from 'react-native-paper';
import { Input } from 'react-native-elements';


type RootStackParamList = {
    Prams: { product: Product }
};

type ProfileScreenRouteProp = RouteProp<RootStackParamList, 'Prams'>;

type ProfileScreenNavigationProp = StackNavigationProp<
    RootStackParamList,
    'Prams'
>;

type Props = {
    route: ProfileScreenRouteProp;
    navigation: ProfileScreenNavigationProp;
};


class DetailsScreen extends Component<Props> {
    public static navigationOptions = {
        title: 'Test Screen',
    };


    render() {
        var product = this.props.route.params.product;
        return (
            <View >
                <Input
                    label='Title'
                    disabled={true}
                    value={product.Title}
                />

                <Input
                    label='Price'
                    disabled={true}
                    value={product.Price}
                />
                <Input
                    label='Description'
                    disabled={true}
                    value={product.Description}
                />
                <Input
                    label='Umage URI'
                    disabled={true}
                    value={product.ImageUri}
                />
                <Image
                    source={{ uri: product.ImageUri }}
                    style={{ width: 200, height: 200 }}
                />
            </View>
        );
    }
}

export default DetailsScreen;