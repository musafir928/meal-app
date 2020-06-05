import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen.js';
import CategoryMeals from '../screens/CategoryMeals.js';
import MealDetailsScreen from '../screens/MealDetailsScreen.js';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
    CategoriesScreen, CategoryMeals, MealDetailsScreen
}, {
    // mode: 'modal', 
    // initialRouteName: 'MealDetailsScreen', 
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

const FavNavigator = createStackNavigator({
    FavoritesScreen,
    MealDetailsScreen
}, {
    // mode: 'modal', 
    // initialRouteName: 'MealDetailsScreen', 
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
})

const tabBarConfig = {
    Meals: {
        screen: MealsNavigator, navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-restaurant" size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.primary //for android
        }
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            // tabBarLabel: 'something', // to overwrite the tab bar title
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.secondary  // for android, just work when shifting is true, to use with shifting: false, should add barStyle 
        }
    },
};

const MealsFavTabNavigator = Platform.OS === 'android' 
? createMaterialBottomTabNavigator(tabBarConfig,{
    activeColor: 'white',
    shifting: true,
    // shifting: false,
    // barStyle: {
    //     backgroundColor: Colors.secondary
    // }
}) 
: createBottomTabNavigator(tabBarConfig, {
    tabBarOptions: {
        activeTintColor: Colors.secondary,
    }
});

export default createAppContainer(MealsFavTabNavigator);