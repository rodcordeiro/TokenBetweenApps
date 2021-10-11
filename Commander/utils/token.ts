import base64 from 'react-native-base64';

export default function Serializer(params: any) {
  const teste = base64.encode(JSON.stringify(params));

  return teste;
}
