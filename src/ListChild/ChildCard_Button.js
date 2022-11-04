import React, { Component } from 'react';
import { Image, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const ChildCard_Button =({imageContent,index,onPress,buttonIcon,iconColor='#000',nameMain,description=[],styleChildCard,styleNameMain,styleDescription})=>{
    return(
        <View>
            <View
                style={[styles.card,styleChildCard]}
            >
                <View style={{flex:1,flexDirection:'row'}}>
                    {imageContent?
                        <View style={{flex:2,justifyContent:'center',alignItems:'center',borderBottomLeftRadius:10,borderTopLeftRadius:10}}>
                            <Image source={{uri:`${imageContent}`}} style={styles.image}></Image>
                        </View>:
                        <View></View>
                    }
                    <View style={{flex:5,flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
                        <Text style={[styles.ItemName,styleNameMain]}>{nameMain}</Text>
                        {description.map((value)=>{
                            return(
                                <Text style={[styles.ItemInfo,styleDescription]}>{value}</Text>
                            );
                        })}
                    </View>
                    {buttonIcon?
                        <TouchableHighlight 
                            style={{flex:1,justifyContent:'center',alignItems:'center',borderBottomRightRadius:10,borderTopRightRadius:10}}
                            onPress={onPress}
                            underlayColor='default'
                        >
                            <MaterialCommunityIcons
                                name={buttonIcon}
                                color={iconColor}
                                size={22}
                            >
                            </MaterialCommunityIcons>
                        </TouchableHighlight>:
                        <View></View>
                    }
                </View>
                
            </View>
        </View>
     
    )
}

export default ChildCard_Button;

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