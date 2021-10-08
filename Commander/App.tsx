/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
} from 'react-native';

const App = () => {
  const [name, setName] = useState<string>('');
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View>
        <Text style={[styles.title, styles.text]}>Commander APP</Text>
        <Text style={[styles.subtitle, styles.text]}>
          This app renders the information, generates the token and send to
          Listener
        </Text>
      </View>
      <View style={styles.form}>
        <TextInput
          placeholder="Insert your name here."
          value={name}
          onChangeText={setName}
          autoFocus={true}
          style={styles.input}
        />
        <TextInput
          placeholder="Insert your name here."
          value={name}
          onChangeText={setName}
          autoFocus={true}
          style={styles.input}
        />
        <TextInput
          placeholder="Insert your name here."
          value={name}
          onChangeText={setName}
          autoFocus={true}
          style={styles.input}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    color: 'white',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 30,
  },
  subtitle: {
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
  form: {
    height: 180,
    justifyContent: 'space-between',
  },
  input: {
    backgroundColor: '#cdcdcd',
    padding: 10,
    borderRadius: 5,
    color: 'black',
  },
});

export default App;
