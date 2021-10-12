import 'react-native-gesture-handler';
import React, { memo } from 'react';
import { NavigationContainer, RouteProp } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: {
    parametros: string;
    name?: string;
    dog?: string;
    cat?: string;
  };
};
import Home from './Home';

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  const deepLinking = {
    prefixes: ['rodCord://'],
    config: {
      screens: {
        Home: ':parametros',
      },
    },
  };
  return (
    <NavigationContainer linking={deepLinking}>
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: '#312e38',
          },
        }}
        initialRouteName="Home">
        <Stack.Screen
          component={Home}
          options={{
            headerShown: false,
          }}
          name="Home"
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default memo(Routes);
