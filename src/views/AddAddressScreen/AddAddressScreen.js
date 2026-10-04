import React, { useContext, useState } from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { AddAddressModal, Button, Container, Spacing, VectorIcons } from '../../components';
import { SF, SH } from '../../helper';
import { useTheme } from "../../theme/ThemeProvider";
import { AddressScreenStyle, Styles } from '../../styles';
import { RouteName } from '../../routes';
import { connect } from 'react-redux';

const AddAddressScreen = (props) => {
  const { navigation } = props;
  const { colors } = useContext(useTheme);
  const CommonStyle = Styles(colors);
  const AddressStyle = AddressScreenStyle(colors);
  const [modalVisible, setModalVisible] = useState(false);
  const stateArray = {
    address: "",
    floor: "",
    landmark: "",
    label: 1
  };
  const [state, setState] = useState(stateArray);

  const [region, setRegion] = useState({
    latitude: 40.7128, // New York City
    longitude: -74.0060,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [marker, setMarker] = useState({
    latitude: 40.7128,
    longitude: -74.0060,
  });

  const handleConfirm = () => {
    if (marker) {
      // You can save this location in your backend or app state
      console.log('Selected Location:', marker);
      setModalVisible(true)
    }
  };
  const handlewSaveAddress = () => {
    setModalVisible(false)
    navigation.navigate(RouteName.SAVE_ADDRESS_SCREEN)
  };

  if (!region) {
    return (
      <View style={CommonStyle.centerView}>
        <Text>Fetching your location...</Text>
      </View>
    );
  }

  return (
    <Container>
      <MapView
        style={CommonStyle.flex}
        initialRegion={region}
        onRegionChangeComplete={(r) => setRegion(r)}
        onPress={(e) => setMarker(e.nativeEvent.coordinate)}
      >
        {marker && <Marker coordinate={marker} title={"This location"} draggable onDragEnd={(e) => setMarker(e.nativeEvent.coordinate)} />}
      </MapView>
      <View style={AddressStyle.AddAddressFooter}>
        <Text style={AddressStyle.AddAddressText}>Deliver to:</Text>
        <Spacing space={SH(10)} />
        <View style={AddressStyle.AddAddressDetailsView}>
          <View style={AddressStyle.AddAddressHeadingView}>
            <VectorIcons iconFamily="MaterialDesignIcons" name={'map-marker-radius-outline'} size={SF(25)} color={colors.primary_color} />
            <Text style={AddressStyle.AddAddressHeadingText}>London EC2A 4DP</Text>
          </View>
          <Spacing space={SH(10)} />
          <Text style={AddressStyle.AddAddressText}>18 High Street, Shoreditch, London EC2A 4DP, United Kingdom</Text>
        </View>
        <Spacing space={SH(20)} />
        <Button title="Confirm Location" onPress={handleConfirm} />
      </View>
      <AddAddressModal modalVisible={modalVisible} setModalVisible={setModalVisible} state={state} setState={setState} onPress={handlewSaveAddress} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(AddAddressScreen);


