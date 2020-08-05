import React from 'react';
import { Text, ScrollView, TouchableOpacity, StyleSheet, View, Dimensions, Platform, Image } from 'react-native';
import {
    NavigationParams,
    NavigationScreenProp,
    NavigationState,
} from 'react-navigation';
import { connect } from 'react-redux';
import { Product } from '../reducer';
import { AppState } from 'src/screens/reducer';
import { getProducts } from './actions';
import { Card } from 'react-native-elements';

import { Appbar } from 'react-native-paper';
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
    static navigationOptions = {
        title: 'Test Screen',
        header: null
    };

    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const { navigation } = this.props;
        return (
            <>
                <ScrollView  >
                    {this.props.products ?
                        this.props.products.map(product =>
                            <TouchableOpacity onPress={() => navigation.navigate("Details", { product })}>
                                <Card
                                    key={product.Id}
                                    title={product.Title}
                                    image={{ uri: product.ImageUri }}
                                >
                                </Card>
                            </TouchableOpacity>
                        )
                        : null
                    }
                </ScrollView >
            </>
        );
    }
}

const mapStateToProps = (state: AppState): OwnState => ({
    products: state.products.products
});

export default connect<OwnState, DispatchProps, any, AppState>(mapStateToProps, {
    getProducts
})(ProductList);