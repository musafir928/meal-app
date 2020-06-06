import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FiltersScreen = ({

}) => (
    <View style={styles.screen}>
        <Text>Filters Screen</Text>
    </View>
);

FiltersScreen.navigationOptions = ({navigation}) =>{
    return {
        headerTitle: 'سۈزگۈچلەر',
        headerLeft: ()=><HeaderButtons HeaderButtonComponent= {HeaderButton}>
            <Item title="menu" iconName='ios-menu' onPress = {()=>{
                navigation.toggleDrawer();
            }} />
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

export default FiltersScreen;
