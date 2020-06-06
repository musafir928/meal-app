import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';

import CategoriesScreen from '../screens/CategoriesScreen.js';
import CategoryMeals from '../screens/CategoryMeals.js';
import MealDetailsScreen from '../screens/MealDetailsScreen.js';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
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
        headerTitleStyle:{
            fontFamily: 'font-e'
        },
        headerBackTitleStyle:{
            fontFamily: 'font-ei'
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
            tabBarColor: Colors.primary, //for android
            tabBarLabel: Platform.OS === 'android' ? <Text style={{}}>كاتىگورىيەلەر</Text> : 'كاتىگورىيەلەر'
        }
    },
    Favorites: {
        screen: FavNavigator, navigationOptions: {
            // tabBarLabel: 'something', // to overwrite the tab bar title
            tabBarIcon: (tabInfo) => {
                return <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />;
            },
            tabBarColor: Colors.secondary, // for android, just work when shifting is true, to use with shifting: false, should add barStyle 
            tabBarLabel: Platform.OS === 'android' ? <Text style={{}}>ياقتۇرغانلىرىم</Text> : 'ياقتۇرغانلىرىم'
            // this line is for android, cause if we rewrite the label we can't style the label text by default in android, so wrap the label 
            // text with Text tag to style it, to keep the default style on os, return a string instead of a tag 
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
        labelStyle: {
            fontFamily: 'font-ei'
        },
        activeTintColor: Colors.secondary,
    }
});

const FiltersNavigator = createStackNavigator({
    Filters: FiltersScreen
},{
    navigationOptions: {
        drawerLabel: 'سۈزگۈچلەر'
    },
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
});

const MainNavigator = createDrawerNavigator({
    MealsFavs: {screen:MealsFavTabNavigator, navigationOptions: {
        drawerLabel: 'كاتىگورىيەلەر'
    }},
    Filters: FiltersNavigator
},{
    contentOptions: {
        activeTintColor: Colors.secondary,
        labelStyle: {
            fontFamily: 'font-e'
        }
    }
});

export default createAppContainer(MainNavigator);