import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { AuthenticationStyle } from '../../../styles';
import { Button, Container, Spacing, Input } from '../../../components';
import { SH, useThemeHelper } from '../../../helper';
import { RouteName } from '../../../routes';

const ForgotPasswordScreen = (props) => {

  const { colors } = useThemeHelper();
  const ForgotPasswordStyle = AuthenticationStyle(colors)
  const { navigation } = props;
  const stateArray = {
    email: ""
  };
  const [state, setState] = useState(stateArray);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
        >
        <ScrollView contentContainerStyle={ForgotPasswordStyle.scrollview} keyboardShouldPersistTaps="handled">
        <View style={[ForgotPasswordStyle.container,ForgotPasswordStyle.formMainView]}>
              <Text style={ForgotPasswordStyle.logoTextBig}>Forgot Password!</Text>
              <Spacing space={SH(10)} />
               <Text style={ForgotPasswordStyle.logoText}>Enter your email address. you'll receive an email with link to reset password.</Text>
              <Spacing space={SH(40)} />
            {/* INPUT FORM */}
              <View>
                <Input
                  label="Email"
                  placeholder="example@gmail.com"
                  onChangeText={(text) => setState({ ...state, email: text })}
                  value={state.email}
                  autoComplete="email"
                />
              </View>
             
            <Spacing space={SH(40)} />
            <Button
              title="Send"
              onPress={() => { navigation.navigate(RouteName.OTP_VERYFY_SCREEN) }}
            />
            <Spacing space={SH(40)} />
            <View style={ForgotPasswordStyle.notRegisterView}>
              <Text style={ForgotPasswordStyle.notRegisterText}>Back to </Text>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.SIGNIN_SCREEN)}>
                <Text style={ForgotPasswordStyle.notRegisterBoldText}>Sign In</Text>
              </TouchableOpacity>
            </View>
              <Spacing space={SH(30)} />
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>

  );
};
export default ForgotPasswordScreen;
