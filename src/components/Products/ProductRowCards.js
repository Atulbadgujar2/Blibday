import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { SF, SH, useThemeHelper } from '../../helper';
import { MyCartScreenStyle } from '../../styles';
import { Spacing, VectorIcons } from '../Common';
import { CURRENCY } from '../../constants';

export default function SwipeToDelete(props) {
  const { items } = props;
  const { colors } = useThemeHelper();
  const styles = MyCartScreenStyle(colors)

  const renderItem = ({ item, index }) => (
      <View key={index} style={[styles.container]}>
        <View style={[styles.card]}>
          <View style={[styles.imageContainer]}>
            <Image source={item.image} style={styles.image} />
          </View>
          <View style={styles.content}>
            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subtitle}>{item.weight}</Text>
              <Spacing space={SH(5)} />
              <View style={styles.priceRow}>
                <Text style={styles.price}>{CURRENCY}{item.price.toFixed(2)}</Text>
                <Text style={styles.oldPrice}>{CURRENCY}{item.oldPrice.toFixed(2)}</Text>
              </View>
              <Spacing space={SH(3)} />
              <Text style={[styles.title,{fontSize:12}]}>Qty: {item.qty}</Text>
              <Spacing space={SH(3)} />
            </View>
         
          </View>
        </View>
      </View>
  );

  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      contentContainerStyle={{gap:SH(12)}}
      scrollEnabled={false}
    />
  );
}


