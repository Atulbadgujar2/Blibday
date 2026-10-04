import React from 'react';
import { View,StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigationState } from '@react-navigation/native';
import propTypes from 'prop-types';
import { useThemeHelper } from '../../helper';
import { RouteName } from '../../routes';
import { Styles } from '../../styles';
function Container(props) {
  const {
    children,
    containerPropStyle,
    SafeAreaViewStyle = {}
  } = props;

  const routesState = useNavigationState(state => state);
  const currentRoute = routesState?.routes[routesState.index];
  // Define screens with no navigation header
  const noHeaderScreens = [
     RouteName.SPLSH_SCREEN,
    RouteName.ONBOARDING_SCREEN,
    RouteName.SIGNIN_SCREEN,
    RouteName.SIGNUP_SCREEN,
    RouteName.LOCATION_SCREEN,
    RouteName.HOME_SCREEN,
    RouteName.MY_PROFILE_SCREEN,
    RouteName.PRODUCT_DETAILS_SCREEN,
    RouteName.CATEGORY_PRODUCT_SCREEN,
    RouteName.CATEGORY_SCREEN,
    RouteName.SEARCH_BAR_SCREEN,
    RouteName.SEARCH_SCREEN,
    RouteName.ORDER_SUCCESS_SCREEN
  ]; // add all screens where headerShown: false
  const headerShown = !noHeaderScreens.includes(currentRoute?.name);

  const { colors } = useThemeHelper();
  var themestyle = Styles(colors);
  return (
     <>
      {/* Apply default StatusBar ONLY for normal screens */}
      {currentRoute?.name == RouteName.HOME_SCREEN || currentRoute?.name == RouteName.CATEGORY_SCREEN || currentRoute?.name == RouteName.CATEGORY_PRODUCT_SCREEN ? (
         <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.secondary_light_color}
        />
      ):
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.pine_green_color}
        />
      }
      <SafeAreaView style={[themestyle.mainContainerStyle, { ...containerPropStyle, ...SafeAreaViewStyle }]}
        edges={headerShown ? ['left', 'right'] : ['top', 'bottom', 'left', 'right']}
      >
    <View style={[themestyle.mainContainerStyle, { ...containerPropStyle }]}>

        {children}
    </View>
      </SafeAreaView>

     </>
  );
}

Container.defaultProps = {
  statusBarPropStyle: {},
  containerPropStyle: {},
};

Container.propTypes = {
  statusBarPropStyle: propTypes.shape({}),
  containerPropStyle: propTypes.shape({}),
};

export default Container;
