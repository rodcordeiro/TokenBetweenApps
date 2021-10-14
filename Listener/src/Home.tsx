import React, { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './Routes';

import { View, Text, StyleSheet } from 'react-native';

import Serializer from './utils/token';
const Home = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Home'>>();
  const [name, setName] = useState<string>('Rod');
  const [dog, setDog] = useState<string>('Fred');
  const [cat, setCat] = useState<string>('Miau');
  const [accessToken, setAccessToken] = useState<string>('');
  const [hasToken, setHasToken] = useState<boolean>(false);
  useEffect(() => {
    if (params) {
      const { parametros } = params;
      const information = Serializer(parametros);
      if (information.cat) {
        setCat(information.cat);
      }
      if (information.dog) {
        setDog(information.dog);
      }
      if (information.name) {
        setName(information.name);
      }
      if (information.accessToken) {
        setAccessToken(information.accessToken);
        setHasToken(true);
      }
      if (information.role === 'master') {
        styles.modal.borderColor = '#93f';
      }
      console.log({ params, information });
    } else {
      console.log('no params found');
    }
  }, [params]);
  return (
    <View>
      <Text style={styles.labels}>{name}</Text>
      <Text style={styles.labels}>{dog}</Text>
      <Text style={styles.labels}>{cat}</Text>

      {hasToken && (
        <View style={styles.modal}>
          <Text style={styles.labels}>Access token: {accessToken}</Text>
        </View>
      )}
    </View>
  );
};

let styles = StyleSheet.create({
  container: {},
  labels: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  modal: {
    marginTop: 50,
    padding: 20,
    borderColor: '#09f',
    borderWidth: 5,
    borderStyle: 'solid',
  },
});
export default Home;
