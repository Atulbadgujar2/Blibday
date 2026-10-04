import React from 'react';
import { View, ScrollView } from 'react-native';
import { Notification, Container, NotFound, Spacing } from '../../components';
import { connect } from 'react-redux';
import { SH, NotificationData, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';
import images from '../../images';

const NotificationScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const NotificationStyle = Styles(colors)

  return (
    <Container containerPropStyle={NotificationStyle.themeBackgroundColor}>
      {NotificationData.length != 0 ?
        <ScrollView>
          <Spacing space={SH(20)} />
          <View style={[NotificationStyle.paddingHorizontalCommon, NotificationStyle.width100]}>
            {NotificationData.map((item, index) => {
              return (
                <Notification key={index} item={item} index={index} {...props} />
              )
            })}
          </View>
        </ScrollView>
        :
        <View style={[NotificationStyle.paddingHorizontalCommon, NotificationStyle.width100,{backgroundColor:colors.white}]}>
          <NotFound
            title="No Notification yet!"
            content="We'll notify you once we have something for you!!"
            image={images.notificationnotfound}
            iftype="LottieIcon"
          />
        </View>
      }
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(NotificationScreen);
