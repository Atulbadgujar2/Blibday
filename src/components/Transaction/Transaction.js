import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Spacing, VectorIcons } from '../Common';
import { SH, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';
const MyWallet = (props) => {
  const { index, item } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  return (
    <TouchableOpacity
      key={index} activeOpacity={0.8}
      style={[Style.myWalletView, { borderRadius: 10, marginBottom: 10 }]}>
      <View style={[Style.myWalletInnerView]}>
        <View style={[Style.myWalletInnerLeftView]}>
          <VectorIcons iconFamily="MaterialDesignIcons" name={item?.isAdded ? "arrow-down" : "arrow-up"} size={30} color={item?.isAdded ? colors.primary_color : colors.red_color} />
          <View style={Style.flexShrink}>
            <Text style={[Style.myWalletHeading]}>{item?.title}</Text>
            <Spacing space={SH(3)} />
            <Text style={[Style.myWalletTime]}>{item?.details}</Text>
            <Text style={Style.myWalletTime}>{item?.time}</Text>
          </View>
        </View>
        <View style={[Style.flexShrink]}>
          <Text style={[Style.myWalletAmount, { color: item?.isAdded ? colors.primary_color : colors.red_color }]}>{item?.amount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
};
export default MyWallet;

