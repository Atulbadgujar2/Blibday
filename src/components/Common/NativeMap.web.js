import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NativeMap = ({ style }) => (
  <View style={[styles.container, style]}>
    <Text>Map view is available in the mobile app.</Text>
  </View>
);

export const Marker = () => null;
export const Polyline = () => null;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#e8edf0',
    justifyContent: 'center',
  },
});

export default NativeMap;
