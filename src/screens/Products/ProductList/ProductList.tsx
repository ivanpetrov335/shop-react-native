import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import { connect } from 'react-redux';
import { Product } from '../reducer';
import { AppState } from 'src/screens/reducer';
import { getProducts } from './actions';
import { Button, Card, ListItem, Icon } from 'react-native-elements';
import { Header } from '@react-navigation/stack';

interface Props {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
interface DispatchProps {
    getProducts: () => void;
}

interface OwnState {
    products?: Product[];
}

class ProductList extends React.Component<Props & DispatchProps & OwnState> {
    public static navigationOptions = {
        title: 'Test Screen',
    };

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { navigation } = this.props;
        return (
            <View >

                {this.props.products ?
                    this.props.products.map(_ =>
                        <TouchableOpacity onPress={() => navigation.navigate("Details")}>
                            <Card
                                title={_.Title}
                                image={{ uri: _.ImageUri }}
                            >
                                <Text style={{ marginBottom: 10 }}> {_.Description} </Text>
                            </Card>
                        </TouchableOpacity>
                    )
                    : null
                }
            </View>
        );
    }
}

const mapStateToProps = (state: AppState): OwnState => ({
    products: state.products.products
});

export default connect<OwnState, DispatchProps, any, AppState>(mapStateToProps, {
    getProducts
})(ProductList);