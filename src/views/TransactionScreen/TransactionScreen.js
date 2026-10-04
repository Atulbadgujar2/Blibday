import React, { useState } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { Container, NotFound, Spacing, Transaction } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper, TransactionHistoryData } from '../../helper';
import { Styles } from '../../styles';
import images from '../../images';

const TransactionScreen = (props) => {
  const { colors } = useThemeHelper();
  const MyWalletStyle = Styles(colors)
  return (
    <Container containerPropStyle={MyWalletStyle.themeBackgroundColor}>
      {TransactionHistoryData.length != 0 ?
        <ScrollView>
          <Spacing space={SH(20)} />
          <View style={[MyWalletStyle.paddingHorizontalCommon, MyWalletStyle.width100]}>
            <Text style={MyWalletStyle.myWalletHistoryText} >History</Text>
            <Spacing space={SH(15)} />
            {TransactionHistoryData.map((item, index) => {
              return (
                <Transaction key={index} item={item} index={index} {...props} />
              )
            })}
          </View>
        </ScrollView>
        :
        <View style={[MyWalletStyle.paddingHorizontalCommon, MyWalletStyle.width100]}>
          <NotFound
            title=""
            content=""
            image={images.notfound}
            iftype="LottieIcon"
            ifnoBg={true}
            height={"100%"}
          />
        </View>
      }
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(TransactionScreen);
