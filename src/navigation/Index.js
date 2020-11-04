import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from '@react-navigation/stack';

import ViewNotes from '../screens/ViewNotes';
import AddNotes from '../screens/AddNotes';

const StackNavigator = createStackNavigator(
  {
    ViewNotes: {
      screen: ViewNotes,
    },
    AddNotes: {
      screen: AddNotes,
    },
  },
  {
    initialRouteName: 'ViwNotes',
    headeMode: 'none',
    mode: 'modal',
  },
);

export default createAppContainer(StackNavigator);
