import * as React from 'react';
import StackRoute from './src/routes/stack/index.js';
import { NavigationContainer } from '@react-navigation/native';
// import Home from './src/pages/home';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoute/>
    </NavigationContainer>
  );
}
