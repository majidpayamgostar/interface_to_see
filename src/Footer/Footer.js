import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Footer extends Component {
    render() {
        return (
            <View style={styles.className}>
                <Text>Footer</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: .15,
        backgroundColor:'yellow',
    }
});