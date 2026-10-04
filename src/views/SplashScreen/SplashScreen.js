import React, { useEffect } from 'react';
import { Platform, View, Image} from 'react-native';
import { Container } from '../../components';
import { connect } from 'react-redux';
import { RouteName } from '../../routes';
import { SplashStyle } from '../../styles';
import images from '../../images';
import { useThemeHelper } from '../../helper';
const SplashScreen = (props) => {
  const { navigation,themeData } = props;
  const { colors } = useThemeHelper()
  const SplashStyles = SplashStyle(colors)
  
  useEffect(() => {
    _authanticate()
  }, [])

  const _authanticate = async () => {
    var navigate_screen = props.isLoggedIn ? RouteName.BOTTOM_TAB_NAVIGATOR : RouteName.ONBOARDING_SCREEN;
    if (Platform.OS === 'ios') {
      navigation.navigate(navigate_screen);
    } else {
      setTimeout(() => {
        navigation.replace(navigate_screen);
      }, 500);
    }
  };
  return (
    <Container>
      <View style={SplashStyles.centerView}>
       <Image
          style={SplashStyles.iconStyle}
          source={images.splash}
        />
      </View>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
    themeData: state.commonReducer.themeData,
  };
};
export default connect(mapStateToProps, null)(SplashScreen);
