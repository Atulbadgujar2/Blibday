import React, { useEffect, useState, useMemo } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { Button, Container, Spacing, SvgIconsFiles, VectorIcons } from '../../components';
import { MyCartScreenStyle, Styles } from '../../styles';
import { CheckoutPaymentMethodData, MyCartData, SF, SH, useThemeHelper } from '../../helper';
import { RouteName } from '../../routes';
import { connect } from 'react-redux';
import { CURRENCY } from '../../constants';

const CheckoutScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  const cartStyles = MyCartScreenStyle(colors)
  const [cartItems, setCartItems] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(0);

  useEffect(() => {
    setCartItems(MyCartData)
  }, [])

  // Cart Totals
  const { subTotal, discount, deliveryFee, total } = useMemo(() => {
    const subTotalValue = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    const discountValue = cartItems.reduce(
      (sum, item) => sum + (item.oldPrice - item.price) * item.qty,
      0
    );
    const deliveryFeeValue = subTotalValue > 200 ? 0 : 20;
    const totalValue = subTotalValue - discountValue + deliveryFeeValue;

    return {
      subTotal: subTotalValue,
      discount: discountValue,
      deliveryFee: deliveryFeeValue,
      total: totalValue,
    };
  }, [cartItems]);

  return (
    <Container containerPropStyle={Style.themeBackgroundColor}>
      {/* Scrollable Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[Style.paddingHorizontalCommon]}>

          {/* Address Section */}
          <Spacing space={SH(15)} />
          <Text style={cartStyles.summaryMainLabel}>Delivery Address</Text>
          <Spacing space={SH(10)} />

          <View style={Style.checkoutcardRow}>

            <View style={Style.flexDirectiong10}>
              <Text style={Style.checkoutaddrTitle}>John Sharma</Text>
              <Text style={Style.checkouttagTitle}>Home</Text>
            </View>

            <Text style={Style.checkoutaddrText}>
              302, Sun Residency, Satellite, Ahmedabad - 380015
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.SAVE_ADDRESS_SCREEN)} style={Style.checkoutchangeBtn}>
              <Text style={Style.checkoutchangeText}>Change</Text>
            </TouchableOpacity>
          </View>

          {/* Order Items */}
          <Spacing space={SH(20)} />
          <Text style={cartStyles.summaryMainLabel}>Grocery Basket ({cartItems.length} Items)</Text>
          <Spacing space={SH(10)} />
          <View style={Style.checkoutcardRow}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={Style.checkoutcarInnerRow}
            >
              {cartItems.map(
                (item, idx) => (
                  <View key={idx} style={Style.checkoutimageRow}>
                    <Image source={item.image} style={Style.basketImage} />
                  </View>
                )
              )}
            </ScrollView>
            <Spacing space={SH(15)} />

            <View style={cartStyles.priceRow}>
              <Text style={[cartStyles.price]}>{CURRENCY}{total.toFixed(2)}</Text>
              <Text style={[Style.oldPriceSmall]}>{CURRENCY}{total.toFixed(2)}</Text>
            </View>
            <Text style={Style.checkoutaddrText}>Delivery in 10 to 30 mins (6)</Text>
          </View>

          {/* Payment Method */}
          <Spacing space={SH(20)} />
          <Text style={cartStyles.summaryMainLabel}>Payment Method</Text>
          <Spacing space={SH(10)} />
          <View style={Style.checkoutcardRow}>
            {CheckoutPaymentMethodData.map((item, index) => (
              <TouchableOpacity
                onPress={() => setSelectedPayment(index)}
                key={index}
                style={[Style.checkoutpayRow]} >
                <View style={Style.addMoneycardLeft}>
                  <View style={[Style.addMoneycardIconBox, { backgroundColor: colors.tea_green_light_color }]}>
                    <Image source={item.image} style={Style.addMoneycardImage} />
                  </View>
                  <Text style={Style.addMoneycardTitle}>{item?.name}</Text>
                </View>
                <VectorIcons iconFamily={'Ionicons'} name={selectedPayment === index ? "radio-button-on" : "radio-button-off"} size={22} color={colors.primary_color} />
              </TouchableOpacity>
            ))}
          </View>

          {/* Price Details */}
          <Spacing space={SH(20)} />
          <Text style={[cartStyles.summaryMainLabel]}>Payment Details</Text>
          <Spacing space={SH(10)} />
          <View style={Style.checkoutcardRow}>


            <View style={cartStyles.summaryRow}>
              <Text style={cartStyles.summaryLabel}>Sub Total</Text>
              <Text style={cartStyles.summaryValue}>{CURRENCY}{subTotal.toFixed(2)}</Text>
            </View>
            <Spacing space={SH(7)} />

            <View style={cartStyles.summaryRow}>
              <Text style={cartStyles.summaryLabel}>Discount</Text>
              <Text style={cartStyles.discountValue}>- {CURRENCY}{discount.toFixed(2)}</Text>
            </View>
            <Spacing space={SH(7)} />

            <View style={cartStyles.summaryRow}>
              <Text style={cartStyles.summaryLabel}>Delivery Fee</Text>
              <Text style={cartStyles.summaryValue}>
                {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
              </Text>
            </View>

            <View style={cartStyles.divider} />

            <View style={cartStyles.summaryRow}>
              <Text style={cartStyles.totalLabel}>Total Amount</Text>
              <Text style={cartStyles.totalValue}>{CURRENCY}{total.toFixed(2)}</Text>
            </View>
            <Spacing space={SH(20)} />

            <TouchableOpacity style={cartStyles.saveOrderView}>
              <SvgIconsFiles name="SaleIcon" size={20} color={colors.pine_green_color} />
              <Text style={[cartStyles.saveOrderText]}>You'll save $20 on this order!</Text>
            </TouchableOpacity>

          </View>
        </View>
        <Spacing space={SH(15)} />

      </ScrollView>

      {/* Bottom Fixed Button */}
      <View style={Style.checkoutbottomBar}>
        <View style={cartStyles.summaryRow1}>
          <Text style={[cartStyles.totalValue, { color: colors.black_to_white_color }]}>{CURRENCY}{total.toFixed(2)}</Text>
          <Text style={[cartStyles.orderText]}>You saved $20</Text>
        </View>
        <View>
          <Button title="Place Order"
            buttonStyle={cartStyles.placeOrderBtn}
            buttonTextStyle={{ fontSize: SF(14) }}
            onPress={() => navigation.navigate(RouteName.ORDER_SUCCESS_SCREEN)}
          />
        </View>
      </View>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(CheckoutScreen);



