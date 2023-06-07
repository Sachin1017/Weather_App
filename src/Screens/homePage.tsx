/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, Image, ActivityIndicator} from 'react-native';
import React, {useEffect, useContext} from 'react';
import {forecastContext} from '../Context/forecastProvider';
import Location from '../Components/location';
import Weather from '../Components/weather';
import HourTemp from '../Components/hourTemp';
import Forecast from '../Components/forecast';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const HomePage = ({navigation}) => {
  const {
    data,
    city,
    getWeather,
    date,
    DateConverter,
    formattedData,
    open,
    setOpen,
  } = useContext(forecastContext);

  const currentDate = new Date();

  useEffect(() => {
    getWeather(city);
    DateConverter(currentDate);
  }, []);

  return (
    <View
      style={{
        height: '100%',
        width: '100%',
      }}>
      {data ? (
        <LinearGradient
          colors={['#56d6fc', '#0d95fc']}
          style={{
            height: '100%',
            width: '100%',
            // backgroundColor: '#369eff',
          }}>
          <View
            style={{
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              alignSelf: 'center',
              marginVertical: 25,
            }}>
            <View
              style={{
                backgroundColor: '#9dcefa',
                paddingHorizontal: 10,
                width: '90%',
                height: 40,
                borderRadius: 20,
              }}>
              <TextInput
                placeholder="Search city"
                style={{
                  width: '100%',
                  color: '#FFFFFF',
                }}
                onChangeText={i => getWeather(i)}
              />
            </View>
            <Text style={{color: '#FFFFFF', fontSize: 20}}>ºC</Text>
          </View>
          <Location data={data} date={date} open={open} />
          <Weather data={data} />
          <HourTemp formattedData={formattedData} />
          <Forecast data={data} />
          <View
            style={{
              width: '100%',
            }}>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => {
                navigation.navigate('MoreInformation');
                setOpen(false);
              }}>
              <Image
                style={{width: 25, height: 25, tintColor: '#FFFFFF'}}
                source={require('../Images/Icons/up-arrows.png')}
              />
            </TouchableOpacity>
          </View>
        </LinearGradient>
      ) : (
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator size="large" />
          <Text>Loading</Text>
        </View>
      )}
    </View>
  );
};

export default HomePage;
