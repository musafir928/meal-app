import React from 'react';
import { ScrollView, View, StyleSheet, Text, Button, Alert } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import {MEALS} from '../data/test-data';
import HeaderButton from '../components/HeaderButton';

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
        headerTitle: selectedMeal.title,
        headerRight:()=> <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item 
                title="favorite" 
                iconName="ios-star" 
                onPress={()=>{
                Alert.alert('ssss');
            }}/>
        </HeaderButtons>
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
