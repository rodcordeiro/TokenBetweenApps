import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Serializer from './utils/token';
import base64 from 'react-native-base64';

const App = () => {
  const [name, setName] = useState<string>('');
  const [dog, setDog] = useState<string>('');
  const [cat, setCat] = useState<string>('');
  const handleSubmit = React.useCallback(() => {
    const params = {
      name,
      dog,
      cat,
    };
    const token = Serializer(params),
      info = JSON.parse(base64.decode(token));
    console.log({ ...params, token, info });

    setName('');
    setDog('');
    setCat('');
  }, [cat, dog, name]);
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
          placeholder="Insert your dog name here."
          value={dog}
          onChangeText={setDog}
          style={styles.input}
        />
        <TextInput
          placeholder="Insert your cat name here."
          value={cat}
          onChangeText={setCat}
          style={styles.input}
        />
      </View>
      <TouchableOpacity onPress={handleSubmit} style={styles.buttonContainer}>
        <View style={styles.buttonArea}>
          <Text>Send</Text>
        </View>
      </TouchableOpacity>
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
  buttonContainer: {
    marginTop: 30,
  },
  buttonArea: {
    paddingVertical: 20,
    paddingHorizontal: 40,
    backgroundColor: '#0099ff',
    borderRadius: 7.5,
  },
});

export default App;
