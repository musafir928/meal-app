import React from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';

import {CATEGORIES, MEALS} from '../data/test-data';

import MealItem from '../components/MealItem';

const CategoryMeals = ({
    navigation
}) => {
    const categoryId = navigation.getParam('categoryId');
    
    const selectedMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(categoryId) >=0
    );

    const renderMealItem = ({item}) => {
        return (
            <MealItem item={item} mealClickHandler={()=>{
                navigation.navigate({
                    routeName:'MealDetailsScreen',
                    params:{
                        mealId: item.id,
                    }
                })
            }}/>
        )
    }
    
    return (
        <View style={styles.screen}>
           <FlatList style={{width:'100%'}} data={selectedMeals} renderItem={renderMealItem}/>
        </View>
    )
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

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333'
    }
})

export default CategoryMeals;
