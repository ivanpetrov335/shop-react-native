import * as React from 'react';
import { NavigationContainer, NavigationState } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProductList from './src/screens/Products/ProductList/ProductList'
import DetailsScreen from './src/screens/Products/Details/Details'
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';
import { View, TouchableOpacity, Image } from 'react-native';
import NavigationDrawerStructure from './src/helpers/NavigationDrawerStructure';
import { NavigationScreenProp, NavigationParams } from 'react-navigation';
import { Icon } from 'react-native-elements';

export const store = configureStore();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

interface Props {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}

function ProductsScreenStack({ navigation }: any) {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        name="Products"
        component={ProductList}
        options={{
          title: 'Products', //Set Header Title
          headerLeft: _ =>

            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  source={{ uri: 'https://raw.githubusercontent.com/AboutReact/sampleresource/master/drawerWhite.png' }}
                  style={{ width: 25, height: 25, marginLeft: 5 }}
                />
              </TouchableOpacity>
            </View>

          ,
          headerStyle: {
            backgroundColor: '#f4511e', //Set Header color
          },
          headerTintColor: '#fff', //Set Header text color
          headerTitleStyle: {
            fontWeight: 'bold', //Set Header text style
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{
          title: 'Details',
        }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Products"
          drawerContentOptions={{
            activeTintColor: '#e91e63',
            itemStyle: { marginVertical: 5 },
          }}>
          <Drawer.Screen
            name="Products"
            options={{ drawerLabel: 'Products' }}
            component={ProductsScreenStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;