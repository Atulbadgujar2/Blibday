import React, { useState } from 'react';
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Platform, Image, ScrollView } from 'react-native';
import { AuthenticationStyle } from '../../../styles';
import { Button, Container, Spacing, Input, CheckBoxButton } from '../../../components';
import { SH, useThemeHelper } from '../../../helper';
import { RouteName } from '../../../routes';
import images from '../../../images';

const SignUpScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const SignUpStyle = AuthenticationStyle(colors)
  const stateArray = {
    name: "",
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
        <ScrollView contentContainerStyle={SignUpStyle.scrollview} keyboardShouldPersistTaps="handled">
        <View style={[SignUpStyle.container,SignUpStyle.formMainView]}>
              <Spacing space={SH(20)} />
              <Text style={SignUpStyle.logoTextBig}>Welcome to GreenMart!</Text>
              <Spacing space={SH(30)} />
            {/* INPUT FORM */}
              <View>
                <Input
                  label="Name"
                  placeholder="John Doe"
                  onChangeText={(text) => setState({ ...state, name: text })}
                  value={state.name}
                  autoComplete="name"
                />
                <Spacing space={SH(15)} />
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
            {/* AGREE WITH TERMS CONDITION */}
              <View style={SignUpStyle.termsView}>
                <CheckBoxButton onPress={setRemember} checked={remember} lable="Agree with" /> 
                <TouchableOpacity onPress={() => { navigation.navigate(RouteName.TERMS_CONDITION_SCREEN) }} >
                  <Text style={SignUpStyle.forgotText}>Terms & Condition</Text>
                </TouchableOpacity>
              </View>
            <Spacing space={SH(30)} />
            <Button
              title="Sign Up"
              onPress={() => { navigation.navigate(RouteName.OTP_VERYFY_SCREEN) }}
            />
            <Spacing space={SH(50)} />
            {/* DIVIDER WITH TEXT */}
            <View style={SignUpStyle.dividerContainer}>
              <View style={SignUpStyle.line} />
              <Text style={SignUpStyle.dividerText}>Or sign up with</Text>
              <View style={SignUpStyle.line} />
            </View>
            <Spacing space={SH(40)} />
            {/* SOCIAL BUTTON */}
            <View style={SignUpStyle.socialButtonsContainer}>
              <TouchableOpacity style={SignUpStyle.socialButton}>
                <Image
                  source={images.google}
                  style={SignUpStyle.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={SignUpStyle.socialButton}>
                <Image
                  source={images.apple}
                  style={SignUpStyle.icon}
                />
              </TouchableOpacity>

              <TouchableOpacity style={SignUpStyle.socialButton}>
                <Image
                  source={images.facebook}
                  style={SignUpStyle.icon}
                />
              </TouchableOpacity>

            </View>
            <Spacing space={SH(40)} />
            <View style={SignUpStyle.notRegisterView}>
              <Text style={SignUpStyle.notRegisterText}>Already have an account? </Text>
              <TouchableOpacity onPress={() => navigation.navigate(RouteName.SIGNIN_SCREEN)}>
                <Text style={SignUpStyle.notRegisterBoldText}>Sign In</Text>
              </TouchableOpacity>
            </View>
              <Spacing space={SH(20)} />
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};
export default SignUpScreen;
