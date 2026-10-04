import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { SF, SH, useThemeHelper } from '../../helper';
import { Fonts } from '../../constants';

function Input({
  label,
  mode,
  placeholder,
  multiline,
  disabled,
  inputStyle,
  onChangeText,
  value,
  error,
  numberOfLines,
  onFocus,
  onBlur,
  maxLength,
  keyboardType,
  autoComplete,
  secureTextEntry,
  outlineStyle,
  setSecureTextEntry,
  ifSecureTextEye,
  contentStyle
}) {
  const { colors } = useThemeHelper()

  const styles = useMemo(() =>
    StyleSheet.create({
      TextStyle: {
        width: '100%',
        fontSize: SF(15),
        height: SH(45),
        color: colors.black_to_white_color,
        fontFamily: Fonts.Font_Regular,
        backgroundColor: colors.white_to_black_color,
        borderRadius: SH(10),
        borderWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.light_gray,
        ...inputStyle,
      },
      contentStyle: {
        width: '100%',
        borderBottomWidth: 0,
        borderWidth: 0,
        height: SH(45),
        ...contentStyle
      },
      label: {
        fontSize: SF(16),
        fontFamily: Fonts.Font_SemiBold,
        marginBottom: SH(7),
        color:colors.black_to_white_color
      },
    }),
    [inputStyle, contentStyle, colors],
  );


  var extraProps = {};
  if (multiline) {
    extraProps['multiline'] = multiline,
      extraProps['numberOfLines'] = numberOfLines
  }
  if (maxLength > 0) {
    extraProps['maxLength'] = maxLength
  }
  if (ifSecureTextEye) {
    extraProps['right'] = <TextInput.Icon iconColor={colors.primary_color} icon={secureTextEntry ? "eye-off" : "eye"} onPress={setSecureTextEntry} />
  }
  return (
    <View style={styles.container}>
      {label != "" &&
        <Text style={styles.label}>{label}</Text>
      }


      <TextInput
        theme={{
          roundness: SH(10),
          colors: { onSurfaceVariant: colors.black_to_white_color, placeholder: colors.primary_color, text: colors.primary_color, primary: colors.primary_color }
        }}
        underlineStyle={{ height: 0 }}
        label={''}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        mode={mode}
        error={error}
        disabled={disabled}
        onFocus={onFocus}
        onBlur={onBlur}
        style={styles.TextStyle}
        activeOutlineColor={colors.gray}
        outlineColor={colors.light_gray}
        textColor={disabled ? colors.gray : colors.black_to_white_color}
        contentStyle={styles.contentStyle}
        keyboardType={keyboardType}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        underlineColor='transparent'
        {...extraProps}
      />
    </View>
  );
}

Input.defaultProps = {
  label: '',
  mode: 'outlined',
  placeholder: '',
  multiline: false,
  disabled: false,
  inputStyle: {},
  onChangeText: () => { },
  value: '',
  error: false,
  numberOfLines: 1,
  onFocus: () => { },
  onBlur: () => { },
  maxLength: 0,
  keyboardType: 'default',
  autoComplete: 'off',
  secureTextEntry: false,
  outlineStyle: {},
  setSecureTextEntry: () => { },
  ifSecureTextEye: false,
  contentStyle: {}
};

Input.propTypes = {
  label: propTypes.string,
  mode: propTypes.string,
  placeholder: propTypes.string,
  multiline: propTypes.bool,
  disabled: propTypes.bool,
  inputStyle: propTypes.shape({}),
  onChangeText: propTypes.func,
  value: propTypes.string,
  error: propTypes.bool,
  numberOfLines: propTypes.number,
  onFocus: propTypes.func,
  onBlur: propTypes.func,
  maxLength: propTypes.number,
  keyboardType: propTypes.string,
  autoComplete: propTypes.string,
  secureTextEntry: propTypes.bool,
  outlineStyle: propTypes.shape({}),
  setSecureTextEntry: propTypes.func,
  ifSecureTextEye: propTypes.bool,
  contentStyle: propTypes.shape({})
};

export default Input;
