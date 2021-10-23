import React, {useEffect} from 'react';
// import package here
import DeviceNumber from 'react-native-device-number';
import Title from './Title';

export default function ReactNativeDeviceNumber() {
  useEffect(() => {
    // call this one wherever you want...::::::::::
    DeviceNumber.get().then(res => {
      console.log(res);
    });
  }, []);
  return <Title title="React Native Device Numbers" />;
}
