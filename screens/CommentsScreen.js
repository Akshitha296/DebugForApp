import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput, FlatList,TouchableOpacity, Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../config'

export default class Comment extends React.Component{
    render(){
        return(
            <View>
                <TextInput
                    placeholder = "No comments yet, type here to add one!"
                />
            </View>
        )
    }
}