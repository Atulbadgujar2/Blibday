import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Container, VectorIcons } from '../../components';
import { connect } from 'react-redux';
import { SH, SettingsData, useThemeHelper } from '../../helper';
import { SettingStyle, Styles } from '../../styles';

const SettingScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const SettingStyles = SettingStyle(colors)
  const Style = Styles(colors)
  const onHandleNavigate = (e) => {
    navigation.navigate(e)
  }
  return (
    <Container>
      <ScrollView>
        <View style={[Style.paddingHorizontalCommon, Style.width100]}>
          {SettingsData.map((item, index) => {
            return (
              <TouchableOpacity key={index} style={SettingStyles.ListMainView} onPress={() => item?.navigate && onHandleNavigate(item.navigate)}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={SettingStyles.flexRowView}>
                    <VectorIcons iconFamily={item?.iconFamily} name={item?.icon} size={item?.size} color={colors.primary_color} />
                    <Text style={SettingStyles.flexRowText}>{item?.lable}</Text>
                  </View>
                  <VectorIcons iconFamily={'MaterialDesignIcons'} name={'chevron-right'} size={20} color={colors.primary_color} />
                </View>
              </TouchableOpacity>
            )
          }
          )}
        </View>
      </ScrollView>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(SettingScreen);
