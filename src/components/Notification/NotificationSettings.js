import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Spacing, Switch, VectorIcons } from '../Common';
import { SF, SH, SW, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';
const Notification = (props) => {
  const { onToggleSwitch, index, item } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  return (
    <TouchableOpacity
      key={index} activeOpacity={0.8}
      style={[Style.notificationView]}>
      <View style={[Style.notificationSetInnerView]}>
        <View style={{ flexShrink: 1 }}>
          <Text style={[Style.notificationSetHeading]}>{item?.title}</Text>
        </View>
        <Switch onValueChange={onToggleSwitch} value={item?.isChecked} />
      </View>
      <Spacing space={SH(10)} />
      <Text style={[Style.notificationSetMessage]}>{item?.message}</Text>
    </TouchableOpacity>
  )
};
export default Notification;

