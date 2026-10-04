import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, NotFound, Spacing, CouponCards, CouponDetail } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper, MyCouponData } from '../../helper';
import { Styles } from '../../styles';
import images from '../../images';

const CouponScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDetails, setModalDetails] = useState(MyCouponData[0]);

  const onHandleDetails = (index) => {
    setModalDetails(MyCouponData[index])
    setModalVisible(true)
  }
  return (
    <Container>
      {MyCouponData.length != 0 ?
        <ScrollView>
          <Spacing space={SH(15)} />
          <View style={[Style.paddingHorizontalCommon, Style.width100]}>
            <CouponCards
              items={MyCouponData}
              onHandleDetails={onHandleDetails}
            />
            <Spacing space={SH(15)} />
          </View>
        </ScrollView>
        :
        <View style={[Style.paddingHorizontalCommon, Style.width100]}>
          <NotFound
            title="Coupon Not available!!"
            content="Seems Like there are no coupons for you at this moment."
            image={images.couponDiscount}
            iftype="LottieIcon"
            height="90%"
          />
        </View>
      }

      {/* Details Modal */}
      <CouponDetail
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        data={modalDetails}
      />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(CouponScreen);
