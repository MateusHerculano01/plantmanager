import { PlantProps } from "../libs/storage";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: undefined;
      UserIdentification: undefined;
      Confirmation: undefined;
      PlantSelect: undefined;
      PlantSave: {
        plant: PlantProps
      };
    }
  }
}