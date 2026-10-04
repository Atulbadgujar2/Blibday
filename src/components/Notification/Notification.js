import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Spacing, VectorIcons } from '../Common';
import { SF, SH, SW, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';
const Notification = (props) => {
  const { navigation, index, item } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  return (
    <TouchableOpacity
      key={index} activeOpacity={0.8}
      style={[Style.notificationView]}>
      <View style={[Style.notificationInnerView]}>
        <View style={Style.notificationInnerShadView}>
        </View>
        <View style={[Style.notificationUserImageView]}>
          {item?.svgicon}
        </View>
        <View style={{ flexShrink: 1 }}>
          <Text style={[Style.notificationHeading]}>{item?.title}</Text>
          <Spacing space={SH(7)} />
          <Text style={Style.notificationTime}>{item?.time}</Text>
        </View>
      </View>
      <Spacing space={SH(10)} />
      <Text style={[Style.notificationMessage]}>{item?.message}</Text>
      {
        item?.isChecked &&
        <View style={Style.notificationTick}>
          <VectorIcons iconFamily="Ionicons" name="checkmark-done" size={SF(20)} color={colors.primary_color} />
        </View>
      }

    </TouchableOpacity>
  )
};
export default Notification;

