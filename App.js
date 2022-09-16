import * as React from 'react';
import StackRoute from './src/routes/stack/index.js';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <StackRoute/>
    </NavigationContainer>
  );
}
