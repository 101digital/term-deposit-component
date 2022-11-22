import { defaultsDeep } from 'lodash';
import { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { ThemeContext } from 'react-native-theme-component';
import { TermDepositComponentStyles } from './index';

const useMergeStyles = (style?: TermDepositComponentStyles): TermDepositComponentStyles => {
  const { colors } = useContext(ThemeContext);

  const defaultStyles: TermDepositComponentStyles = StyleSheet.create({
    containerStyle: {
      flex: 1,
    },
  });

  return defaultsDeep(style, defaultStyles);
};

export default useMergeStyles;
