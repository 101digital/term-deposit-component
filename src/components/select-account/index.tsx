import React, {useEffect, useRef, useState} from 'react';
import { Text, TouchableOpacity, View, NativeSyntheticEvent, TextInputKeyPressEventData, TextInput } from 'react-native';
import { Button, useCurrencyFormat } from 'react-native-theme-component';
import useMergeStyles from './styles';
import { TDSelectAccountComponentProps, TDSelectAccountComponentStyles } from './types';

type Account = {
  id: number;
  title: string;
  subtitle: string;
}

const listAccount: Account[] = [
  { id: 0, title: 'UD Main Bank Account *6789', subtitle: '₱ 100,100,150.74'},
];


const TDSelectAccountComponent = ({ style, props }: TDSelectAccountComponentProps) => {
  const styles: TDSelectAccountComponentStyles = useMergeStyles(style);
  const { onConfirmed } = props || {};
  const [selectedId, setSelectedId] = useState<number>();

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.pageTitle}>{'Select Account'}</Text>
      <Text style={styles.subTitle}>Your account will automatically be debited your investment amount. Good news! Your investment will be automatically credited upon maturity.</Text>
      <View style={styles.contentWrapper}>
        {listAccount.map((a) => <TouchableOpacity onPress={() => setSelectedId(a.id)} style={[styles.cardContainerStyle, selectedId === a.id && styles.cardSelectedStyle]}>
            <Text style={[styles.cardTitleStyle,selectedId === a.id && styles.selectedCardTitle]}>{a.title}</Text>
            <Text style={[styles.cardSubTitleStyle, selectedId === a.id && styles.selectedCardSubTitle]}>{a.subtitle}</Text>
          </TouchableOpacity>)}
      </View>
    <Button label='Next' onPress={onConfirmed}/>
    </View>
  );
};

export default TDSelectAccountComponent;
