import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const ChildCard =({imageContent,index,onPress,nameMain,description=[],style})=>{
    return(
        <View>
            <TouchableHighlight
                onPress={onPress}
                style={[styles.card,style]}
                underlayColor='default'
            >
                <View style={{flex:1,flexDirection:'row'}}>
                    {imageContent?
                        <View style={{flex:2,justifyContent:'center',alignItems:'center',borderBottomLeftRadius:10,borderTopLeftRadius:10}}>
                            <Image source={{uri:`${imageContent}`}} style={styles.image}></Image>
                        </View>:
                        <View></View>
                    }
                    <View style={{flex:5,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        
                        <Text style={styles.ItemName}>{nameMain}</Text>
                        {description.map((value)=>{
                            return(
                                <Text style={styles.ItemInfo}>{value}</Text>
                            );
                        })}
                    </View>
                </View>
                
            </TouchableHighlight>
        </View>
     
    )
}

export default ChildCard;

const styles = StyleSheet.create({
    card:{
        height:90,
        backgroundColor:'#e6e6e6',
        marginVertical:8,
        marginHorizontal:10,
        borderRadius:10,
        paddingLeft:10,
        paddingRight:10
    },
    image:{
        height:70,
        width:70,
        borderRadius:50,
    },
    ItemName:{
        fontSize:16,
        color:'#000',
        fontWeight:'400'
    }
})