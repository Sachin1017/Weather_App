import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Forecast = ({data}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Sunrize</Text>
          <Text style={styles.itemData}>
            {data.forecast.forecastday[0].astro.sunrise}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Wind</Text>
          <Text style={styles.itemData}>{data.current.wind_kph} km/h</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Precipitation</Text>
          <Text style={styles.itemData}>{data.current.precip_mm} mm</Text>
        </View>
      </View>
      <View style={styles.rowContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Sunset</Text>
          <Text style={styles.itemData}>
            {data.forecast.forecastday[0].astro.sunset}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Pressure</Text>
          <Text style={styles.itemData}>{data.current.pressure_mb} mb</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Humidity</Text>
          <Text style={styles.itemData}>{data.current.humidity}%</Text>
        </View>
      </View>
    </View>
  );
};

export default Forecast;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '25%',
    display: 'flex',
    alignItems: 'center',
    gap: 40,
    marginTop: 20,
  },
  rowContainer: {
    width: '90%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    gap: 40,
    // justifyContent: 'space-around',
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 10,
  },
  itemText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '300',
  },
  itemData: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '500',
  },
});
