/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, FlatList} from 'react-native';
import React, {useCallback, useContext, useState} from 'react';
import Location from '../Components/location';
import {forecastContext} from '../Context/forecastProvider';
import HourTemp from '../Components/hourTemp';
import Forecast from '../Components/forecast';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const MoreInformation = ({navigation}) => {
  const {data, date, formattedData, open, setOpen} =
    useContext(forecastContext);

  // console.log(data);

  const DayConverter = useCallback(item => {
    try {
      const day = new Date(item);
      const weekdayIndex = day.getDay();
      const weekdays = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ];
      const weekday = weekdays[weekdayIndex];
      return weekday;
    } catch (error) {
      console.log(error);
    }
  }, []);

  const weekdata = data.forecast.forecastday.map(x => {
    const d = DayConverter(x.date);
    // console.log(d);
    return {
      day: d,
      icon: x.day.condition.icon,
      temp: x.day.avgtemp_c,
      mintemp: x.day.mintemp_c,
      maxtemp: x.day.maxtemp_c,
    };
  });
  // console.log(weekdata);
  return (
    <LinearGradient
      colors={['#56d6fc', '#0d95fc']}
      style={{
        height: '100%',
        width: '100%',
      }}>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: 20,
        }}
        onPress={() => {
          navigation.goBack();
          setOpen(true);
        }}>
        <Image
          style={{width: 25, height: 25, tintColor: '#FFFFFF'}}
          source={require('../Images/Icons/down-chevron.png')}
        />
      </TouchableOpacity>
      <View style={{marginBottom: 30}}>
        <Location data={data} date={date} open={open} />
      </View>
      <View>
        <HourTemp formattedData={formattedData} />
      </View>
      <View
        style={{
          height: 250,
          width: '95%',
          alignSelf: 'center',
          marginTop: 10,
        }}>
        <FlatList
          data={weekdata}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                alignItems: 'center',
                marginVertical: 25,
              }}>
              <View style={{flex: 1}}>
                <Text style={{color: '#FFFFFF', fontSize: 16}}>{item.day}</Text>
              </View>
              <View style={{}}>
                <Image
                  style={{width: 30, height: 30}}
                  source={{uri: `http:${item.icon}`}}
                />
              </View>
              <View
                style={{
                  width: '20%',
                  justifyContent: 'center',
                  alignItems: 'flex-end',
                }}>
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    fontWeight: '600',
                  }}>
                  {item.temp}º
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                  gap: 5,
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 12, height: 12, tintColor: '#cce9ff'}}
                  source={require('../Images/Icons/down-chevron.png')}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    fontWeight: '400',
                  }}>
                  {item.mintemp}º
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  gap: 5,
                  justifyContent: 'center',
                }}>
                <Image
                  style={{width: 12, height: 12, tintColor: '#cce9ff'}}
                  source={require('../Images/Icons/up-arrows.png')}
                />
                <Text
                  style={{
                    color: '#FFFFFF',
                    fontSize: 15,
                    fontWeight: '400',
                  }}>
                  {item.maxtemp}º
                </Text>
              </View>
            </View>
          )}
        />
      </View>
      <View style={{backgroundColor: '#40acff', flex: 1}}>
        <Forecast data={data} />
      </View>
    </LinearGradient>
  );
};

export default MoreInformation;
