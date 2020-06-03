import React from 'react';
import { 
    View, 
    StyleSheet, 
    Text, 
    Button, 
    FlatList, 
    TouchableOpacity
} from 'react-native';

import { CATEGORIES } from '../data/test-data';
import CategoryGridItemCard from '../components/CategoryGridItemCard';


const CategoriesScreen = ({
    navigation
}) => {
    const renderGridItem = ({item}) => <CategoryGridItemCard item={item} navigation={navigation}/>
    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />

    )
};

CategoriesScreen.navigationOptions = {
    headerTitle: 'Meal Categories',
    // headerStyle: {
    //     backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    // },
    // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoriesScreen;
