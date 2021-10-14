import base64 from 'react-native-base64';

export default function Serializer(params: any) {
  const teste = JSON.parse(base64.decode(params));

  return teste;
  // return JSON.parse(base64.decode(params));
}
