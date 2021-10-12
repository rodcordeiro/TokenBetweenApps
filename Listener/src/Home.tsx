import React, { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from './Routes';

import { View, Text } from 'react-native';

import Serializer from './utils/token';
const Home = () => {
  const { params } = useRoute<RouteProp<RootStackParamList, 'Home'>>();
  const [name, setName] = useState<string>('Rod');
  const [dog, setDog] = useState<string>('Fred');
  const [cat, setCat] = useState<string>('Miau');

  useEffect(() => {
    if (params) {
      const information = Serializer(params);
      console.log({ params, information });
    }
  }, [params]);
  return (
    <View>
      <Text>OOi</Text>
      <Text>{name}</Text>
      <Text>{dog}</Text>
      <Text>{cat}</Text>
    </View>
  );
};

export default Home;
