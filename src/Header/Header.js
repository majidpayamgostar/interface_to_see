import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.className}>
                <View style={{flex: 1}}>
                    <Image
                        source={require('../image/Winter.jpg')}
                        style={styles.imageStyle}
                    />
                </View>
                <View style={styles.snow}>
                    <View>
                        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>Snow Mountain</Text>
                    </View>
                    <View>
                        <Text style={{color: 'white'}}>Stands at the foot of the mountain , enjoy the most beautiful
                            scenery in the
                            world...</Text>
                    </View>
                    <View style={styles.starStyle}>
                        <View style={{flexDirection: 'row'}}>
                            <Image
                                source={require('../image/star.png')}
                                style={styles.imageStarStyle}
                            />
                            <Image
                                source={require('../image/star.png')}
                                style={styles.imageStarStyle}
                            />
                            <Image
                                source={require('../image/star.png')}
                                style={styles.imageStarStyle}
                            />
                            <Image
                                source={require('../image/star.png')}
                                style={styles.imageStarStyle}
                            />
                            <Image
                                source={require('../image/star-grey-hi.png')}
                                style={[styles.imageStarStyle, {width: 16, height: 16}]}
                            />
                        </View>
                        <View style={styles.locationButton}>
                            <Image
                                source={require('../image/flags.png')}
                                style={[styles.imageStarStyle, {width: 16, height: 16}]}
                            />
                            <Text style={{color:'white',fontSize:12}}>London</Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    className: {
        flex: .7,
    },
    imageStyle: {
        width: 420,
        height: 373,
    },
    snow: {
        flex: .7,
        backgroundColor: 'rgba(156, 169, 186, .6)',
        marginLeft: 50,
        justifyContent: 'space-evenly',
        paddingLeft: 20,
    },
    starStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        
    },
    imageStarStyle: {
        marginLeft: 4,
    },
    locationButton: {
        marginRight: 30,
        flexDirection:'row',
        backgroundColor:'#69698c',
        padding: 5,
        borderRadius:3,
        alignItems:'center',
    },
    
});