import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './src/screens/Products/ProductList/ProductList'
import DetailsScreen from './src/screens/Products/Details/Details'
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const Stack = createStackNavigator();

export const store = configureStore();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={ProductList} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;