import base64 from 'react-native-base64';

export default function Serializer(params: any) {
  return JSON.parse(base64.decode(params));
}
