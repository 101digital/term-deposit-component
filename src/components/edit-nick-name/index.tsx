import React, {useEffect, useRef, useState} from 'react';
import { Text, TouchableOpacity, View, NativeSyntheticEvent, TextInputKeyPressEventData, TextInput } from 'react-native';
import { Button, CheckBox, InputField, useCurrencyFormat } from 'react-native-theme-component';
import useMergeStyles from 'term-deposit-component/src/components/edit-nick-name/styles';
import { TDEditNickNameComponentProps, TDEditNickNameComponentStyles } from 'term-deposit-component/src/components/edit-nick-name/types';


const TDEditNickNameComponent = ({ style, props }: TDEditNickNameComponentProps) => {
  const styles: TDEditNickNameComponentStyles = useMergeStyles(style);
  const { onConfirmed } = props || {};
  const [isAlphabetValid, setIsAlphabetValid] = useState<boolean>(false);
  const [isCharacterValid, setIsCharacterValid] = useState<boolean>(false);
  const [nickName, setNickName] = useState<string>();

  useEffect(() => {
    if(nickName) {
      console.warn('nickName.toLowerCase() !== nickName.toUpperCase()', nickName.toLowerCase() !== nickName.toUpperCase())
      setIsAlphabetValid(nickName.toLowerCase() !== nickName.toUpperCase());
      setIsCharacterValid(nickName.length > 0 && nickName.length <= 21)
    }
  }, []);

  return (
    <View style={styles.containerStyle}>
      <Text style={styles.pageTitle}>{'Edit Nickname'}</Text>
      <View style={styles.contentWrapper}>  
        <TextInput value={nickName} onChangeText={(txt) => setNickName(txt)} style={styles.inputNickName} placeholder={'Time Deposit Nickname'}/>
        <CheckBox  style={{containerStyle: {marginTop: 30}}} title={'Must only be alphabetic characters'} isSelected={isAlphabetValid} onChanged={()=> true} />
        <CheckBox style={{containerStyle: {marginTop: 12}}} title={'Must be 1-20 characters'} isSelected={isCharacterValid} onChanged={() => true} 
        />
      </View>
      <Button label='Save' onPress={onConfirmed}/>
    </View>
  );
};

export default TDEditNickNameComponent;
