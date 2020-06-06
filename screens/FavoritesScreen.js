import React from 'react';

import MealList from '../components/MealList';
import {MEALS} from '../data/test-data';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = ({
    navigation
}) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return(
    <MealList listData={favMeals} navigation={navigation}/>
)};

FavoritesScreen.navigationOptions = ({navigation}) =>{
    return {
        headerTitle: 'مېنىڭ ياختۇرىدىغانلىرىم',
        headerLeft: ()=><HeaderButtons HeaderButtonComponent= {HeaderButton}>
            <Item title="menu" iconName='ios-menu' onPress = {()=>{
                navigation.toggleDrawer();
            }} />
        </HeaderButtons>
    }
}

export default FavoritesScreen;
