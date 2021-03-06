import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { withOrientation } from 'react-navigation';

const MealItem = ({
    item, mealClickHandler
}) => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={mealClickHandler}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                        <ImageBackground source={{uri:item.imageUrl}} style={styles.bgImg}>
                            <View style={styles.titleContainer}><Text style={styles.title} numberOfLines={1}>{item.title}</Text></View>
                        </ImageBackground>
                    </View>
                    <View style={{...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{item.duration}m</Text>
                        <Text>{item.complexity.toUpperCase()}</Text>
                        <Text>{item.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#c5c5c5',
        marginVertical: 5,
        // borderRadius: 10,
        shadowColor: 'white',
        shadowRadius: 5,
        // overflow:'hidden'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader:{
        height: '85%'
    },
    mealDetail:{
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '15%'
    },
    bgImg:{
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    title:{
        fontFamily: 'font-ei',
        fontSize: 22,
        color: 'white',
        textAlign: 'center'
    },
    titleContainer:{
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    }
})

export default MealItem;
