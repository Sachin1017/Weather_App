import React from 'react';
import StackNavigator from './src/Navigation';
import {ForecastProvider} from './src/Context/forecastProvider';

const App = () => {
  return (
    <ForecastProvider>
      <StackNavigator />
    </ForecastProvider>
  );
};
export default App;
