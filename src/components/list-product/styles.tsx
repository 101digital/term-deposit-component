import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { TDListProductComponentStyles } from './types';

const useMergeStyles = (style?: TDListProductComponentStyles): TDListProductComponentStyles => {
  const { colors, fonts } = useContext(ThemeContext);

  const defaultStyles: TDListProductComponentStyles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      paddingHorizontal: 24,
    },
    cardContainerStyle: {
      borderRadius: 20,
      padding: 15,
      backgroundColor: '#3E2D68',
      marginTop: -60,
      alignItems: 'center',
      flexDirection: 'column'
    },
    cardTitleStyle: {
      color: '#3E2D68',
      fontSize: 16,
      lineHeight: 17
    },
    pageTitle: {
      fontSize: 24,
      fontFamily: fonts.semiBold,
      color: '#3E2D68',
      marginTop: 24
    },
    cardValueStyle: {
      color: '#FFFFFF',
      fontSize: 20,
      lineHeight: 17,
      paddingVertical: 20,
      fontFamily: fonts.semiBold
    },
    cardSubTitleStyle: {
      color: '#020000',
      fontSize: 12,
      lineHeight: 17
    },
    addProductWrapper: {
      marginTop: 20,
      paddingVertical: 10,
      borderWidth: 1,
      borderColor: '#DDD9E4',
      borderRadius: 20,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    addProductTitle: {
      color: '#3E2D68',
      fontSize: 14,
      lineHeight: 18,
      fontFamily: fonts.medium,
      marginLeft: 5
    },
    titleSection: { 
      fontSize: 16,
      fontFamily: fonts.medium
    },
    learnSection: {
      marginTop: 30
    },
    sliderContainerStyle: {
      flex: 1,
      alignItems: 'center',
      minHeight: 500,
    },
    dashboardCarousel: {
      marginTop: 20,
    },
    productContainer: {
      backgroundColor: '#F1F0F4',
      padding: 16,
      borderRadius: 20,
      marginTop: 25
    },
    icon: {
      width: 60,
      height: 60
    }
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
