import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { SF, SH, useThemeHelper } from '../../helper';
import { CouponScreenStyle } from '../../styles';
import { Spacing, SvgIconsFiles, VectorIcons } from '../Common';

export default function CouponCards(props) {
  const { items, onHandleDetails } = props;
  const { colors } = useThemeHelper();
  const styles = CouponScreenStyle(colors)

  const renderItem = ({ item, index }) => (
    <View
      key={index}
      style={styles.cardContainer}>
      {/* Left circular cut */}
      <View style={styles.leftCut}>
        <View style={styles.leftCutMask} />
      </View>

      {/* Right circular cut */}
      <View style={styles.rightCut}>
        <View style={styles.rightCutMask} />
      </View>

      {/* Main Content */}
      <View style={styles.contentWrapper}>
        <View style={styles.cardContent}>
          {/* Left side text section */}
          <View style={styles.textSection}>
            <Text style={styles.couponCode}>{item?.code}</Text>
            <Spacing space={SH(3)} />
            <Text style={styles.unlockText}>{item?.name}</Text>
            <Spacing space={SH(10)} />
            <View style={styles.offerRow}>
              <SvgIconsFiles name="SaleIcon" size={20} color={colors.primary_color} />
              <Text style={styles.offerText}>{item?.discount}</Text>
            </View>
          </View>

          {/* Dashed border separator */}
          <View style={styles.separator} />

          {/* Image Section */}
          <Image source={item.image} style={[styles.image,{
              width: 80,
                height: 80,
          }]} />
        </View>

        {/* Redeem section */}
        <TouchableOpacity onPress={()=>onHandleDetails(index)} style={styles.redeemSection}>
          <Text style={styles.redeemText}>REDEEM NOW</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{ gap: SH(10) }}
      scrollEnabled={false}
    />
  );
}


