import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Button, Container, Spacing, VectorIcons } from '../../components';
import { connect } from 'react-redux';
import { SH, SF, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';
import { RouteName } from '../../routes';

const LocationScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const LocationStyle = Styles(colors);
  return (
    <Container>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={LocationStyle.flex}
      >
        <ScrollView contentContainerStyle={LocationStyle.scrollview} keyboardShouldPersistTaps="handled">
          <View style={[LocationStyle.container, LocationStyle.paddingHorizontalCommon]}>
            <View style={LocationStyle.locationIconView}>
              <VectorIcons iconFamily="Fontisto" name="map-marker-alt" size={SF(50)} color={colors.pine_green_color} />
            </View>
            <Spacing space={SH(40)} />
            <Text style={LocationStyle.locationText}>What is your location?</Text>
            <Spacing space={SH(10)} />
            <Text style={LocationStyle.locationSmallText}>We need to know yopur location in order to suggest nearby services.</Text>
            <Spacing space={SH(30)} />
            <View style={{ width: '100%' }}>
              <Button
                title="Allow Location Access"
                onPress={() => { navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR); }}
              />
            </View>
            <Spacing space={SH(30)} />
            <TouchableOpacity onPress={() => { navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR); }}>
              <Text style={LocationStyle.locationLinkText}>Enter Location Manually</Text>
            </TouchableOpacity>
            <Spacing space={SH(80)} />
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
export default connect(mapStateToProps, null)(LocationScreen);
