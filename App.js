import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/reducer/store';

import ViewNotes from './src/screens/ViewNotes';
import AddNotes from './src/screens/AddNotes';
const Stack = createStackNavigator();
// import AppNavigator from './src/navigation/Index';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="ViewNotesPage"
              component={ViewNotes}
              // options={{
              //   title: 'My Notes',
              // }}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="AddNotesPage"
              component={AddNotes}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
};
export default App;
