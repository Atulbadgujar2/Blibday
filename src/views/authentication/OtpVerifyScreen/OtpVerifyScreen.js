import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { AuthenticationStyle } from '../../../styles';
import { Button, Container, Spacing, OtpInput, AlertModal } from '../../../components';
import { SH, useThemeHelper } from '../../../helper';
import { RouteName } from '../../../routes';
import { useDispatch } from 'react-redux';
import { login_Action } from '../../../redux/action';

const OtpVerifyScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const dispatch = useDispatch();
  const OtpVerifyStyle = AuthenticationStyle(colors)
  const [modalVisible, setModalVisible] = useState(false);
  const stateArray = {
    code: ""
  };
  const [state, setState] = useState(stateArray);

  const onhandleLogin = () => {
    setModalVisible(false);
    dispatch(login_Action(true));
    navigation.navigate(RouteName.LOCATION_SCREEN);
  }
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={OtpVerifyStyle.scrollview} keyboardShouldPersistTaps="handled">
          <View style={[OtpVerifyStyle.container, OtpVerifyStyle.formMainView]}>
            <Text style={OtpVerifyStyle.logoTextBig}>Verify Your Identity</Text>
            <Spacing space={SH(10)} />
            <Text style={OtpVerifyStyle.logoText}>Please enter the code we just send to email</Text>
            <Text style={[OtpVerifyStyle.logoText, OtpVerifyStyle.textPrimary]}>example@gmail.com</Text>
            <Spacing space={SH(60)} />

            <View style={[OtpVerifyStyle.formMainView]}>
              <OtpInput pinCount={4} code={state.code} onCodeChanged={(code) => { setState({ ...state, code: code }) }} />
            </View>

            <Spacing space={SH(60)} />
            <View style={OtpVerifyStyle.topLogoMainBox}>
              <Text style={[OtpVerifyStyle.logoText, OtpVerifyStyle.textCenter]}>Didn't receive the code?</Text>
              <Spacing space={SH(5)} />
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.SIGNUP_SCREEN)}>
                <Text style={[OtpVerifyStyle.notRegisterBoldText, OtpVerifyStyle.textCenter, OtpVerifyStyle.textBlack]}>Resend Code</Text>
              </TouchableOpacity>
            </View>
            <Spacing space={SH(30)} />
            <Button
              title="Verify"
              onPress={() => { setModalVisible(true) }}
            />
            <Spacing space={SH(30)} />
          </View>
          <AlertModal
            modalVisible={modalVisible}
            message={"Success!!"}
            description="You have successfully completed your account."
            setModalVisible={setModalVisible}
            onPress={() => { onhandleLogin() }}
            loginSuccess={true}
            buttonText="Back to home"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};
export default OtpVerifyScreen;
