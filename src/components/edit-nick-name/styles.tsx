import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { TDEditNickNameComponentStyles } from 'term-deposit-component/src/components/edit-nick-name/types';

const useMergeStyles = (style?: TDEditNickNameComponentStyles): TDEditNickNameComponentStyles => {
  const { colors, fonts } = useContext(ThemeContext);

  const defaultStyles: TDEditNickNameComponentStyles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      paddingHorizontal: 24,
    },
    inputNickName: {
      borderWidth: 1,
      borderRadius: 8,
      borderColor: '#333',
      padding: 15,
      marginTop: 15
    },
    contentWrapper: {
      flex: 1,
    },
    subTitle: {
      fontSize: 14,
      color: '#353333',
      marginTop: 15,
      lineHeight: 18
    },
    cardContainerStyle: {
      borderRadius: 20,
      padding: 15,
      marginTop: 20,
      justifyContent: 'space-between',
      borderColor: '#DDD9E4',
      borderWidth: 1,
      height: 90
    },
    cardSelectedStyle: {
      backgroundColor: '#3E2D68',
    },
    cardTitleStyle: {
      fontSize: 16,
      lineHeight: 17,
      color: '#3E2D68',
      fontFamily: fonts.semiBold
    },
    selectedCardTitle: {
      color: '#FFFFFF',
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
      paddingVertical: 20
    },
    cardSubTitleStyle: {
      fontSize: 24,
      lineHeight: 28,
      alignSelf: 'flex-end',
      color: '#3E2D68',
      fontFamily: fonts.semiBold
    },
    selectedCardSubTitle: {
      color: '#FFFFFF',
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
    },
    calculateSection: {
      height: 105,
      marginTop: 20
    },
    potentialEarningBox: {
      backgroundColor: '#F1F0F4',
      borderRadius: 20,
      padding: 15,
      justifyContent: 'space-between',
      flex: 1.3,
      height: 105
    },
    interestRateBox: {
      backgroundColor: '#F1F0F4',
      borderRadius: 20,
      padding: 15,
      marginLeft: 20,
      flex: 1,
      height: 105
    },
    numberValue: {
      fontSize: 16,
      color: '#3E2D68',
      fontFamily: fonts.medium
    },
    interestRateTxt: {
      marginTop: 13
    },
    inputWrapper: {
      marginVertical: 30
    },
    input: {
      marginLeft: 5,
      fontSize: 16,
      color: '#1D1C1D',
      borderWidth: 1,
      borderColor: '#79747E',
      padding: 15,
      borderRadius: 8
    },
    errorTxt: {
      color: '#B3261E',
      marginLeft: 20,
      marginTop: 5,
      fontSize: 12,
      fontFamily: fonts.medium
    },
    tenorSection: {
      marginTop: 20
    },
    listTenor: {
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    tennorBox: {
      marginTop: 18,
      marginRight: 18,
      padding: 15,
      borderRadius: 20,
      backgroundColor: '#F1F0F4',
    },
    tennorValue: {
      fontSize: 16,
      fontFamily: fonts.medium,
      color: '#3E2D68'
    },
    selectedTennorBox: {
      backgroundColor: '#3E2D68'
    },
    selectedTennorValue: {
      color: '#FFFFFF'
    }
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
