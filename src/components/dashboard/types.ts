import { ReactNode } from 'react';
import { StyleProp, TextStyle, View, ViewStyle } from 'react-native';

export type TDDashboardComponentProps = {
  style?: TDDashboardComponentStyles;
  props?: {
    onSelectAddProduct: () => void;
  };
};

export type TDDashboardComponentStyles = {
  containerStyle?: StyleProp<ViewStyle>;
  cardContainerStyle?: StyleProp<ViewStyle>;
  cardTitleStyle?: StyleProp<TextStyle>;
  cardValueStyle?: StyleProp<TextStyle>;
  cardSubTitleStyle?: StyleProp<TextStyle>;
  contentWrapper?: StyleProp<ViewStyle>;
  addProductWrapper?: StyleProp<ViewStyle>;
  row?: StyleProp<ViewStyle>;
  addProductTitle?: StyleProp<TextStyle>;
  dashboardCarousel?: StyleProp<ViewStyle>;
  sliderContainerStyle?: StyleProp<ViewStyle>;
  titleSection?: StyleProp<TextStyle>;
  learnSection?: StyleProp<ViewStyle>;
};
