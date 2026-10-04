import React, { useContext, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Spacing, ToolTipMenu, VectorIcons } from '../../components';
import { connect } from 'react-redux';
import { SH, SF, SaveAddressData } from '../../helper';
import { AddressScreenStyle, Styles } from '../../styles';
import { useTheme } from "../../theme/ThemeProvider";
import { RouteName } from '../../routes';

const SaveAddressScreen = (props) => {
  const { navigation } = props;
  const { colors } = useContext(useTheme);
  var CommonStyles = Styles(colors);
  var AddressStyle = AddressScreenStyle(colors);
  // Store which tooltip is visible
  const [visibleTooltip, setVisibleTooltip] = useState(null);

  return (
    <Container>
      <ScrollView>
        <Spacing space={SH(20)} />
        <View style={CommonStyles.paddingHorizontalCommon}>
          {SaveAddressData.map((item, index) => {
            const isVisible = visibleTooltip === index;

            return (
              <View key={index}>
                <View key={index} style={[AddressStyle.addresBoxView, { borderWidth: index == 0 ? 1 : 0 }]} >
                  {index == 0 &&
                    <View style={AddressStyle.addresActiveView}>
                      <Text style={AddressStyle.addresActiveText}>Active</Text>
                    </View>
                  }
                  <View style={AddressStyle.addresBoxViewIcon}>
                    <VectorIcons iconFamily="MaterialDesignIcons" name={item.icon} size={SF(27)} color={colors.primary_color} />
                  </View>
                  <View style={CommonStyles.flexShrink}>
                    <Text style={AddressStyle.addresBoxTag}>{item.tag}</Text>
                    <Spacing space={SH(3)} />
                    <Text style={AddressStyle.addresText}>{item.location}</Text>
                  </View>
                  <ToolTipMenu
                    key={index}
                    onEditPress={() => { }}
                    onDeletePress={() => { }}
                    toggleTooltip={() => setVisibleTooltip(index)}
                    visible={isVisible}
                    onBackdropPress={() => setVisibleTooltip(null)}
                  />
                </View>
                <Spacing space={SH(25)} />
              </View>
            )
          }
          )}
        </View>
      </ScrollView>
      <View style={[CommonStyles.paddingHorizontalCommon]}>
        <Spacing space={SH(25)} />
        <TouchableOpacity style={AddressStyle.addAddressButton} onPress={() => navigation.navigate(RouteName.ADD_ADDRESS_SCREEN)}>
          <VectorIcons iconFamily="MaterialCommunityIcons" name={'plus'} size={SF(27)} color={colors.primary_color} />
          <Text style={AddressStyle.addAddressButtonText}>Add New Address</Text>
        </TouchableOpacity>
        <Spacing space={SH(25)} />
      </View>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(SaveAddressScreen);