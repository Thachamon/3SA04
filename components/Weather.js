import React from 'react';
import { StyleSheet, Text, View, ImageBackground  } from 'react-native';
import Forecast from './Forcast'

export default class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            forecast: {
            main: '-', description: '-', temp: 0
            }
        }
    }
       
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/bg3.png')} style={styles.backdrop}>
                    <Text>Zip code is {this.props.zipCode}.</Text>
                    <Forecast {...this.state.forecast} />
                </ImageBackground>
            </View>
        );
    }      
}

const styles = StyleSheet.create({
    container: { paddingTop: 25 },
    backdrop: {
        width: "100%", 
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        justifyContent:"center",
    }
});
