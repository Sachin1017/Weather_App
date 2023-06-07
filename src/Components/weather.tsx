/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';

const Weather = ({data}) => {  
  return (
    <View>
      <View
        style={{
          width: '90%',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
          marginTop: 20,
        }}>
        <View style={{alignItems: 'center'}}>
          <Text style={{color: '#FFFFFF', fontSize: 70}}>
            {data.current.temp_c}º
          </Text>
          <Text style={{color: '#FFFFFF', fontSize: 12, fontWeight: '300'}}>
            Feels Like {data.current.feelslike_c}º
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 10,
              gap: 10,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <Image
                style={{
                  tintColor: '#FFFFFF',
                  width: 12,
                  height: 12,
                }}
                source={require('../Images/Icons/down-chevron.png')}
              />
              <Text style={{color: '#FFFFFF', fontSize: 15, fontWeight: '500'}}>
                {data.forecast.forecastday[0].day.mintemp_c}º
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 5,
              }}>
              <Image
                style={{
                  tintColor: '#FFFFFF',
                  width: 12,
                  height: 12,
                }}
                source={require('../Images/Icons/up-arrows.png')}
              />
              <Text style={{color: '#FFFFFF', fontSize: 15, fontWeight: '500'}}>
                {data.forecast.forecastday[0].day.maxtemp_c}º
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Image
            style={{
              width: 120,
              height: 120,
            }}
            source={{uri: `https:${data.current.condition.icon}`}}
          />
        </View>
      </View>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 25,
          color: '#FFFFFF',
          fontWeight: 'bold',
          marginVertical: 25,
        }}>
        {data.current.condition.text}
      </Text>
    </View>
  );
};

export default Weather;
