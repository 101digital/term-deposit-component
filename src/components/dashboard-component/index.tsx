import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleProp, Text, View, ViewStyle } from 'react-native';
import useMergeStyles from './styles';
import { TDDashboardComponentProps, TDDashboardComponentStyles } from './types';

const TDDashboardComponent = ({ style }: TDDashboardComponentProps) => {
  const styles: TDDashboardComponentStyles = useMergeStyles(style);

  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  );
};

export default TDDashboardComponent;
