import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { SH, useThemeHelper } from '../../helper';
import { CategoryScreenStyle } from '../../styles';
import { Spacing } from '../Common';

export default function CategoryProductLeft(props) {
  const { onHandlewCatrory, activeCategory, item } = props;
  const { colors } = useThemeHelper();
  const styles = CategoryScreenStyle(colors)

  return (
    <TouchableOpacity
      onPress={() => onHandlewCatrory(item.id)}
      style={[
        styles.leftCategoryItem,
        activeCategory == item.id && styles.categoryItemActive,
      ]}
    >
      <View
        style={[styles.leftSideImageView, {
          backgroundColor: activeCategory == item.id ? colors.mint_dark_white : colors.cultured,
          borderColor: activeCategory == item.id ? colors.eton_green : colors.bright_gray
        }]}
      >
        <Image source={item.image} style={styles.leftSideImage} />
      </View>
      <Spacing space={SH(4)} />
      <Text
        style={[
          styles.categoryText,
          activeCategory == item.id && styles.categoryTextActive,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>

  );
}


