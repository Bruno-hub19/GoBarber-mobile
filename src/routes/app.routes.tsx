import React from 'react';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';

import Dashboard from '../pages/Dashboard';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <App.Navigator
      screenOptions={{
        // headerShown: false,
        cardStyle: {
          backgroundColor: '#312e38',
        },
        ...TransitionPresets.SlideFromRightIOS,
      }}
      mode="modal"
    >
      <App.Screen name="Dashboard" component={Dashboard} />
    </App.Navigator>
  );
};

export default AppRoutes;
