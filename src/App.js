import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

import ListItem from './components/List';

export default class App extends Component {

    state = {
        placename: '',
        place: []
    };

    placenamehandler = value => {
        this.setState({
            placename: value
        });
    };

    placesubhandler = () => {
        if (this.state.placename.trim() === "") {
           return; 
        }

        this.setState( prevState => {
            return {
                place: prevState.place.concat(prevState.placename)
            };
        });
    };
    render() {
        const placeout = this.state.place.map((places, i) => (
           <ListItem key={i} placenam={places}/>
        ));
        return (
            <View style={Styles.container}>
            <View style={Styles.inputbox}>
            <TextInput 
               onChangeText={this.placenamehandler}
               placeholder={'textinput'}
               style={Styles.text}
               value={this.state.placename}>
               </TextInput>
               <Button title='place' onPress={this.placesubhandler} />
            </View>
           <View style={Styles.textbox}>
            {placeout}
           </View>
            </View>
        );
    }
}
const Styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffff',
        flex: 1,
        alignItems: 'center',
    },
    inputbox: {
        width: "90%",
        flexDirection: 'row',
        justifyContent: 'center'
    },
    text: {
        color: '#000',
        width: 300,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#000',
        borderWidth: 5,

    },
    textbox: {
        width: '100%'
    }
    
});