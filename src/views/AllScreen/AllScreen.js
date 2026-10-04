import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Container, VectorIcons } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper } from '../../helper';
import { SettingStyle, Styles } from '../../styles';
import { RouteName } from '../../routes';

const SettingScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const SettingStyles = SettingStyle(colors)
  const Style = Styles(colors)
  const onHandleNavigate = (e, type = "") => {
    if (type == "bottom") {
      navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR, { screen: e })

    } else if (type == "product") {
      navigation.navigate(e, { catid: "1", subcatid: '1-1' })

    } else {
      navigation.navigate(e)

    }
  }

  const SettingsData = [
    { id: 2, label: "Onboarding Screen", navigate: RouteName.ONBOARDING_SCREEN },
    { id: 3, label: "Sign In Screen", navigate: RouteName.SIGNIN_SCREEN },
    { id: 4, label: "Sign Up Screen", navigate: RouteName.SIGNUP_SCREEN },
    { id: 5, label: "OTP Verify Screen", navigate: RouteName.OTP_VERYFY_SCREEN },
    { id: 6, label: "Forgot Password Screen", navigate: RouteName.FORGOT_PASSWORD_SCREEN },
    { id: 7, label: "Home Screen", navigate: RouteName.HOME_SCREEN, type: 'bottom' },
    { id: 8, label: "Category Screen", navigate: RouteName.CATEGORY_SCREEN, type: 'bottom' },
    { id: 9, label: "My Profile Screen", navigate: RouteName.MY_PROFILE_SCREEN, type: 'bottom' },
    { id: 10, label: "Wishlist Screen", navigate: RouteName.WISHLIST_SCREEN, type: 'bottom' },
    { id: 11, label: "My Cart Screen", navigate: RouteName.MY_CART_SCREEN, type: 'bottom' },
    { id: 30, label: "Category Product Screen", navigate: RouteName.CATEGORY_PRODUCT_SCREEN, type: 'product' },
    { id: 31, label: "Product Details Screen", navigate: RouteName.PRODUCT_DETAILS_SCREEN },
    { id: 32, label: "Search Bar Screen", navigate: RouteName.SEARCH_BAR_SCREEN },
    { id: 33, label: "Search Screen", navigate: RouteName.SEARCH_SCREEN },
    { id: 34, label: "Checkout Screen", navigate: RouteName.CHECKOUT_SCREEN },
    { id: 35, label: "Order Success Screen", navigate: RouteName.ORDER_SUCCESS_SCREEN },
    { id: 36, label: "My Order Screen", navigate: RouteName.MY_ORDER_SCREEN },
    { id: 37, label: "Track Order Screen", navigate: RouteName.TRACK_ORDER_SCREEN },
    { id: 39, label: "Invoice Screen", navigate: RouteName.INVOICE_SCREEN },
    { id: 23, label: "Coupon Screen", navigate: RouteName.COUPON_SCREEN },
    { id: 24, label: "My Wallet Screen", navigate: RouteName.MY_WALLET_SCREEN },
    { id: 25, label: "Add Money Screen", navigate: RouteName.ADD_MONEY_SCREEN },
    { id: 13, label: "Location Screen", navigate: RouteName.LOCATION_SCREEN },
    { id: 15, label: "Save Address Screen", navigate: RouteName.SAVE_ADDRESS_SCREEN },
    { id: 16, label: "Add Address Screen", navigate: RouteName.ADD_ADDRESS_SCREEN },
    { id: 21, label: "Support Screen", navigate: RouteName.SUPPORT_SCREEN },
    { id: 20, label: "Change Password Screen", navigate: RouteName.CHANGE_PASSWORD_SCREEN },
    { id: 22, label: "Notification Screen", navigate: RouteName.NOTIFICATION_SCREEN },
    { id: 12, label: "Language Screen", navigate: RouteName.LANGUAGE_SCREEN },
    { id: 14, label: "Edit Profile Screen", navigate: RouteName.EDIT_PROFILE_SCREEN },
    { id: 26, label: "Setting Screen", navigate: RouteName.SETTING_SCREEN },
    { id: 27, label: "Notification Setting Screen", navigate: RouteName.NOTIFICATION_SETTING_SCREEN },
    { id: 28, label: "Transaction Screen", navigate: RouteName.TRANSACTION_SCREEN },
    { id: 29, label: "Payment Method Screen", navigate: RouteName.PAYMENT_METHOD_SCREEN },
    { id: 38, label: "Chat Screen", navigate: RouteName.CHAT_SCREEN },
    { id: 40, label: "Review Screen", navigate: RouteName.REVIEW_SCREEN },
    { id: 18, label: "Terms & Condition Screen", navigate: RouteName.TERMS_CONDITION_SCREEN },
    { id: 19, label: "Privacy Policy Screen", navigate: RouteName.PRIVACY_POLICY_SCREEN },
    { id: 17, label: "About Screen", navigate: RouteName.ABOUT_SCREEN },
    { id: 41, label: "App Review Screen", navigate: RouteName.APP_REVIEW_SCREEN },
  ];

  return (
    <Container>
      <ScrollView>
        <View style={[Style.paddingHorizontalCommon, Style.width100]}>
          {SettingsData.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={SettingStyles.ListMainView} onPress={() => item?.navigate && onHandleNavigate(item.navigate, item?.type)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={SettingStyles.flexRowView}>
                    <VectorIcons iconFamily={'MaterialIcons'} name={'pages'} size={22} color={colors.primary_color} />
                    <Text style={SettingStyles.flexRowText}>{item?.label}</Text>
                  </View>
                  <VectorIcons iconFamily={'MaterialDesignIcons'} name={'chevron-right'} size={20} color={colors.primary_color} />
                </View>
              </TouchableOpacity>
            )
          }
          )}
        </View>
      </ScrollView>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(SettingScreen);
