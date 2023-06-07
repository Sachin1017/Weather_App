import {View, Text, FlatList, Image} from 'react-native';
import React from 'react';

const WeekForecastr = ({data, icon}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <Text>{item.date}</Text>
            <Image source={{uri: `http:${icon}`}} />
          </View>
        )}
      />
    </View>
  );
};

export default WeekForecastr;
