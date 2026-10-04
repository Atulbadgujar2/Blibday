import React, { useMemo } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { SF, SW, useThemeHelper } from '../../helper';
import VectorIcon from './VectorIcons';
import { Styles } from '../../styles';
import GradientComponent from './GradientComponent';
import { COMMON_PADDING, Fonts } from '../../constants';
import { RouteName } from '../../routes';
function AppHeaderGradient(props) {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const CommonStyle = Styles(colors);
  const style = useMemo(() =>
    StyleSheet.create({
      headerView: {
        width: '100%',
        position: "relative",
        zIndex: 1,
      },
      safeAreaView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: SW(COMMON_PADDING),
        paddingVertical: 15
      }
    }),
    [colors],
  );

  return (
    <GradientComponent
      setColors={[colors.secondary_light_color, colors.secondary_light1_color]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1.2 }}
      styles={style.headerView}
    >
      <View style={style.safeAreaView}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <VectorIcon iconFamily="AntDesign" name="arrowleft" color={colors.black} size={SF(20)} />
        </TouchableOpacity>
        {props.children &&
          <View style={[CommonStyle.appHeaderTextView, { paddingRight: 0 }]}>
            <Text style={{ color: colors.black, fontSize: SF(19), fontFamily: Fonts.Font_SemiBold, textAlign: 'center' }}>
              {props.children}
            </Text>
          </View>
        }
        <TouchableOpacity onPress={() => navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR, { screen: RouteName.MY_CART_SCREEN })}>
          <VectorIcon iconFamily="Feather" name="shopping-cart" color={colors.black} size={SF(20)} />
        </TouchableOpacity>

      </View>
    </GradientComponent>
  );
};

export default AppHeaderGradient;
