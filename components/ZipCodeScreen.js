import React from 'react';
import { StyleSheet, FlatList, View, Text,TouchableHighlight } from 'react-native';

    const availableZipItems = [
     { place: 'Hatyai', code: '90110' },
     { place: 'Trang', code: '92000' },
     { place: 'Chiangmai', code: '50000' },
     { place: 'Khonkaen', code: '40000' },
     { place: 'Chonburi', code: '20000' },
     { place: 'Ayutthaya', code: '14000' },
     { place: 'Prachuap Khiri Khan', code: '77000' },
    ]
    const ZipItem = ({place, code, navigate}) => (
        <TouchableHighlight onPress={() => navigate('Weather', { zipCode: code })}>
            <View style={styles.zipItem}>
                <Text style={styles.zipPlace}>{place}</Text>
                <Text style={styles.zipCode}>{code}</Text>
            </View>
        </TouchableHighlight>
     )

     const _keyExtractor = item => item.code

     export default class ZipCodeScreen extends React.Component {
        static navigationOptions = ({ navigation }) => {
            return {
                headerTitle: (<Text style={styles.HeaderTitle} >Choose a zip code</Text>),
            }
        }

        render() {
            const { navigate } = this.props.navigation;
            return (
            <View>
                
                <FlatList
                    data={availableZipItems}
                    keyExtractor={_keyExtractor}
                    renderItem={({ item }) => <ZipItem {...item} navigate={navigate} />}
                />
            </View>
            );
        }
    }

    const styles = StyleSheet.create({
        zipItem: {
            backgroundColor: '#667292',
            borderRadius: 10,
            marginTop:20,
            marginLeft: 80,
            marginRight:80,
            padding: 10  
        },
        zipPlace: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 25,
            color:'#FFFFFF'
        },
        zipCode: {
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 25,
            color:'#FFFFFF'
        },
        HeaderTitle: {
            width: '100%',
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#667292',
        },
    })