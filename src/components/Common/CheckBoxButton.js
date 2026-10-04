import React, { useMemo } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { SF, SW, useThemeHelper } from '../../helper';
import propTypes from 'prop-types';
import { Fonts } from '../../constants';

const CheckBoxButton = (props) => {
  const { onPress, checked, disabled, lable = "" } = props;
  const { colors } = useThemeHelper()
  const Styles = useMemo(() =>
    StyleSheet.create({
      mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: SW(-6)
      },
      TextStyle: {
        fontSize: SF(15),
        color: colors.black_to_white_color,
        fontFamily: Fonts.Font_Regular
      }
    }),
    [colors],
  );

  return (
    <View style={Styles.mainContainer}>
      <Checkbox
        status={checked ? 'checked' : 'unchecked'}
        onPress={() => { onPress(!checked) }}
        disabled={disabled}
        color={colors.pine_green_color}
      />
      <Text style={Styles.TextStyle}>{lable}</Text>
    </View>
  );
};

CheckBoxButton.defaultProps = {
  checked: false,
  disabled: false,
  onPress: () => { },
  lable: ""
};

CheckBoxButton.propTypes = {
  checked: propTypes.bool,
  disabled: propTypes.bool,
  onPress: propTypes.func,
  lable: propTypes.string
};

export default CheckBoxButton;