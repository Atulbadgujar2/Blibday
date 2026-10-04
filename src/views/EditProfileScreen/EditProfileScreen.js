import React, { useState } from 'react';
import { Text, View, ScrollView, KeyboardAvoidingView, Platform, TouchableOpacity } from 'react-native';
import { AlertModal, Button, Container, Input, Spacing, SvgIcons, VectorIcons } from '../../components';
import { connect } from 'react-redux';
import { SH, SF, useThemeHelper, SW, UserDetails } from '../../helper';
import { AuthenticationStyle } from '../../styles';
import { RouteName } from '../../routes';

const EditProfileScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper()
  const EditProfileStyle = AuthenticationStyle(colors)
  const [state, setState] = useState(UserDetails);
  const [modalVisible, setModalVisible] = useState(false)
  const [handleGender, setHandleGender] = useState(false)

  const handleModal = () => {
    setModalVisible(false);
    navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR, { screen: RouteName.MY_PROFILE_SCREEN });
  }

  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={EditProfileStyle.container}>
          <ScrollView>
            <View style={EditProfileStyle.formMainView}>
              <View>
                <Spacing space={SH(20)} />
                <View style={EditProfileStyle.genderMainView}>
                  <TouchableOpacity style={EditProfileStyle.genderSwapView} onPress={() => setHandleGender(!handleGender)}>
                    <VectorIcons iconFamily="AntDesign" name="swap" color={colors.white} size={SF(20)} />
                  </TouchableOpacity>
                  <View style={EditProfileStyle.genderIconView}>
                    <SvgIcons name={handleGender ? "male" : "female"} height={SW(105)} width={SW(105)} />
                  </View>
                </View>
                <Spacing space={SH(10)} />
                <Text style={EditProfileStyle.genderFullName}>{state.name}{' '}{state.lastname}</Text>
                <Spacing space={SH(10)} />
              </View>
              <Spacing space={SH(20)} />
              <Input
                label="First Name"
                placeholder="XXXXX"
                onChangeText={(text) => setState({ ...state, name: text })}
                value={state.name}
                autoComplete="name"
              />
              <Spacing space={SH(15)} />
              <Input
                label="Last Name"
                placeholder="XXXXX"
                onChangeText={(text) => setState({ ...state, lastname: text })}
                value={state.lastname}
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
                label="Phone Number"
                placeholder="+911234567890"
                onChangeText={(text) => setState({ ...state, phone: text })}
                value={state.phone}
                disabled={true}
              />
              <Spacing space={SH(20)} />
            </View>
          </ScrollView>
          <View style={EditProfileStyle.formMainView}>
            <Spacing space={SH(20)} />
            <Button
              title="Update Profile"
              onPress={() => { setModalVisible(true); }}
            />
            <Spacing space={SH(20)} />
          </View>
        </View>
      </KeyboardAvoidingView>
      <AlertModal
        modalVisible={modalVisible}
        buttonText="OK"
        onPress={() => handleModal()}
        message={"Your profile has been updated successfully."}
        iconVisible={true}
      />
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(EditProfileScreen);
