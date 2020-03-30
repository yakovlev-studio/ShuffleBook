import {createStackNavigator, createAppContainer} from 'react-navigation';
import {Platform} from 'react-native';

import CategoriesScreen from '../screens/Categories';
import FotoBookScreen from '../screens/FotoBook';
import FotoCardScreen from '../screens/FotoCard';
import CanvasScreen from '../screens/Canvas';
import LaunchScreen from '../screens/LaunchScreen';
import ImageBrowserScreen from '../screens/ImageBrowser';

import colors from '../constants/colors';

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '',
  },
  headerTitleStyle: {
    textAlign: 'left',
    fontSize: 20,
  },
  headerTintColor: colors.primary,
};

const KorobookNavigator = createStackNavigator(
  {
    Launch: {
      screen: LaunchScreen,
    },
    Categories: {
      screen: CategoriesScreen,
    },
    FotoBook: {
      screen: FotoBookScreen,
    },
    FotoCard: {
      screen: FotoCardScreen,
    },
    Canvas: {
      screen: CanvasScreen,
    },
    ImageBrowser: {
      screen: ImageBrowserScreen,
    },
  },
  {
    defaultNavigationOptions: defaultStackNavOptions,
  },
);

export default createAppContainer(KorobookNavigator);
