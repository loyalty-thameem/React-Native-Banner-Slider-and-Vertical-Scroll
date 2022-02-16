import React, { Component } from "react";
import { View, Text, Button,Icon, Image,ScrollView,StyleSheet,Dimensions,SafeAreaView } from 'react-native';


const{width,height}=Dimensions.get('window')


class Category2 extends Component {
    render() {
        return (
                                <SafeAreaView style={{ flex:2}}>
                                <View>
                                <Text style={{ fontSize: 24, fontWeight: '700',marginLeft:20, marginBottom: 10  }}>
                                    Introducing Airbnb Plus
                                </Text>
                                </View>

            <View style={{ marginTop: 4, paddingHorizontal: 20 }}>
                                
                                <Text style={{ fontWeight: '100', marginTop: 1 }}>
                                   {this.props.name}

                                </Text>
                                <View style={{ width: width - 40, height: 100, marginTop: 2 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={this.props.imageUri}
                                    />

                                </View>
                                </View>
                            </SafeAreaView>
        );
    }
}
export default Category2;
