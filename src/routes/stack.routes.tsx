import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSave } from '../pages/PlantSave';
import { MyPlants } from '../pages/MyPlants';
import { AuthRoutes } from './tab.routes';

const Stack = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="PlantSelect" component={AuthRoutes} />
      <Stack.Screen name="PlantSave" component={PlantSave} />
      <Stack.Screen name="MyPlants" component={AuthRoutes} />
    </Stack.Navigator>
  )

}