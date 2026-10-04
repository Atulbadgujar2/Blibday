import React from 'react';
import { Text } from 'react-native';
import { Fonts } from '../../constants';
import { SF, useThemeHelper } from '../../helper';

function AppHeaderTitle(props) {
  const { colors } = useThemeHelper();
  return (
    <Text style={{ color: colors.black_to_white_color, fontSize: SF(19), fontFamily: Fonts.Font_SemiBold, textAlign: 'center' }}>
      {props.children}
    </Text>
  );
};

export default AppHeaderTitle;
