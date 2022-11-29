import { ReactNode } from 'react';
import { ImageStyle, StyleProp, TextStyle, View, ViewStyle } from 'react-native';

export type TDSelectAccountComponentProps = {
  style?: TDSelectAccountComponentStyles;
  props?: {
    onConfirmed: () => void;
  };
};

export type TDSelectAccountComponentStyles = {
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
  potentialEarningBox?: StyleProp<ViewStyle>;
  interestRateBox?: StyleProp<ViewStyle>;
  calculateSection?: StyleProp<ViewStyle>;
  numberValue?: StyleProp<TextStyle>;
  interestRateTxt?: StyleProp<TextStyle>;
  inputWrapper?: StyleProp<ViewStyle>;
  input?: StyleProp<ViewStyle>;
  errorTxt?: StyleProp<TextStyle>;
  tennorBox?: StyleProp<ViewStyle>;
  listTenor?: StyleProp<ViewStyle>;
  tenorSection?: StyleProp<ViewStyle>;
  selectedTennorBox?: StyleProp<ViewStyle>;
  cardSelectedStyle?: StyleProp<ViewStyle>;
  selectedTennorValue?: StyleProp<TextStyle>;
  tennorValue?: StyleProp<TextStyle>;
  subTitle?: StyleProp<TextStyle>;
  selectedCardSubTitle?: StyleProp<TextStyle>;
  selectedCardTitle?: StyleProp<TextStyle>;
};
