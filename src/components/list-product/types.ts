import { ReactNode } from 'react';
import { ImageStyle, StyleProp, TextStyle, View, ViewStyle } from 'react-native';

export type TDListProductComponentProps = {
  style?: TDListProductComponentStyles;
  props?: {
    onSelectProduct: (value: string) => void;
  };
};

export type TDListProductComponentStyles = {
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
  pageTitle?: StyleProp<TextStyle>;
  productContainer?: StyleProp<ViewStyle>;
  icon?: StyleProp<ImageStyle>;
};
