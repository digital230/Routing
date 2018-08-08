import { createStackNavigator } from 'react-navigation';

//import All pages
import Page1 from './Page1';
import Page2 from './Page2';
import App from './App';

export default createStackNavigator({
  Home: App,
  Page1: Page1,
  Page2: Page2
}, {
  headerMode: 'none',
})
