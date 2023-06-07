/* eslint-disable react-native/no-inline-styles */
import {View, Image} from 'react-native';
import React from 'react';

const WelocomePage = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Home');
  }, 2000);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
      }}>
      <View
        style={{
          width: '100%',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 120, height: 120}}
          source={require('../Images/Logos/weather-app.png')}
        />
      </View>
      <View>
        <Image
          style={{
            width: 100,
            height: 80,
            alignSelf: 'center',
          }}
          source={require('../Images/Logos/Weatherapi.png')}
        />
      </View>
    </View>
  );
};

export default WelocomePage;
