import React from 'react';
import { Image, Text, View } from 'react-native';
import { Button, Container, LottieIcon, Spacing } from '../../components';
import { connect } from 'react-redux';
import { SCREEN_WIDTH, SH, SW, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';
import images from '../../images';
import { RouteName } from '../../routes';

const OrderSuccessScreen = (props) => {
  const { navigation } = props;
  const { colors, dark } = useThemeHelper();
  const HomeStyle = Styles(colors)

  return (
    <Container>
      <View style={[HomeStyle.paddingHorizontalCommon, HomeStyle.width100, { backgroundColor: colors.white_to_black_color }]}>
        <Image source={images.bg2}
          style={[HomeStyle.fullBgImage,
          { opacity: dark ? 0.1 : 0.5 }

          ]}
        />
        <View style={[HomeStyle.successMainView]}>
          <View style={HomeStyle.succesInnernView}>
            <View style={HomeStyle.succesInnernTopView}>
              <LottieIcon source={images.successcheck} style={{ height: SCREEN_WIDTH, width: SCREEN_WIDTH }} />
              <Text style={[HomeStyle.notFoundBigTitle, { fontSize: 25 }]}>{"Your Order has been accepted"}</Text>
              <Spacing space={SH(20)} />
              <Text style={HomeStyle.notFoundSmallTitle}>{"Your items has been placcd and is on it’s way to being processed"}</Text>
              <Spacing space={SH(40)} />
            </View>
            <View style={HomeStyle.width100}>
              <Button
                onPress={() => navigation.navigate(RouteName.TRACK_ORDER_SCREEN)}
                title="Track Order" buttonStyle={HomeStyle.width100} />
              <Spacing space={SH(20)} />
              <Button
                onPress={() => navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR, { screen: RouteName.HOME_SCREEN })}
                title="Back to home" buttonStyle={{ ...HomeStyle.width100, backgroundColor: colors.transparent }}
                buttonTextStyle={{ color: colors.black_to_white_color, fontSize: 20 }}
              />
              <Spacing space={SH(20)} />
            </View>
          </View>
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(OrderSuccessScreen);
