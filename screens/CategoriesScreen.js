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
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = ({
    navigation
}) => {
    const renderGridItem = ({item}) => <CategoryGridItemCard item={item} navigation={navigation}/>
    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />

    )
};

CategoriesScreen.navigationOptions = ({navigation}) =>{
    return {headerTitle: 'Meal Categories',
    headerLeft: ()=><HeaderButtons HeaderButtonComponent= {HeaderButton}>
        <Item title="menu" iconName='ios-menu' onPress = {()=>{
            navigation.toggleDrawer();
        }} />
    </HeaderButtons>
    // headerStyle: {
    //     backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
    // },
    // headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
}};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default CategoriesScreen;
