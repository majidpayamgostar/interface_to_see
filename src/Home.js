import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";

export default class Home extends Component {
    render() {
        return (
            <View style={styles.HomeStyle}>
                <Header/>
                <Body/>
                <Footer/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    HomeStyle: {
        flex: 1,
        backgroundColor:'red',
    }
});