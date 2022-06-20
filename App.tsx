import React from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppLoading from 'expo-app-loading';

import { AppRoutes } from './src/routes';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {
  const [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppRoutes />
    </GestureHandlerRootView>
  );
}

