import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { SF, useThemeHelper } from '../../helper';
import VectorIcon from './VectorIcons';
import AppHeaderTitle from './AppHeaderTitle';
import { Styles } from '../../styles';
import AppHeaderGradient from './AppHeaderGradient';
import { RouteName } from '../../routes';

function AppHeader(props) {
  const { navigation, ifGradient = false, ifCart = false } = props;
  const { colors } = useThemeHelper();
  const CommonStyle = Styles(colors);

  if (ifGradient) {
    return (
      <AppHeaderGradient {...props} />
    );
  } else {
    return (
      <View
        style={[CommonStyle.appHeaderMainView, props?.spaceHorizontal && CommonStyle.paddingHorizontalHeader]}>

        <TouchableOpacity onPress={() => navigation.goBack()} style={[CommonStyle.appHeaderIconView]}>
          <VectorIcon iconFamily="AntDesign" name="arrowleft" color={colors.black_to_white_color} size={SF(20)} />
        </TouchableOpacity>
        {props.children &&
          <View style={[CommonStyle.appHeaderTextView, ifCart && { paddingRight: 0 }]}>
            <AppHeaderTitle {...props} />
          </View>
        }
        {ifCart &&
          <TouchableOpacity onPress={() => navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR,{screen:RouteName.MY_CART_SCREEN})}>
            <VectorIcon iconFamily="Feather" name="shopping-cart" color={colors.black} size={SF(20)} />
          </TouchableOpacity>
        }

      </View>
    );
  }
};

export default AppHeader;
