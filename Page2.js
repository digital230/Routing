import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

export default class Page2 extends React.Component {
  render() {
    const {navigation} = this.props;


    return (
      <View style={styles.container}>
        <Text>Page 2</Text>
        <TouchableHighlight
          style={{backgroundColor: 'blue'}}
          onPress={() => navigation.navigate('Home')}>
          <Text>To App</Text>
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
    height: 200,
  },
});
