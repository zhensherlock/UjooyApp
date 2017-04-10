/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry
    , StyleSheet
    , Text
    , View
    , TouchableOpacity
} from 'react-native';

import SocketIOClient from 'socket.io-client';

export default class UjooyApp extends Component {
    constructor(props) {
        super(props);
        this.socket = SocketIOClient('http://192.168.0.109:3000', {jsonp: false});

        this.sendMessage = this.sendMessage.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
              <Text style={styles.welcome}>
                Welcome to React Native!
              </Text>
              <Text style={styles.instructions}>
                To get started, edit index.ios.js
              </Text>
              <Text style={styles.instructions}>
                Press Cmd+R to reload,{'\n'}
                Cmd+D or shake for dev menu
              </Text>
              <TouchableOpacity onPress={this.sendMessage}>
                <Text>Button</Text>
              </TouchableOpacity>
            </View>
        );
    }

    sendMessage() {
        this.socket.emit('write', 'client-hello');
        // let ws = new WebSocket('ws://192.168.0.109:3000');
        // ws.onopen = () => {
        //     // connection opened
        //
        //     ws.send('something'); // send a message
        // };
        //
        // ws.onerror = (e) => {
        //     // an error occurred
        //     console.log(e.message);
        // };
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('UjooyApp', () => UjooyApp);

