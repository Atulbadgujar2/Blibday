import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Container, Input, Spacing } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper } from '../../helper';
import { AuthenticationStyle } from '../../styles';
import { RouteName } from '../../routes';

const ChangePasswordScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const ChangePasswordStyle = AuthenticationStyle(colors)
  const stateArray = {
    newPassword: "",
    confirmPassword: "",
  };
  const [state, setState] = useState(stateArray);
    const [secureTextEntry, setSecureTextEntry] = useState(true);
    const [secureTextEntryConfirm, setSecureTextEntryConfirm] = useState(true);
  
  return (
      <Container>
         <KeyboardAvoidingView
           behavior={Platform.OS === 'ios' ? 'padding' : 'height'} 
           style={{ flex: 1 }}
           >
           <ScrollView contentContainerStyle={ChangePasswordStyle.scrollview} keyboardShouldPersistTaps="handled">
           <View style={[ChangePasswordStyle.container,ChangePasswordStyle.formMainView]}>
                 <Text style={ChangePasswordStyle.logoTextBig}>New Password!</Text>
                 <Spacing space={SH(10)} />
                  <Text style={ChangePasswordStyle.logoText}>Your new password must be different from previosusly used password.</Text>
                 <Spacing space={SH(40)} />
            <View>
              <Input
                label="New Password"
                placeholder="**********"
                onChangeText={(text) => setState({ ...state, newPassword: text })}
                value={state.newPassword}
                secureTextEntry={secureTextEntry}
                setSecureTextEntry={(e) => { setSecureTextEntry(!secureTextEntry) }}
                ifSecureTextEye={true}
                autoComplete="password"
              />
              <Spacing space={SH(20)} />
              <Input
                label="Confirm Password"
                placeholder="**********"
                onChangeText={(text) => setState({ ...state, confirmPassword: text })}
                value={state.confirmPassword}
                secureTextEntry={secureTextEntryConfirm}
                setSecureTextEntry={(e) => { setSecureTextEntryConfirm(!secureTextEntryConfirm) }}
                ifSecureTextEye={true}
                autoComplete="password"
              />
            </View>
              
              <Spacing space={SH(40)} />
                        <Button
                          title="Send"
                          onPress={() => { navigation.navigate(RouteName.SIGNIN_SCREEN) }}
                        />
          
              <Spacing space={SH(70)} />
        </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(ChangePasswordScreen);
