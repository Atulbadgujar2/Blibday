import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { SCREEN_WIDTH, SH, SW, useThemeHelper } from '../../helper';
import { HomeScreenStyle } from '../../styles';
import { Spacing} from '../Common';
import { COMMON_PADDING, CURRENCY } from '../../constants';
import { RouteName } from '../../routes';

export default function PreviousOrder(props) {
  const { PreviousOrderData, item, index, navigation } = props;
  const { colors } = useThemeHelper();
  const styles = HomeScreenStyle(colors)

  return (
    <View
    style={[styles.prevOrdercard, {
      width: SCREEN_WIDTH - (COMMON_PADDING * 2),
      marginRight: index == (PreviousOrderData.length - 1) ? SW(COMMON_PADDING) : 0,
    }]}>
      {/* LEFT SIDE CONTENT */}
      <View style={[styles.prevOrderleftContainer]}>
        <Text style={styles.prevOrderdeliveredText}>{item?.status}</Text>
        <Text style={styles.prevOrderdateText} numberOfLines={1}>{item?.date}</Text>
        <Spacing space={SH(10)} />
        {/* PRODUCT IMAGES */}
        <View style={[styles.prevOrderproductRow]}>
          {item?.product?.slice(0, 3)?.map((items, index) => {
            return (
            <TouchableOpacity key={index}  onPress={()=>navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN,{productid:item?.id})}>
              <Image key={index} source={items?.image} style={styles.prevOrderproductImg} />
            </TouchableOpacity>
            )
          })
          }
          <Text style={styles.prevOrdermoreText}>{(item?.product.length)}{'+\nMore'}</Text>
        </View>
        <Spacing space={SH(10)} />

        {/* TOTAL & BUTTON */}
        <View style={styles.prevOrderorderFooter}>

          <View>
            <Text style={styles.prevOrderorderIdText} numberOfLines={1}>
              Order ID : {item?.orderId}
            </Text>

            <Spacing space={SH(7)} />

            <Text style={styles.prevOrderfinalTotalText} numberOfLines={1}>
              Final Total : {CURRENCY}{item?.total}
            </Text>
          </View>

          <TouchableOpacity
            style={[
              styles.prevOrderorderAgainButton
            ]}
            onPress={()=>navigation.navigate(RouteName.MY_CART_SCREEN)}
          >
            <Text style={styles.prevOrderorderAgainButtonText}>Order Again</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* RIGHT SIDE VERTICAL BANNER */}
      <View style={styles.prevOrderrightRibbon} >
        <Text style={styles.prevOrderribbonText}>{item?.discount}</Text>
      </View>

    </View>
  );
}


