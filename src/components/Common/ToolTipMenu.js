import React, { useMemo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SF, SH, SW, useThemeHelper } from '../../helper';
import { Tooltip } from '@ui-kitten/components';
import Spacing from './Spacing';
import VectorIcon from './VectorIcons';
import { Fonts } from '../../constants';
function ToolTipMenu(props) {
  const { toggleTooltip, visible, onBackdropPress, onEditPress, onDeletePress } = props;
  const { colors } = useThemeHelper();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        toolTipView: {
          backgroundColor: colors.white_to_black_color,
          borderColor: colors.light_gray,
          borderWidth: 0,
          shadowColor: colors.black_to_white_color,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.36,
          shadowRadius: 6.68,
          elevation: 11,

        },
        toolTipListView: {
          flexDirection: 'row',
          gap: SW(15),
          alignItems: 'center',
          justifyContent: 'flex-start'
        },
        toolTipListText: {
          color: colors.black_to_white_color,
          fontSize: SF(13),
          fontFamily: Fonts.Font_Regular
        }
      }),
    [colors],
  );

  const renderToggleButton = () => (
    <TouchableOpacity onPress={toggleTooltip}>
      <VectorIcon iconFamily="MaterialCommunityIcons" name="dots-vertical" size={SF(20)} color={colors.black_to_white_color} />
    </TouchableOpacity>
  );

  return (
    <View>
      <Tooltip
        style={styles.toolTipView}
        anchor={renderToggleButton}
        visible={visible}
        placement={"left start"}
        onBackdropPress={onBackdropPress}
      >
        <View>
          <TouchableOpacity style={styles.toolTipListView} onPress={onEditPress}>
            <VectorIcon
              iconFamily="AntDesign"
              color={colors.primary_color}
              size={SF(15)}
              name={'edit'}
            />
            <Text style={styles.toolTipListText}>Edit</Text>
          </TouchableOpacity>
          <Spacing space={SH(20)} />
          <TouchableOpacity style={styles.toolTipListView} onPress={onDeletePress}>
            <VectorIcon
              iconFamily="AntDesign"
              color={colors.primary_color}
              size={SF(14)}
              name={'delete'}
            />
            <Text style={styles.toolTipListText}>Delete</Text>
          </TouchableOpacity>
        </View>
      </Tooltip>
    </View>
  );
}

export default ToolTipMenu;
