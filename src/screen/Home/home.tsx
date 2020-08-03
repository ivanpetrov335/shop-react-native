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

class HomeScreen extends Component<Props> {
    public static navigationOptions = {
        title: 'Test Screen',
    };

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to details"
                    onPress={() => {
                        navigation.navigate('Details');
                    }}
                />
            </View>
        );
    }
}

export default HomeScreen;