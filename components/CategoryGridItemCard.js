import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Platform, TouchableNativeFeedback } from 'react-native';

const CategoryGridItemCard = ({
    item, navigation
}) => {
    let TouchableComponent = TouchableOpacity;
    if(Platform.OS === 'android' && Platform.version >= 21){
        TouchableComponent = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <TouchableComponent  
            style={{flex: 1}}  
            onPress={() => { 
                navigation.navigate({ 
                    routeName: 'CategoryMeals',
                    params: {
                        categoryId: item.id
                    } 
                }) 
                }}
            >
                <View style={{...styles.container, ...{backgroundColor:item.color}}}>
                    <Text style={styles.title} numberOfLines={2}>
                        {item.title}
                    </Text>
                </View>
            </TouchableComponent>
        </View>
   
    )
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        // overflow: 'hidden'
    },
    container:{
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,  // for android, cause android doesn't support shadow
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title:{
        fontFamily: 'font-e',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default CategoryGridItemCard;
