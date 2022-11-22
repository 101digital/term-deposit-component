import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { TDDashboardComponentStyles } from './types';

const useMergeStyles = (style?: TDDashboardComponentStyles): TDDashboardComponentStyles => {
  const { colors, fonts } = useContext(ThemeContext);

  const defaultStyles: TDDashboardComponentStyles = StyleSheet.create({
    containerStyle: {
      flex: 1,
      paddingHorizontal: 24,
    },
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
