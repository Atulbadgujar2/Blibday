// ProductInformation.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { SF, SH, SW, useThemeHelper } from '../../helper';
import { Fonts } from '../../constants';

const ProductInformation = ({ data }) => {
    const { colors } = useThemeHelper();
  
  const [expanded, setExpanded] = useState(false);

  // show first 5 or all
  const visibleData = expanded ? data : data.slice(0, 5);

const styles = StyleSheet.create({
  container: {
   width:'100%'
  },
  row: {
   flexDirection: 'row',
  paddingVertical: 8,
  },
  label: {
    width: 150,
    fontSize: 14,
    color: colors.black_to_white_color,
   fontFamily:Fonts.Font_SemiBold
  },
  value: {
    flex: 1,
    fontSize: 14,
    color: colors.light_black,
    fontFamily:Fonts.Font_Regular,
  },
  readMoreBtn: {
    marginTop: 10,
    alignSelf: 'flex-start',
  },
  readMoreText: {
    color: colors.mint_green_color,
    fontFamily:Fonts.Font_SemiBold,
    fontSize: 14,
  },
});
  return (
    <View style={styles.container}>
      <FlatList
        data={visibleData}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.value}>{item.value}</Text>
          </View>
        )}
      />

      {/* Read More / Read Less */}
      {data.length > 5 && (
        <TouchableOpacity onPress={() => setExpanded(!expanded)} style={styles.readMoreBtn}>
          <Text style={styles.readMoreText}>
            {expanded ? "Read Less" : "Read More"}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default ProductInformation;
