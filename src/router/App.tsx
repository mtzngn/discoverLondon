import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import CardDetailsScreen from '../screens/CardDetailsScreen/LandmarkCardDetailsScreen';

const Stack = createSharedElementStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="CardDetails"
          component={CardDetailsScreen}
          sharedElements={route => {
            const {id} = route.params;
            return [`item.${id}.photo`, `item.${id}.liked`];
          }}
          options={() => ({
            gestureEnabled: false,
            transitionSpec: {
              open: {animation: 'timing', config: {duration: 500}},
              close: {animation: 'timing', config: {duration: 500}},
            },
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
