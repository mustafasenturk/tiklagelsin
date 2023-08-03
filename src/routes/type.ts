import {
  StackActionType,
  createNavigationContainerRef,
} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export type GenericNavigationProps = {
  setOptions: (options: Partial<unknown>) => void;
  goBack: () => StackActionType;
  navigate: (name: string | Record<string, string>) => void;
};

export const navigate = (name: never) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name);
  }
};

export const goBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};
