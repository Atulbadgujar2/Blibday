import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import { Container, NotFound, Spacing, VectorIcons } from '../../components';
import { connect } from 'react-redux';
import { PaymentMethodData, SH, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';
const PaymentMethodScreen = (props) => {
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  return (
    <Container containerPropStyle={Style.themeBackgroundColor}>
      <ScrollView>
        <Spacing space={SH(20)} />
        <View style={[Style.paddingHorizontalCommon, Style.width100]}>
          {PaymentMethodData.map((item, index) => {
            return (
              <View key={index}>
                <Text style={Style.myWalletHistoryText} >{item.type}</Text>
                <Spacing space={SH(15)} />
                {item?.data.map((items, index) => {
                  return (
                    <View key={index}>
                      <TouchableOpacity style={[Style.payMethodViewContainer]} >
                        <View style={Style.addMoneycardLeft}>
                          <View style={[Style.addMoneycardIconBox, { backgroundColor: colors.tea_green_light_color }]}>
                            <Image source={items.image} style={Style.addMoneycardImage} />
                          </View>
                          <Text style={Style.addMoneycardTitle}>{items.name}</Text>
                        </View>
                        <VectorIcons iconFamily={'MaterialDesignIcons'} name={'chevron-right'} size={30} color={colors.primary_color} />
                      </TouchableOpacity>
                      <Spacing space={SH(12)} />
                    </View>
                  )
                })}
                <Spacing space={SH(12)} />
              </View>
            )
          })}
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
export default connect(mapStateToProps, null)(PaymentMethodScreen);
