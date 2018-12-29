import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Body extends Component {
    render() {
        return (
            <View style={styles.className}>
                <View style={styles.bodyWhite}>
                    <View style={styles.header}>
                        <View>
                            <Image
                                source={require('../image/hamburger2.jpeg')}
                                style={styles.profileImage}
                            />
                        </View>
                        <View>
                            <Text>FantasyU</Text>
                        </View>
                        <View>
                            <Text>- 1 Hour Ago</Text>
                        </View>
                        <View>
                            <Text>...</Text>
                        </View>
                    </View>
                    <View></View>
                    <View></View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: .3,
        backgroundColor: 'blue',
        
    },
    bodyWhite: {
        backgroundColor: 'white',
        flex: 1,
        marginLeft: 50,
        marginTop: 20,
        borderRadius: 3,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'green',
        alignItems: 'center'
    },
    profileImage: {
        width: 25,
        height: 25,
        borderRadius: 5
    }
    
});