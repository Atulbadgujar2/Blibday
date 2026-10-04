import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Image, ScrollView } from 'react-native';
import { AuthenticationStyle } from '../../../styles';
import { Button, Container, Spacing, Input, CheckBoxButton } from '../../../components';
import { SH, useThemeHelper } from '../../../helper';
import { RouteName } from '../../../routes';
import images from '../../../images';

const SignInScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const SignInStyle = AuthenticationStyle(colors)
  const stateArray = {
    email: "",
    password: ""
  };
  const [state, setState] = useState(stateArray);
  const [remember, setRemember] = useState(true);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
        style={{ flex: 1 }}
        >
        <ScrollView contentContainerStyle={SignInStyle.scrollview} keyboardShouldPersistTaps="handled">
        <View style={[SignInStyle.container,SignInStyle.formMainView]}>
              <Spacing space={SH(20)} />
              <Text style={SignInStyle.logoTextBig}>Welcome Back to GreenMart!</Text>
              <Spacing space={SH(30)} />
            {/* INPUT FORM */}
              <View>
                <Input
                  label="Email"
                  placeholder="example@gmail.com"
                  onChangeText={(text) => setState({ ...state, email: text })}
                  value={state.email}
                  autoComplete="email"
                />
                <Spacing space={SH(15)} />
                <Input
                  label="Password"
                  placeholder="**********"
                  onChangeText={(text) => setState({ ...state, password: text })}
                  value={state.password}
                  secureTextEntry={secureTextEntry}
                  setSecureTextEntry={(e) => { setSecureTextEntry(!secureTextEntry) }}
                  ifSecureTextEye={true}
                  autoComplete="password"

                />
              </View>
              <Spacing space={SH(10)} />
            {/* REMEMBER WITH FORGOT PASSWORD */}
              <View style={SignInStyle.forgotView}>
                <CheckBoxButton onPress={setRemember} checked={remember} lable="Remember me" />
                <TouchableOpacity onPress={() => { navigation.navigate(RouteName.FORGOT_PASSWORD_SCREEN) }} >
                  <Text style={SignInStyle.forgotText}>Forgot Password?</Text>
                </TouchableOpacity>
              </View>
            <Spacing space={SH(30)} />
            <Button
              title="Sign In"
              onPress={() => { navigation.navigate(RouteName.OTP_VERYFY_SCREEN) }}
            />
            <Spacing space={SH(50)} />
            {/* DIVIDER WITH TEXT */}
            <View style={SignInStyle.dividerContainer}>
              <View style={SignInStyle.line} />
              <Text style={SignInStyle.dividerText}>Or sign in with</Text>
              <View style={SignInStyle.line} />
            </View>
            <Spacing space={SH(40)} />
            {/* SOCIAL BUTTON */}
            <View style={SignInStyle.socialButtonsContainer}>
              <TouchableOpacity style={SignInStyle.socialButton}>
                <Image
                  source={images.google}
                  style={SignInStyle.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={SignInStyle.socialButton}>
                <Image
                  source={images.apple}
                  style={SignInStyle.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={SignInStyle.socialButton}>
                <Image
                  source={images.facebook}
                  style={SignInStyle.icon}
                />
              </TouchableOpacity>

            </View>
            <Spacing space={SH(40)} />
            <View style={SignInStyle.notRegisterView}>
              <Text style={SignInStyle.notRegisterText}>Dont have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.SIGNUP_SCREEN)}>
                <Text style={SignInStyle.notRegisterBoldText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
              <Spacing space={SH(20)} />
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};
export default SignInScreen;
