import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../../pages/Home';
import Header from '../../../Components/Header';
import {color} from 'react-native-elements/dist/helpers';

const Stack = createStackNavigator();

function MyStackHome() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeStack"
        component={Home}
        options={({navigation}) => {
          return {
            headerTitle: () => <Header navigation={navigation} />,
            headerStyle: {
              backgroundColor: '#FFFFFF',
              borderBottomWidth: 1,
              borderBottomColor: '#000',
            },
          };
        }}
      />
    </Stack.Navigator>
  );
}

export default MyStackHome;
