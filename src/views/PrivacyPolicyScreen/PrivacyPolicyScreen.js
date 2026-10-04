import React from 'react';
import { Text, ScrollView } from 'react-native';
import { Container, Spacing } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';
import { String } from '../../constants';

const PrivacyPolicyScreen = (props) => {
  const { colors } = useThemeHelper();
  const PrivacyPolicyStyle = Styles(colors);
  return (
    <Container>
      <ScrollView style={PrivacyPolicyStyle.paddingHorizontalCommon}>
        <Spacing space={SH(20)} />
        <Text style={[PrivacyPolicyStyle.commonScreenHeadingText]}>Privacy Policy of {String.appname}</Text>
        <Spacing space={SH(15)} />
        <Text style={[PrivacyPolicyStyle.commonScreenText]}>Welcome to {String.appname}!</Text>
        <Spacing space={SH(10)} />
        <Text style={[PrivacyPolicyStyle.commonScreenTextSmall]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        <Spacing space={SH(10)} />
        <Text style={[PrivacyPolicyStyle.commonScreenTextSmall]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        <Spacing space={SH(20)} />
        <Text style={[PrivacyPolicyStyle.commonScreenText]}>Privacy Policy</Text>
        <Spacing space={SH(10)} />
        <Text style={[PrivacyPolicyStyle.commonScreenTextSmall]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        <Spacing space={SH(20)} />
        <Text style={[PrivacyPolicyStyle.commonScreenText]}>Collection of your information</Text>
        <Spacing space={SH(10)} />
        <Text style={[PrivacyPolicyStyle.commonScreenTextSmall]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        <Spacing space={SH(20)} />
        <Text style={[PrivacyPolicyStyle.commonScreenText]}>Privacy Policy</Text>
        <Spacing space={SH(10)} />
        <Text style={[PrivacyPolicyStyle.commonScreenTextSmall]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        <Spacing space={SH(10)} />
        <Text style={[PrivacyPolicyStyle.commonScreenTextSmall]}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Text>
        <Spacing space={SH(20)} />
      </ScrollView>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(PrivacyPolicyScreen);
