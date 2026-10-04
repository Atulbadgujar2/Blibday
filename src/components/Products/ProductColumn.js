import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SF, SH, useThemeHelper } from '../../helper';
import { CategoryScreenStyle, Styles } from '../../styles';
import { Spacing, SvgIcons, VectorIcons } from '../Common';
import { RouteName } from '../../routes';
import { CURRENCY } from '../../constants';

export default function ProductColumn(props) {
  const { item, handleWishlist, handleDecrement, handleIncrement, mainViewStyle = {}, navigation } = props;
  const { colors } = useThemeHelper();
  const styles = CategoryScreenStyle(colors)
  const Style = Styles(colors)

  return (
    <View style={[styles.productBox, { ...mainViewStyle,justifyContent:'space-between' }]}>
      <TouchableOpacity activeOpacity={0.9} onPress={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN, { productid: item?.id })}>
        <View style={styles.productInnerView} >
          {/* discount Product */}
          {item.disocunt && <View style={styles.discountProductView}>
            <Text style={styles.discountProductText}>-{item.disocunt}%</Text>
          </View>}

          {/* New Product */}
          {item.ifnew && <View style={styles.newProductView}>
            <Text style={styles.newProductText}>NEW</Text>
          </View>}

          {/* Whishlist Product */}
          <TouchableOpacity style={styles.favoriteView}
            onPress={() => handleWishlist(item.id)}
          >
            <VectorIcons
              iconFamily="MaterialDesignIcons"
              name={item.ifwishlist ? "heart" : "heart-outline"}
              size={SF(17)}
              color={colors.primary_color}
            />
          </TouchableOpacity>
          <Image source={item.image} style={styles.productImage} />
        </View>
        <View style={styles.productDetailsView} >
          <Text style={styles.productText} numberOfLines={2}>{item?.name}</Text>
          <Spacing space={SH(5)} />
          <View>
            <View style={Style.flexShrink}>
              <Text style={styles.productPriceText}>{CURRENCY}{item?.price} <Text style={styles.productWeightText}>/{item?.weight}</Text></Text>
              <Text style={styles.productOldPriceText}>{CURRENCY}{item?.oldPrice}</Text>
            </View>
          </View>
        </View>

        {/* Add to cart and quantity Product */}

        <Spacing space={SH(10)} />
      </TouchableOpacity>

      {
        item.qty ?
          <View
            style={styles.qntView}
          >
            <TouchableOpacity style={styles.qtyBtnMinus} onPress={() => handleDecrement(item.id)}>
              <VectorIcons iconFamily="Entypo" name="minus" size={SF(17)} color={colors.eton_green} />
            </TouchableOpacity>
            <View style={styles.qtyCountContainer}>
              <Text style={styles.qntText}>{item.qty}</Text>
            </View>
            <TouchableOpacity style={styles.qtyBtnPlus} onPress={() => handleIncrement(item.id)}>
              <VectorIcons iconFamily="Entypo" name="plus" size={SF(17)} color={colors.eton_green} />
            </TouchableOpacity>
          </View>
          :
          <TouchableOpacity
            onPress={() => handleIncrement(item.id)}
            style={styles.addCartView}
          >
            <SvgIcons name={"Bag"} height={SF(17)} width={SF(17)} />
            <Text style={[styles.addCartButtonView]}>Add to cart</Text>
          </TouchableOpacity>
      }
    </View>
  );
}


