import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const stack = createNativeStackNavigator();

import Home from './screens/Home';
import Enroll from './screens/Enroll';
import List from './screens/List';
import Display from './screens/Display';
import ColorList from './components/ColorList';

const App = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: ColorList.headerColor,
          },
          headerTitleStyle: {
            fontSize: 22,
          },
          headerTitleAlign: 'center',
        }}>
        <stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <stack.Screen name="Enroll" component={Enroll} />
        <stack.Screen name="List" component={List} />
        <stack.Screen
          name="Display"
          component={Display}
          // options={({route}) => ({title: route.params?.name ?? 'Display'})}
          options={({route}) => ({
            title: (route.params as {name?: string})?.name ?? 'Display',
          })}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
