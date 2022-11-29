import React from 'react';
import { Image, Text, TouchableOpacity, View, ImageSourcePropType } from 'react-native';
import { images } from '../../assets';
import useMergeStyles from './styles';
import { TDListProductComponentProps, TDListProductComponentStyles } from './types';

type ProductTD = {
  value: string;
  icon: ImageSourcePropType;
  title: string;
  subTitle: string;
}

const listProductTD: ProductTD[] = [
  { value: '01', icon: images.product_01, title: 'UD Time Deposit', subTitle: 'Wait longer, earn higher! The longer you keep your funds in your time deposit account, the higher your money earns! Get up to 4.75% annual interest paid monthly.' },
  { value: '02', icon: images.product_02, title: 'UD Bank Account', subTitle: 'Save and earn everyday! Get a 2.5% interest rate on your savings per annum, paid monthly! No minimum or maintaining balance required.' },
];

const TDListProductComponent = ({ style, props }: TDListProductComponentProps) => {
  const styles: TDListProductComponentStyles = useMergeStyles(style);
  const {onSelectProduct} = props || {};
  return (
    <View style={styles.containerStyle}>
    <Text style={styles.pageTitle}>{'Our Products'}</Text>
    <View style={styles.contentWrapper}>
    {
      listProductTD.map((p) => {
        return <TouchableOpacity onPress={() => onSelectProduct && onSelectProduct(p.value)} style={styles.productContainer}>
          <View style={styles.row}>
            <Image source={p.icon} style={styles.icon} /> 
            <View style={{flex: 1, marginLeft: 15, justifyContent: 'space-evenly'}}>
              <Text style={styles.cardTitleStyle}>{p.title}</Text>
              <Text style={styles.cardSubTitleStyle}>{p.subTitle}</Text>
            </View>
          </View>
        </TouchableOpacity>
      })
    }
    </View>
    </View>
  );
};

export default TDListProductComponent;
