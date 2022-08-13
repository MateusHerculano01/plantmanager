import React, { useEffect } from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import AppLoading from 'expo-app-loading';
import * as Notifications from 'expo-notifications';

import { AppRoutes } from './src/routes';
import { PlantProps } from './src/libs/storage';

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

  useEffect(() => {
    // escutar as notificações
    // const subscription = Notifications.addNotificationReceivedListener(
    //   async (notification) => {
    //     const data = notification.request.content.data.plant as PlantProps;
    //   }
    // )

    // return () => subscription.remove();

    // async function notifications() {    
    //   await Notifications.cancelAllScheduledNotificationsAsync();      

    //   const data = await Notifications.getAllScheduledNotificationsAsync();
    //   console.log("######## NOTIFICAÇÕES AGENDAS ########")
    //   console.log(data);
    // }

    // notifications();
  }, [])

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppRoutes />
    </GestureHandlerRootView>
  );
}

