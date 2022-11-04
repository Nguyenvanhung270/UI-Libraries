import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ChildCard =({imageContent,styleImage,iconMainContent,iconMainColor='#000',sizeMainIcon=60,index,onPress,nameMain,description=[],styleChildCard,styleNameMain,styleDescription})=>{
    return(
        <View>
            <TouchableHighlight
                onPress={onPress}
                style={[styles.card,styleChildCard]}
                underlayColor='default'
            >
                <View style={{flex:1,flexDirection:'row'}}>
                    {iconMainContent?
                        <View style={{flex:1.5,justifyContent:'center',alignItems:'center',borderBottomLeftRadius:10,borderTopLeftRadius:10}}>
                            <MaterialCommunityIcons
                                name={iconMainContent}
                                color={iconMainColor}
                                size={sizeMainIcon}
                            >
                            </MaterialCommunityIcons>
                        </View>:
                        imageContent?
                        <View style={{flex:1.5,justifyContent:'center',alignItems:'center',borderBottomLeftRadius:10,borderTopLeftRadius:10}}>
                            <Image source={{uri:`${imageContent}`}} style={[styles.image,styleImage]}></Image>
                        </View>:
                        <View></View>
                    }
                    <View style={{flex:6,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        
                        <Text style={[styles.ItemName,styleNameMain]}>{nameMain}</Text>
                        {description.map((value)=>{
                            return(
                                <Text style={[styles.ItemInfo,styleDescription]}>{value}</Text>
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
        fontWeight:'bold'
    },
    ItemInfo:{
        fontSize:14,
        color:'#000',
        fontWeight:'400'
    }
})