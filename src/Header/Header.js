import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.className}>
                <View style={{flex:1}}>
                    <Image
                        source={require('../image/Winter.jpg')}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={styles.snow}>
                    <View><Text>Snow Mountain</Text></View>
                    <View><Text>Stands at the foot of the mountain , enjoy the most beautiful scenery in the world...</Text></View>
                    <View><Text>kkk</Text></View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: .7,
        backgroundColor: 'green',
    },
    imageStyle: {
        width: 420,
        height: 360,
    },
    snow:{
        flex:.7,
        borderColor:'red',
        borderWidth: 5,
        marginLeft: 50
    }
    
});