import React, { useState, useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Spacing, NotificationSettings } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper, NotificationSettingData } from '../../helper';
import { Styles } from '../../styles';

const NotificationSettingsScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const NotificationStyle = Styles(colors)
  const [NotificationData, setNotificationData] = useState([]);
  useEffect(() => {
    setNotificationData(NotificationSettingData)
  }, [])

  const onToggleSwitch = (id) => {
    const updatedItems = NotificationData.map((item) =>
      item.id === id ? { ...item, isChecked: !item.isChecked } : item
    );
    setNotificationData(updatedItems);
  };
  return (
    <Container containerPropStyle={NotificationStyle.themeBackgroundColor}>
      {NotificationData.length != 0 &&
        <ScrollView>
          <Spacing space={SH(20)} />
          <View style={[NotificationStyle.paddingHorizontalCommon, NotificationStyle.width100]}>
            {NotificationData.map((item, index) => {
              return (
                <NotificationSettings key={index} item={item} index={index} {...props} onToggleSwitch={() => onToggleSwitch(item.id)} />
              )
            })}
          </View>
        </ScrollView>
      }
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(NotificationSettingsScreen);
