import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

class DetailsScreen extends Component<Props> {
    public static navigationOptions = {
        title: 'Test Screen',
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Details Screen</Text>               
            </View>
        );
    }
}

export default DetailsScreen;