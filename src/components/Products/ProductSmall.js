import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SF, SH, useThemeHelper } from '../../helper';
import { CategoryScreenStyle, Styles } from '../../styles';
import { Spacing, VectorIcons } from '../Common';
import { CURRENCY, Fonts } from '../../constants';

export default function ProductColumn(props) {
  const { item, index, mainViewStyle = {}, onPress } = props;
  const { colors } = useThemeHelper();
  const styles = CategoryScreenStyle(colors)
  const Style = Styles(colors)

  return (
    <TouchableOpacity
      activeOpacity={1}
      key={index}
      onPress={onPress}
      style={[styles.smallProductMainView, {
        ...mainViewStyle,
      }]}>
      <View style={styles.smallProductImageView} >
        <Image source={item.image} style={{
          Width: '100%',
          height: '100%',
          resizeMode: 'cover',
        }} />
      </View>
      <View style={styles.productDetailsView}>
        <Text style={[styles.productText, { fontSize: SF(17), fontFamily: Fonts.Font_SemiBold, color: colors.black_to_white_color, textAlign: 'center' }]}>{item?.name}</Text>
        <Spacing space={SH(5)} />
        <View>
          <View style={[Style.flexShrink, styles.smallProductPriceView]}>

            <Text style={styles.productOldPriceText}>{CURRENCY}{item?.oldPrice}</Text>
            <View
              style={styles.smallProductPriceRatView}
            >
              <VectorIcons
                iconFamily="MaterialDesignIcons"
                name={"star"}
                size={SF(17)}
                color={colors.secondary_color}
              />
              <Text style={styles.productPriceText}>4.9</Text>
            </View>
          </View>
        </View>
      </View>

      <Spacing space={SH(10)} />
      <View style={[styles.addCartView, { borderTopWidth: 0, borderBottomWidth: 0 }]} >
        <View style={Style.flexShrink}>
          <Text style={[styles.productPriceText, { fontFamily: Fonts.Font_Bold, fontSize: SF(19) }]}>{CURRENCY}{item?.price} <Text style={styles.productWeightText}>/{item?.weight}</Text></Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}


