import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Spacing, VectorIcons } from '../Common';
import { SF, SH, SW, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';
import { CURRENCY } from '../../constants';
const MyWallet = (props) => {
  const { navigation, index, item } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  return (
    <TouchableOpacity
      key={index} activeOpacity={0.8}
      style={[Style.myWalletView]}>
      <View style={[Style.myWalletInnerView]}>
        <View style={[Style.myWalletInnerLeftView]}>
          <View style={[Style.myWalletInnerShadView, { backgroundColor: item?.isAdded ? colors.tea_green_color : colors.red_light_color }]}>
          </View>
          <View style={[Style.myWalletUserImageView, { transform: [{ rotateY: item?.isAdded ? '180deg' : '0deg', }] }]}>
            <VectorIcons iconFamily="MaterialDesignIcons" name={item?.isAdded ? "arrow-bottom-right" : "arrow-top-right"} size={30} color={item?.isAdded ? colors.primary_color : colors.red_color} />
          </View>
          <View style={Style.flexShrink}>
            <Text style={[Style.myWalletHeading]}>{item?.title}</Text>
            <Spacing space={SH(3)} />
            <Text style={[Style.myWalletTime]}>{item?.details}</Text>
            <Text style={Style.myWalletTime}>{item?.time}</Text>
          </View>
        </View>
        <View style={[Style.flexShrink, { paddingRight: 10 }]}>
          <Text style={[Style.myWalletAmount, { color: item?.isAdded ? colors.primary_color : colors.red_color }]}>{CURRENCY}190</Text>
          <Spacing space={SH(7)} />
          <Text style={Style.myWalletTime}>{item?.isAdded ? "Top Up" : "Order"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};
export default MyWallet;

