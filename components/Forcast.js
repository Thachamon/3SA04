import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Forecast extends React.Component {
    render() {
        return (
            <View>
                <Text style = {styles.Text}>{this.props.main}</Text>
                <Text style = {styles.Text}>{this.props.description}</Text>
                <Text style = {styles.Text}>{this.props.temp}</Text>
                <Text style = {styles.Text}>°C</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Text:{
        fontSize: 30,
        color:	"#622569",
    }
    
}
);
   