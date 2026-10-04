import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Container, Spacing } from '../../components';
import { connect } from 'react-redux';
import { RouteName } from '../../routes';
import { Styles } from '../../styles';
import { OnboardingData, SF, SH, useThemeHelper } from '../../helper';
import AppIntroSlider from 'react-native-app-intro-slider';
import Icon from 'react-native-vector-icons/Ionicons';
const OnboardingScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper()
  const style = Styles(colors)

  const RenderItem = ({ item }) => {
    return (
      <View style={{backgroundColor: colors.white_to_black_color}}>
        <View style={style.onBoardingView}>
          <View>
            <View style={[style.onBoardingImageView]}>
              <Image resizeMode='cover' style={style.onBoardingImage} source={item.image} />
              <View style={style.onBoardingMaskView} />
            </View>
            <View style={[style.paddingHorizontalCommon]}>
              <Text style={style.onBoardingTextBig}>
                {item.text}
              </Text>
              <Spacing space={SH(30)} />
              <Text style={style.onBoardingTextSmall}>
                {item.boldText}
              </Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  const _renderNextButton = () => {
    return (
      <View style={style.onBoardingButtonView}>
        <Icon name="arrow-forward" size={SF(25)} color={colors.white} />
      </View>
    );
  };

  const _renderPreButton = () => {
    return (
     <View style={style.onBoardingButtonPreView}>
        <Icon name="arrow-back" size={SF(25)} color={colors.primary_color} />
     </View>
    );
  };

  const _renderDoneButton = () => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(RouteName.SIGNIN_SCREEN)} style={style.onBoardingButtonView}>
        <Icon name="arrow-forward" size={SF(25)} color={colors.white} />
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <AppIntroSlider
        data={OnboardingData}
        renderItem={RenderItem}
        renderNextButton={_renderNextButton}
        renderPrevButton={_renderPreButton}
        renderDoneButton={_renderDoneButton}
        activeDotStyle={style.activeDotView}
        dotStyle={style.dotView}
        showPrevButton
        showNextButton
      />
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn
  };
};
export default connect(mapStateToProps, null)(OnboardingScreen);
