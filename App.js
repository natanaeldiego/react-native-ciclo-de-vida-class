/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

export default class App extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {date: new Date(), loading: true};
  }

  componentDidMount() {
    this._isMounted = true;
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({loading: false});
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    this._isMounted = false;
  }

  tick() {
    if (this._isMounted) {
      this.setState({
        date: new Date(),
      });
    }
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator />;
    }
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Horário certo</Text>
        <Text>{this.state.date.toLocaleTimeString()}</Text>
      </View>
    );
  }
}
