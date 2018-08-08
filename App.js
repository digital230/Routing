import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class App extends React.Component {
  render() {
    const {navigation} = this.props;

    return (
      <View style={styles.container}>
        <Text>App</Text>

        <TouchableHighlight
          style={{backgroundColor: 'blue'}}
          onPress={() => navigation.navigate('Page1')}>
          <Text>To page 1</Text>
        </TouchableHighlight>
        <TouchableHighlight
          style={{backgroundColor: 'blue'}}
          onPress={() => navigation.navigate('Page2')}>
          <Text>To page 2</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 50,
  },
});
