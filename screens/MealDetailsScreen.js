import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {MEALS} from '../data/test-data';



const MealDetailsScreen = ({
    navigation
}) => {
    const mealId = navigation.getParam('mealId');

    const selectedMeal = MEALS.find(meal=> meal.id === mealId );

    return (
        <View style={styles.screen}>
            <Text>{selectedMeal.title}</Text>
            <Button 
                title="go back to categories!" 
                onPress={()=>{
                    navigation.popToTop();
                }}
            />
        </View>
    )
};

MealDetailsScreen.navigationOptions = ({navigation}) => {
    const mealId = navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal=> meal.id === mealId );

    return {
        headerTitle: selectedMeal.title
    }
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default MealDetailsScreen;
