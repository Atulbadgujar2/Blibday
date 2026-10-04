import React, { useMemo } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
import { SF, SH, SW, useThemeHelper } from '../../helper';
import { Fonts } from '../../constants';

function Button(props) {
  const { title, onPress, buttonStyle, disable, buttonTextStyle, buttonType = "", mode = "" } = props;
  const { colors } = useThemeHelper();
  const styles = useMemo(() =>
    StyleSheet.create({
      buttonStyle: {
        height: buttonType == "SMALL" ? SH(30) : SH(45),
        borderRadius: SH(7),
        backgroundColor: mode == "light" ? colors.light_primary : colors.primary_color,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: buttonType == "SMALL" ? SW(20) : SW(10),
        justifyContent: 'center',
        borderColor: colors.fix_white,
        borderWidth: mode == "outlined" ? 1 : 0,
        ...buttonStyle,
      },
      buttonTextStyle: {
        color: mode == "light" ? colors.primary_color : colors.fix_white,
        fontSize: buttonType == "SMALL" ? SF(13) : SF(16),
        fontFamily: Fonts.Font_Medium,
        textAlign: 'center',
        ...buttonTextStyle,
      }
    }),
    [colors,mode,buttonType,buttonStyle,buttonTextStyle],
  );
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      style={styles.buttonStyle}
    >
      <Text style={styles.buttonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  title: '',
  onPress: () => { },
  buttonStyle: {},
  disable: false,
  buttonTextStyle: {},
  buttonType: ''
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  buttonStyle: PropTypes.shape({}),
  disable: PropTypes.bool,
  buttonTextStyle: PropTypes.shape({}),
  buttonType: PropTypes.string,
};

export default Button;
