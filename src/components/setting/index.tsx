import React, {useEffect, useRef, useState} from 'react';
import { Text, TouchableOpacity, View, NativeSyntheticEvent, TextInputKeyPressEventData, TextInput } from 'react-native';
import { Button, useCurrencyFormat } from 'react-native-theme-component';
import useMergeStyles from './styles';
import { TDSettingComponentProps, TDSettingComponentStyles } from './types';

type ProductTD = {
  id: number;
  title: string;
  value: number;
}

const listTennor: ProductTD[] = [
  { id: 0, title: '30 days', value: 30},
  { id: 1, title: '60 days', value: 60},
  { id: 2, title: '90 days', value: 90},
  { id: 3, title: '180 days', value: 180},
  { id: 4, title: '1 year', value: 365},
];


const TDSettingComponent = ({ style, props }: TDSettingComponentProps) => {
  const styles: TDSettingComponentStyles = useMergeStyles(style);
  const formikRef: any = useRef(null);
  const [transferValue, setTransferValue] = useState<number>(0);
  const [error, setError] = useState<string>();
  const [isEdited, setIsEdited] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<number>();
  const transferValueFormated =
    transferValue > 0 ? useCurrencyFormat(transferValue, '', '') : '';

  const onInputValue = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>
  ) => {
    setIsEdited(true);
    if (e.nativeEvent.key !== 'Backspace') {
      setTransferValue(parseInt(`${transferValue || ''}${e.nativeEvent.key}`));
    } else {
      setTransferValue(parseInt(`${transferValue || ''}`.slice(0, -1)));
    }
  };

  useEffect(() => {
    if(isEdited) {
      if(!transferValue || transferValue < 10000) {
        setError('Invest a minimum of ₱ 10,000');
      } else {
        setError(undefined)
      }
    }
  }, [transferValue]);
  
  const {onConfirmed} = props || {};


  return (
    <View style={styles.containerStyle}>
    <Text style={styles.pageTitle}>{'Calculate your earnings!'}</Text>
    <View style={styles.contentWrapper}>
      <View style={[styles.row, styles.calculateSection]}>
        <View style={styles.potentialEarningBox}>
          <Text style={styles.cardTitleStyle}>Potential Earnings</Text>
          <Text style={styles.numberValue}>₱ 56,250.00</Text>
          <Text style={styles.cardSubTitleStyle}>*Before taxes</Text>
        </View>
        <View style={styles.interestRateBox}>
          <Text style={styles.cardTitleStyle}>Interest Rate</Text>
          <Text style={[styles.interestRateTxt, styles.numberValue]}>4.50 %</Text>
          <View />
        </View>
      </View>
      <View style={styles.inputWrapper}>
      <TextInput
        value={transferValueFormated}
        onKeyPress={onInputValue}
        style={styles.input}
        placeholder="Placement Amount (min. of ₱ 10,000.00)   "
        keyboardType="numeric"
      />
      <Text style={styles.errorTxt}>{error}</Text>
      </View>

      <View style={styles.tenorSection}>
        <Text>
         How long do we grow your money?
        </Text>
        <View style={styles.listTenor}>
          {listTennor.map((t) => <TouchableOpacity onPress={() => setSelectedId(t.id)} style={[styles.tennorBox, selectedId === t.id && styles.selectedTennorBox]}>
              <Text style={[styles.tennorValue,  selectedId === t.id && styles.selectedTennorValue]}>{t.title}</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
    <Button label='Do it!' onPress={onConfirmed}/>
    </View>
  );
};

export default TDSettingComponent;
