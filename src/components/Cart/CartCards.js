import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';
import { SF, SH, useThemeHelper } from '../../helper';
import { MyCartScreenStyle } from '../../styles';
import { Spacing, VectorIcons } from '../Common';
import { CURRENCY } from '../../constants';

export default function SwipeToDelete(props) {
  const { items, handleDelete, handleDecrement, handleIncrement } = props;
  const { colors } = useThemeHelper();
  const styles = MyCartScreenStyle(colors)

  const renderRightActions = (id) => (
    <View style={styles.rightActionContainer}>
      <TouchableOpacity onPress={() => handleDelete(id)} style={styles.deleteButton}>
        <VectorIcons iconFamily="Entypo" name="trash" size={SF(22)} color={colors.red_color} />
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item, index }) => (
    <Swipeable renderRightActions={() => renderRightActions(item.id)} key={index}>
      <View style={[styles.container]}>
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
            </View>
            <View style={styles.footer}>
              <TouchableOpacity><Text style={styles.saveLater}>Save for later</Text></TouchableOpacity>
              <View style={styles.qtyContainer}>
                <TouchableOpacity style={styles.qtyBtnMinus} onPress={() => handleDecrement(item.id)}>
                  <VectorIcons iconFamily="Entypo" name="minus" size={SF(20)} color={colors.primary_color} />
                </TouchableOpacity>
                <View style={styles.qtyCountContainer}>
                  <Text style={styles.qtyText}>{item.qty}</Text>
                </View>
                <TouchableOpacity style={styles.qtyBtnPlus} onPress={() => handleIncrement(item.id)}>
                  <VectorIcons iconFamily="Entypo" name="plus" size={SF(20)} color={colors.white} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Swipeable>
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


