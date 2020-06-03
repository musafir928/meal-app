import {Platform} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen.js';
import CategoryMeals from '../screens/CategoryMeals.js';
import MealDetailsScreen from '../screens/MealDetailsScreen.js';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    CategoriesScreen,CategoryMeals,MealDetailsScreen
},{
    // mode: 'modal', 
    // initialRouteName: 'MealDetailsScreen', 
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

export default createAppContainer(MealsNavigator);