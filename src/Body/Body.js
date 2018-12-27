import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Body extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Body</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: .15,
        backgroundColor:'blue',
        // marginLeft: 50,
        // marginBottom: 50
    },

});