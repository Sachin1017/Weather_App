import {createContext, useState, useCallback, useMemo} from 'react';
import {debounce} from 'lodash';

export const forecastContext = createContext();

export function ForecastProvider({children}) {
  const [data, setData] = useState();
  const [city, setCity] = useState('Bengaluru');
  const [date, setDate] = useState('');
  const [timeList, setTimeList] = useState();
  const [open, setOpen] = useState(true);

  const DateConverter = useCallback(item => {
    try {
      const dateObj = new Date(item);
      const options = {weekday: 'long', month: 'long', day: 'numeric'};
      const d = dateObj.toLocaleDateString('en-US', options);
      setDate(d);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const getWeather = debounce(async text => {
    if (text !== '') {
      try {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=0a0b7b8b09f74885947110201230506&q=${text}&days=7&aqi=no&alerts=no`,
        );
        const json = await response.json();
        if (response.status === 200) {
          setCity(text);
          setData(json);
          DateConverter(json.location.localtime);
          setTimeList(json.forecast.forecastday[0].hour);
        } else {
          console.log('invalid data');
        }
      } catch (error) {
        console.error(error);
      }
    }
  }, 2000);

  const formattedData = useMemo(() => {
    if (timeList !== undefined) {
      return [
        {
          time: '12 AM',
          temp: timeList[0].temp_c,
        },
        {
          time: '01 AM',
          temp: timeList[1].temp_c,
        },
        {
          time: '02 AM',
          temp: timeList[2].temp_c,
        },
        {
          time: '03 AM',
          temp: timeList[3].temp_c,
        },
        {
          time: '04 AM',
          temp: timeList[4].temp_c,
        },
        {
          time: '05 AM',
          temp: timeList[5].temp_c,
        },
        {
          time: '06 AM',
          temp: timeList[6].temp_c,
        },
        {
          time: '07 AM',
          temp: timeList[7].temp_c,
        },
        {
          time: '08 AM',
          temp: timeList[8].temp_c,
        },
        {
          time: '09 AM',
          temp: timeList[9].temp_c,
        },
        {
          time: '10 Am',
          temp: timeList[10].temp_c,
        },
        {
          time: '11 AM',
          temp: timeList[11].temp_c,
        },
        {
          time: '12 PM',
          temp: timeList[12].temp_c,
        },
        {
          time: '13 PM',
          temp: timeList[13].temp_c,
        },
        {
          time: '14 PM',
          temp: timeList[14].temp_c,
        },
        {
          time: '015 PM',
          temp: timeList[3].temp_c,
        },
        {
          time: '16 Am',
          temp: timeList[15].temp_c,
        },
        {
          time: '17 Am',
          temp: timeList[16].temp_c,
        },
        {
          time: '18 PM',
          temp: timeList[17].temp_c,
        },
        {
          time: '19 PM',
          temp: timeList[18].temp_c,
        },
        {
          time: '20 PM',
          temp: timeList[19].temp_c,
        },
        {
          time: '21 PM',
          temp: timeList[20].temp_c,
        },
        {
          time: '22 PM',
          temp: timeList[21].temp_c,
        },
        {
          time: '23 PM',
          temp: timeList[22].temp_c,
        },
      ];
    }
  }, [timeList]);

  const value = useMemo(() => {
    return {
      getWeather,
      data,
      city,
      date,
      timeList,
      formattedData,
      DateConverter,
      open,
      setOpen,
    };
  }, [
    getWeather,
    data,
    city,
    date,
    timeList,
    formattedData,
    DateConverter,
    open,
    setOpen,
  ]);

  return (
    <forecastContext.Provider value={value}>
      {children}
    </forecastContext.Provider>
  );
}
