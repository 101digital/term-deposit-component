import React, {useState} from 'react';
import { Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { Button, CheckBox } from 'react-native-theme-component';
import { EditIcon } from 'react-native-theme-component/src/assets';
import { CalendarIcon } from '../../assets';
import useMergeStyles from './styles';
import { TDReviewApplicationComponentProps, TDReviewApplicationComponentStyles } from './types';

type Account = {
  id: number;
  title: string;
  subtitle: string;
}

const listAccount: Account[] = [
  { id: 0, title: 'UD Main Bank Account *6789', subtitle: '₱ 100,100,150.74'},
];


const TDReviewApplicationComponent = ({ style, props }: TDReviewApplicationComponentProps) => {
  const styles: TDReviewApplicationComponentStyles = useMergeStyles(style);
  const { onConfirmed, onEditNickName, onEditPeriod } = props || {};
  const [selectedId, setSelectedId] = useState<number>();
  const [isAcceptedTC, setIsAcceptedTC] = useState(false);

  const onViewTC = () => {

  }
  return (
    <View style={styles.containerStyle}>

<ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.pageTitle}>{'Review your earnings!'}</Text>
      <View style={styles.contentWrapper}>
        <View style={styles.payoutBox}>
          <Text style={styles.cardTitleStyle}>Payout at maturity</Text>
          <Text style={styles.cardSubTitleStyle}>₱ 5,045,000.00</Text>
        </View>
        <View style={styles.infoBox}>
          <View style={styles.infoHeader}>
            <View style={styles.infoAmountSection}>
              <Text style={styles.cardTitleStyle}>Placement Amount</Text>
              <Text style={styles.cardSubTitleStyleSmall}>₱ 5,000,000.00</Text>
            </View>
            <View style={styles.infoPeriodSection}>
              <Text style={styles.cardTitleStyle}>Deposit time period</Text>
              <View style={styles.rowBetween}>
                <Text style={styles.cardSubTitleStyleSmall}>90 days</Text>
                <TouchableOpacity onPress={onEditPeriod}>
                  <EditIcon size={20}/>
                </TouchableOpacity>
              </View>
              
            </View>
          </View>
          <View style={styles.cardContent}>
            <View style={styles.rowInfo}>
              <Text>Nickname</Text>
              <View style={styles.row}>
                <Text>UD Time Deposit 1</Text>
                <TouchableOpacity style={styles.editIcon} onPress={onEditNickName}>
                  <EditIcon size={20}/>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rowInfo}>
              <Text>Interest Rate</Text>
                <Text>4.50%</Text>
            </View>
            <View style={styles.rowInfo}>
              <Text>Potential Earnings</Text>
                <Text>₱ 56,250.00</Text>
            </View>
            <View style={styles.rowInfo}>
              <Text>Withholding Tax</Text>
              <Text>20%</Text>
            </View>
            <View style={styles.rowInfo}>
              <Text>Maturity Date</Text>
              <Text>Sep 21, 2023 / Thursday</Text>
            </View>
            <View style={[styles.rowInfo, {alignItems: 'flex-start'}]}>
              <Text>Debit from / credit to</Text>
              <Text style={{textAlign: 'right'}}>{`UD Main Bank Account\n*6789`}</Text>
            </View>
          </View>
        </View>
        <View style={styles.maturityDates}>
          <View style={[styles.row, {alignItems: 'flex-start'}]}>
            <CalendarIcon size={15} />
            <Text style={styles.maturityDatesLabel}>Maturity dates: When Maturity date falls under a public holiday or a weekend, it will be processed on the next banking day.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    <View>
      <View style={styles.tcRow}>
        <CheckBox style={{
          titleStyle: {
            flex: 0
          }
        }} title='I agree to the Time Deposit’s' isSelected={isAcceptedTC} onChanged={()=> setIsAcceptedTC(!isAcceptedTC)}/>
        <TouchableOpacity onPress={onViewTC}>
        <Text style={styles.tcLabel}>Terms & Conditions</Text>
          </TouchableOpacity>
      </View>
    <Button label='Next' onPress={onConfirmed}/>
    </View>
    </View>
  );
};

export default TDReviewApplicationComponent;
