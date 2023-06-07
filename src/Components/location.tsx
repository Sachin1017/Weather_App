/* eslint-disable react-native/no-inline-styles */
import {View, Text} from 'react-native';
import React from 'react';

const Location = ({date, data, open}) => {
  return (
    <View>
      {open && (
        <Text style={{color: '#FFFFFF', textAlign: 'center', marginTop: 5}}>
          {date}
        </Text>
      )}
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 22,
          textAlign: 'center',
          marginTop: 5,
        }}>
        {data.location.name}
      </Text>
      <Text
        style={{
          color: '#FFFFFF',
          fontSize: 12,
          textAlign: 'center',
          marginTop: 5,
        }}>
        {data.location.country}
      </Text>
    </View>
  );
};

export default Location;
