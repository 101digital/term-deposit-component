import React, { useContext, useEffect, useRef, useState } from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { AddIcon, Page1, Page2, Page3 } from 'term-deposit-component/src/assets';
import { Carousel } from 'account-origination-component/src/components/carousel';
import useMergeStyles from './styles';
import { TDDashboardComponentProps, TDDashboardComponentStyles } from './types';

const carouselList = [
  { item: <Page1 width={170} height={254} /> },
  { item: <Page2 width={170} height={254} /> },
  { item: <Page3 width={170} height={254} /> },
];

const TDDashboardComponent = ({ style, props }: TDDashboardComponentProps) => {
  const styles: TDDashboardComponentStyles = useMergeStyles(style);
  const {onSelectAddProduct} = props || {};


  return (
    <View style={styles.containerStyle}>
      <View style={styles.cardContainerStyle}>
        <Text style={styles.cardTitleStyle}>UD Main Bank Account</Text>
          <Text style={styles.cardValueStyle}>₱ 100,100,150.74</Text>
        <Text style={styles.cardSubTitleStyle}>Earns 3.5% interest p.a.</Text>
      </View>

      <View style={styles.contentWrapper}>
        <View style={styles.addProductWrapper}>
          <TouchableOpacity style={styles.row} onPress={onSelectAddProduct}>
            <View style={styles.row}>
            <AddIcon size={24} />
            <Text style={styles.addProductTitle}>
              Add product
            </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
        <View style={styles.learnSection}>
          <Text style={styles.titleSection}>{'Learn & Grow'}</Text>
          <View style={styles.sliderContainerStyle}>
            <Carousel
              showBullets={false}
              containerStyle={styles.dashboardCarousel}
              carouselList={carouselList}
            />
          </View>
        </View>
    </View>
  );
};

export default TDDashboardComponent;
