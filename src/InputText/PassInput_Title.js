import React, { Component,useState } from 'react';
import { StyleSheet, TextInput, TouchableHighlight, View, Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const PassInput_Title =({title='Password',style,outPutText,color='#0099ff',placeholder='',keyboard='ascii-capable',regex=false})=>{
    const [show, showPass]= React.useState(false);
    const [password, checkPass] = React.useState('');
    const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
    const handlePassword =(text) =>{
        if(text!=''){
            if(strongRegex.test(text)){
                //console.log('strong');
                checkPass('strong');
                outPutText(text);
            }else if (mediumRegex.test(text)){
                //console.log('medium');
                checkPass('medium');
                outPutText(text);
            }else{
                checkPass('weak');
            }
        }else{
            checkPass('');
        }
    }
    const initStyle={
        height:50,
        borderWidth:1.5,
        flexDirection:'row',
        borderRadius:10,
        alignItems:'center',
        borderColor:color,
    }, 
    inputStyle={
        padding:10,
        fontSize:16,
        flex:5,
        color:color
    },
    titleStyle={
        marginLeft:10,
        position:'absolute',
        top:-12,
        backgroundColor:'#fff'
    }
    return(
        <View style={{
            width:'70%',
            marginLeft:'auto',
            marginRight:'auto',
            marginTop:100
        }}> 
            <View style={[initStyle,style]}>
                <View style={titleStyle}>
                    <Text style={{fontSize:15,fontWeight:'500',color:color,marginHorizontal:5}}>{title}</Text>
                </View>
                <View style={{flex:0.3}}>

                </View>
                <TextInput
                    style={inputStyle}
                    onChangeText={regex==true?handlePassword:outPutText}
                    placeholder={placeholder}
                    placeholderTextColor={color}
                    keyboardType={keyboard}  
                    secureTextEntry={show==false?true:false}
                    selectionColor={color}
                />
                <TouchableHighlight
                    underlayColor={'default'}
                    style={styles.button}
                    onPress={()=>showPass(!show)}
                >
                    <Ionicons
                        name={show==false?'eye':'eye-off'}
                        color={color}
                        //style={{marginBottom:2,flex:1,marginRight:10}}
                        size={22}
                    >
                    </Ionicons>
                </TouchableHighlight>
            </View>
            {password=='weak'?
            <View>
                <View style={{backgroundColor:'red',height:12,marginVertical:2,borderRadius:10,width:75}}></View>
                <Text style={{ fontSize:16,fontWeight:'400',color:'#e60000'}}>Mật khẩu yếu</Text>
            </View>:
            password=='medium'?
            <View>
                <View style={{backgroundColor:'#e6e600',height:12,marginVertical:2,borderRadius:10,width:150}}></View>
                <Text style={{ fontSize:16,fontWeight:'400',color:'#e6e600'}}>Mật khẩu trung bình</Text>
            </View>:
            password=='strong'?
            <View>
                <View style={{backgroundColor:'green',height:12,marginVertical:2,borderRadius:10}}></View>
                <Text style={{ fontSize:16,fontWeight:'400',color:'#00b33c'}}>Mật khẩu mạnh</Text>
            </View>:<View></View>
            }
        </View>
    );

}

export default PassInput_Title;

const styles = StyleSheet.create({
    container:{
        height:50,
        width:'70%',
        marginLeft:'auto',
        marginRight:'auto',
        borderWidth:1,
        flexDirection:'row',
        borderRadius:8,
        alignItems:'center',
    
    },
    input:{
        padding:10,
        fontSize:15,
        flex:7.5
    },
    button:{
        flex:1.5,
        height:45,
        justifyContent:'center',
        alignItems:'center',
    },
    testStyle:{

    }
})