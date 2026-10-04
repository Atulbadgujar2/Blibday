import React from 'react';
import { useThemeHelper } from '../../helper';
import { Switch } from 'react-native-paper';
const Switchs = (props) => {
  const { value, onValueChange } = props;
  const { colors } = useThemeHelper()
  return (
    <Switch value={value} onValueChange={onValueChange} color={colors.primary_color} />
  );
};

export default Switchs;