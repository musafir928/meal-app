import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import {CATEGORIES, MEALS} from '../data/test-data';

import MealList from '../components/MealList';

const CategoryMeals = ({
    navigation
}) => {
    const categoryId = navigation.getParam('categoryId');
    
    const selectedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >=0
    );
    
    return <MealList 
        listData = {selectedMeals} 
        navigation = {navigation}
    />
};

CategoryMeals.navigationOptions = ({navigation}) => {
    const categoryId = navigation.getParam('categoryId');
    const selectedCategory = CATEGORIES.find(c=> c.id === categoryId);
    
    return {
        headerTitle: selectedCategory.title,
        // headerStyle: {
        //     backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
        // },
        // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
    }
};

export default CategoryMeals;
