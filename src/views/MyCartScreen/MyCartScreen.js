import React, { useState, useMemo, useCallback } from 'react';
import { View, ScrollView, Image, TouchableOpacity, Text, TextInput } from 'react-native';
import { Container, NotFound, Spacing, AppHeader, Button, SvgIcons, SvgIconsFiles, Input } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper, MyCartData, SF, SW, BottomTabGap } from '../../helper';
import { MyCartScreenStyle, Styles } from '../../styles';
import images from '../../images';
import { CartCards } from '../../components/Cart';
import { RouteName } from '../../routes';
import { CURRENCY } from '../../constants';
import { useFocusEffect } from '@react-navigation/native';

const MyCartScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const tabHeight = BottomTabGap();
  const Style = Styles(colors)
  const styles = MyCartScreenStyle(colors)
  const [cartItems, setCartItems] = useState([]);
  const [promoCode, setPromoCode] = useState('');

  useFocusEffect(
    useCallback(() => {
      setCartItems(MyCartData)
    }, [])
  );


  const handleApply = () => {
    if (promoCode.trim() === '') {
      alert('Please enter a promo code');
      return;
    }
    alert(`Promo code "${promoCode}" applied!`);
  };

  const handleDelete = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Increment Quantity
  const handleIncrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: (item.qty || 0) + 1 } : item
      )
    );
  };

  // Decrement Quantity
  const handleDecrement = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

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
    <Container containerPropStyle={{backgroundColor:colors.background_white_color}}>
      {cartItems.length != 0 ?
        <>
          <View>
            <ScrollView>
                 <Image source={images.backgroundimage}
              style={styles.fullBgImage} />
              <View style={styles.layerView} />
              <Spacing space={SH(10)} />
              <CartCards
                items={cartItems}
                handleDelete={handleDelete}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
              />

              <Spacing space={SH(20)} />
              <View style={[Style.paddingHorizontalCommon, Style.width100]}>

                <View style={[Style.paddingHorizontalCommon, Style.width100, styles.summaryContainerRow]}>
                  <Text style={[styles.summaryMainLabel]}>Payment Details</Text>
                  <Spacing space={SH(15)} />

                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Sub Total</Text>
                    <Text style={styles.summaryValue}>{CURRENCY}{subTotal.toFixed(2)}</Text>
                  </View>
                  <Spacing space={SH(7)} />

                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Discount</Text>
                    <Text style={styles.discountValue}>- {CURRENCY}{discount.toFixed(2)}</Text>
                  </View>
                  <Spacing space={SH(7)} />

                  <View style={styles.summaryRow}>
                    <Text style={styles.summaryLabel}>Delivery Fee</Text>
                    <Text style={styles.summaryValue}>
                      {deliveryFee === 0 ? 'Free' : `$${deliveryFee.toFixed(2)}`}
                    </Text>
                  </View>

                  <View style={styles.divider} />

                  <View style={styles.summaryRow}>
                    <Text style={styles.totalLabel}>Total Amount</Text>
                    <Text style={styles.totalValue}>{CURRENCY}{total.toFixed(2)}</Text>
                  </View>
                  <Spacing space={SH(20)} />

                  {/* Save Order */}
                  <TouchableOpacity style={styles.saveOrderView}>
                    <SvgIconsFiles name="SaleIcon" size={20} color={colors.pine_green_color} />
                    <Text style={[styles.saveOrderText]}>You'll save $20 on this order!</Text>
                  </TouchableOpacity>

                </View>
              </View>

              <Spacing space={SH(30)} />
              {/* Promo Code */}
              <View style={[Style.paddingHorizontalCommon, Style.width100]}>
                <View style={styles.promoCodeView}>
                  <TextInput
                    style={styles.promoCodinput}
                    placeholder="Enter promo code"
                    placeholderTextColor={colors.light_gray}
                    value={promoCode}
                    onChangeText={setPromoCode}
                  />
                  <TouchableOpacity style={styles.promoCodButtonView} onPress={handleApply}>
                    <Text style={styles.promoCodButtonText}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Spacing space={SH(tabHeight * 3)} />
            </ScrollView>
            {/* Place order */}
          </View>

          <View style={[styles.bottomFix]} />
          <View style={[styles.bottomContainer]}>
            <View style={styles.summaryRow1}>
              <Text style={[styles.totalValue, { color: colors.black_to_white_color }]}>{CURRENCY}{total.toFixed(2)}</Text>
              <Text style={[styles.orderText]}>You saved $20</Text>
            </View>
            {/* 🟩 Place Order Button */}
            <View>
              <Button title="Place Order"
                buttonStyle={styles.placeOrderBtn}
                buttonTextStyle={{ fontSize: SF(14) }}
                onPress={() => navigation.navigate(RouteName.CHECKOUT_SCREEN)}
              />
            </View>
          </View>
        </>
        :
        <View style={[Style.paddingHorizontalCommon, Style.width100]}>
          <NotFound
            title="Your Cart is Empty!!"
            content="It's a nice day to buy the items you saved for later!"
            image={images.shoppingCart}
            iftype="LottieIcon"
            height="90%"
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
export default connect(mapStateToProps, null)(MyCartScreen);
