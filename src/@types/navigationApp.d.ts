import { PlantProps } from "../libs/storage";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      UserIdentification: undefined;
      Confirmation: {
        title: string;
        subtitle: string;
        buttonTitle: string;
        icon: 'smile' | 'hug',
        nextScreen: string;
      };
      PlantSelect: undefined;
      PlantSave: {
        plant: PlantProps
      };
      MyPlants: undefined;
    }
  }
}