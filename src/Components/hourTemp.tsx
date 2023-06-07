/* eslint-disable react-native/no-inline-styles */
import {View, Text, FlatList} from 'react-native';
import React from 'react';

const HourTemp = ({formattedData}) => {
  return (
    <View
      style={{
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: '#d8e4eb',
        borderTopWidth: 1,
        borderTopColor: '#abcad9',
        justifyContent: 'flex-start',
      }}>
      <FlatList
        data={formattedData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
          <View
            style={{
              width: 70,
              justifyContent: 'center',
              gap: 5,
              overflow: 'scroll',
            }}>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 12,
                fontWeight: '300',
                textAlign: 'center',
              }}>
              {item.time}
            </Text>
            <Text
              style={{
                color: '#FFFFFF',
                fontSize: 20,
                textAlign: 'center',
              }}>
              {item.temp}º
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default HourTemp;
