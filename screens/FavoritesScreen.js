import React from 'react';

import MealList from '../components/MealList';
import {MEALS} from '../data/test-data';

const FavoritesScreen = ({
    navigation
}) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return(
    <MealList listData={favMeals} navigation={navigation}/>
)};

FavoritesScreen.navigationOptions = {
    headerTitle: 'مېنىڭ ياختۇرىدىغانلىرىم'
}

export default FavoritesScreen;