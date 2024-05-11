import React from 'react';

import {View, Text, SafeAreaView, Button} from 'react-native';

function App() {
  
  

  return (
    <SafeAreaView>
      <View>
        <Text>Hello world !</Text>
        <Text>Hello world !</Text>
        <Text>Hello world !</Text>
        <Text>Hello world !</Text>
        {/* eslint-disable-next-line no-alert */}
        <Button title="Press Me" onPress={() => alert('Button pressed!')} />
      </View>
    </SafeAreaView>
  );
}

export default App;
