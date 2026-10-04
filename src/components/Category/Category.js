import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { SH, useThemeHelper } from '../../helper';
import { CategoryScreenStyle } from '../../styles';
import { GradientComponent, Spacing } from '../Common';

export default function Category(props) {
  const { items, handleCategory } = props;
  const { colors } = useThemeHelper();
  const styles = CategoryScreenStyle(colors)

  return (
    items.map((items, index) => (
      <View key={index} style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>{items.name}</Text>
        <Spacing space={SH(15)} />
        <View style={[styles.gridContainer]}>
          {items.subcategory.map((item, index) => (
            <GradientComponent
              key={index}
              setColors={[colors.light_box, items.color || colors.tea_green_light_color]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              styles={[styles.cardGradient, { borderColor: items.color,  marginRight: (index % 3 === 2) ? 0 : '3.5%',}]}
            >
            <TouchableOpacity 
            activeOpacity={0.5}
            onPress={()=>handleCategory(items.id,item.id)}
            style={styles.cardGradientInner}
            >
              <Image
                source={item.image}
                style={styles.cardImage}
              />
              <Spacing space={SH(5)} />
              <Text style={styles.cardTitle}>{item.name}</Text>
            </TouchableOpacity>

            </GradientComponent>
          ))}
        </View>
      </View>

    ))
  );
}


