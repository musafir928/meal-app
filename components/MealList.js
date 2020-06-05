import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from './MealItem';

const MealList = ({listData, navigation}) => {

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
           <FlatList style={{width:'100%'}} data={listData} renderItem={renderMealItem}/>
        </View>
    )
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333'
    }
});

export default MealList;