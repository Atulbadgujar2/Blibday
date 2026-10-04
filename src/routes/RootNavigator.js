import React, { useEffect, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from "react-redux";
import RouteName from './RouteName';
import { SplashScreen, OnboardingScreen, SignInScreen, SignUpScreen, ForgotPasswordScreen, OtpVerifyScreen, ChangePasswordScreen, PrivacyPolicyScreen, TermsConditionScreen, LanguageScreen, LocationScreen, EditProfileScreen, SaveAddressScreen, AddAddressScreen, AboutScreen, SupportScreen, NotificationScreen, CouponScreen, MyWalletScreen, AddMoneyScreen, SettingScreen, NotificationSettingScreen, TransactionScreen, PaymentMethodScreen, CategoryProductScreen, ProductDetailsScreen, SearchBarScreen, SearchScreen, CheckoutScreen, OrderSuccessScreen, MyOrderScreen, TrackOrderScreen, ChatScreen, InvoiceScreen, ReviewScreen, AppReviewScreen, AllScreen } from '../views';
import { headerProps, useThemeHelper } from '../helper';
import { AppHeader } from '../components'
import { useTheme } from "../theme/ThemeProvider";
import { String } from '../constants';
import BottomTabNavigator from './BottomTabNavigator';
const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  const { themeData } = props
  const { dark, setScheme } = useContext(useTheme);
  useEffect(() => {
    setScheme(themeData);
  }, [])
  const { colors } = useThemeHelper();

  // STACK NAVIGATOR ALL ROUTES START
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={RouteName.SPLSH_SCREEN} component={SplashScreen} />
        <Stack.Screen name={RouteName.BOTTOM_TAB_NAVIGATOR} component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name={RouteName.ONBOARDING_SCREEN} component={OnboardingScreen} />
        <Stack.Screen name={RouteName.SIGNIN_SCREEN} component={SignInScreen} />
        <Stack.Screen name={RouteName.SIGNUP_SCREEN} component={SignUpScreen} />
        <Stack.Screen name={RouteName.FORGOT_PASSWORD_SCREEN} component={ForgotPasswordScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} />
            )
          })}
        />
        <Stack.Screen name={RouteName.OTP_VERYFY_SCREEN} component={OtpVerifyScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} />
            )
          })}
        />
        <Stack.Screen name={RouteName.CHANGE_PASSWORD_SCREEN} component={ChangePasswordScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.ChangePassword} />
            )
          })}
        />
        <Stack.Screen
          name={RouteName.LOCATION_SCREEN}
          component={LocationScreen}
        />
        <Stack.Screen
          name={RouteName.EDIT_PROFILE_SCREEN}
          component={EditProfileScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.EditProfile} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.SAVE_ADDRESS_SCREEN}
          component={SaveAddressScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.SaveAddress} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.ADD_ADDRESS_SCREEN}
          component={AddAddressScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.AddAddress} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.PRIVACY_POLICY_SCREEN} component={PrivacyPolicyScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.PrivacyPolicy} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.TERMS_CONDITION_SCREEN}
          component={TermsConditionScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.TermsCondition} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.ABOUT_SCREEN}
          component={AboutScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.About} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.LANGUAGE_SCREEN}
          component={LanguageScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.SelectLanguage} />
            ),
          })}
        />

        <Stack.Screen
          name={RouteName.SUPPORT_SCREEN}
          component={SupportScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.CustomerSupport} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.NOTIFICATION_SCREEN}
          component={NotificationScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.MyNotification} />
            ),
          })}
        />

        <Stack.Screen
          name={RouteName.COUPON_SCREEN}
          component={CouponScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.Coupon} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.MY_WALLET_SCREEN}
          component={MyWalletScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.MyWallet} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.ADD_MONEY_SCREEN}
          component={AddMoneyScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.AddMoney} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.SETTING_SCREEN}
          component={SettingScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.Settings} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.NOTIFICATION_SETTING_SCREEN}
          component={NotificationSettingScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.Notification} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.TRANSACTION_SCREEN}
          component={TransactionScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.Transaction} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.PAYMENT_METHOD_SCREEN}
          component={PaymentMethodScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.PaymentMethod} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.CATEGORY_PRODUCT_SCREEN}
          component={CategoryProductScreen}
        />
        <Stack.Screen
          name={RouteName.PRODUCT_DETAILS_SCREEN}
          component={ProductDetailsScreen}
        />

        <Stack.Screen
          name={RouteName.SEARCH_BAR_SCREEN}
          component={SearchBarScreen}
        />

        <Stack.Screen
          name={RouteName.SEARCH_SCREEN}
          component={SearchScreen}
        />
        <Stack.Screen
          name={RouteName.CHECKOUT_SCREEN}
          component={CheckoutScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.Checkout} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.ORDER_SUCCESS_SCREEN}
          component={OrderSuccessScreen}
        />
        <Stack.Screen
          name={RouteName.MY_ORDER_SCREEN}
          component={MyOrderScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.MyOrder} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.TRACK_ORDER_SCREEN}
          component={TrackOrderScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.TrackOrder} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.CHAT_SCREEN}
          component={ChatScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.Chat} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.INVOICE_SCREEN}
          component={InvoiceScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.Invoice} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.REVIEW_SCREEN}
          component={ReviewScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.label.Review} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.APP_REVIEW_SCREEN}
          component={AppReviewScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.appname} />
            ),
          })}
        />
        <Stack.Screen
          name={RouteName.ALL_SCREEN}
          component={AllScreen}
          options={(props) => ({
            ...headerProps("", colors, true),
            headerLeft: () => (
              <AppHeader {...props} children={String.AllScreen} />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const mapStateToProps = (state) => {
  return {
    themeData: state.commonReducer.themeData,
  };
};
export default connect(mapStateToProps, null)(RootNavigator);