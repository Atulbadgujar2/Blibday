import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { Container, NotFound, Spacing, MyWallet, GradientComponent } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper, MyWalletData, SW } from '../../helper';
import { Styles } from '../../styles';
import images from '../../images';
import { RouteName } from '../../routes';
import { CURRENCY } from '../../constants';

const MyWalletScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const MyWalletStyle = Styles(colors)
  return (
    <Container>

      <ScrollView>
        <Spacing space={SH(20)} />
        <View style={[MyWalletStyle.paddingHorizontalCommon, MyWalletStyle.width100]}>
          <GradientComponent
            setColors={[colors.black, colors.primary_color]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            styles={{ borderRadius: SW(20)}}
          >
            <View style={MyWalletStyle.myWalletBox} >
              <View style={MyWalletStyle.myWalletShapeView}>
                <View style={MyWalletStyle.myWalletShapeLeftView} />
                <View style={MyWalletStyle.myWalletShapeRightView} />
              </View>
              <View>
                <Text style={MyWalletStyle.myWalletBalanceText}>Available Balance</Text>
                <Spacing space={SH(5)} />

                <Text style={MyWalletStyle.myWalletTotalAmountText} >{CURRENCY}900.00</Text>
                <Spacing space={SH(10)} />

                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.ADD_MONEY_SCREEN)}
                  style={MyWalletStyle.myWalletAddButton}>
                  <Text style={MyWalletStyle.myWalletAddButtonText}>+ Add Money</Text>
                </TouchableOpacity>
              </View>
            </View>
          </GradientComponent>
          <Spacing space={SH(30)} />
          <Text style={MyWalletStyle.myWalletHistoryText} >Wallet Hostory</Text>

          {MyWalletData.length != 0 ?
            <>
              <Spacing space={SH(15)} />

              {MyWalletData.map((item, index) => {
                return (
                  <MyWallet key={index} item={item} index={index} {...props} />
                )
              })}
            </>
            :
            <View style={[MyWalletStyle.paddingHorizontalCommon, MyWalletStyle.width100]}>
              <NotFound
                title="No Data"
                content="Your Wallet is empty"
                image={images.notfoundimg}
                ifnoBg={true}
                height={"80%"}
              />
            </View>
          }
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
export default connect(mapStateToProps, null)(MyWalletScreen);
