import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Container, ProductRowCards, Spacing } from "../../components";
import { MyCartData, useThemeHelper } from "../../helper";
import { InvocieScreenStyle, Styles } from "../../styles";
import { connect } from 'react-redux';

const InvoiceScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors);
  const styles = InvocieScreenStyle(colors);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(MyCartData)
  }, [])
  
  const products = [
    { id: 1, name: "Organic Green Tea", qty: 1, price: 199 },
    { id: 2, name: "Vitamin C Tablets", qty: 2, price: 350 },
    { id: 3, name: "Protein Powder 1kg", qty: 1, price: 899 },
  ];

  const subtotal = products.reduce((s, p) => s + p.price * p.qty, 0);
  const tax = subtotal * 0.18;
  const delivery = 40;
  const total = subtotal + tax + delivery;

  return (
    <Container containerPropStyle={colors.background_color}>
      <ScrollView>
        <View style={Style.paddingHorizontalCommon}>

          {/* INVOICE HEADER */}
          <View style={styles.header}>
            <Text style={styles.title}>INVOICE</Text>
            <Text style={styles.invNo}>Invoice #: INV-45231</Text>
            <Text style={styles.date}>Date: 25 Nov 2025</Text>
          </View>

          {/* CUSTOMER INFO */}
          <View style={styles.block}>
            <Text style={styles.sectionTitle}>Customer Details</Text>

            <Text style={styles.text}>Name: John Smith</Text>
            <Text style={styles.text}>Phone: +91 98765 43210</Text>
            <Text style={styles.text}>
              Address: 221B Baker Street, London, UK
            </Text>
          </View>
        </View>

        {/* PRODUCT LIST */}
        <View style={styles.blockProduct}>
          <View style={Style.paddingHorizontalCommon}>
            <Text style={styles.sectionTitle}>Product Items</Text>
          </View>
          <ProductRowCards
            items={cartItems.slice(0, 2)}
          />
        </View>
        <View style={Style.paddingHorizontalCommon}>
          {/* PRICE BREAKDOWN */}
          <View style={styles.block}>
            <Text style={styles.sectionTitle}>Price Details</Text>

            <View style={styles.row}>
              <Text style={styles.small}>Subtotal</Text>
              <Text style={styles.small}>₹{subtotal.toFixed(2)}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.small}>Tax (18%)</Text>
              <Text style={styles.small}>₹{tax.toFixed(2)}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.small}>Delivery Charges</Text>
              <Text style={styles.small}>₹{delivery.toFixed(2)}</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.row}>
              <Text style={styles.total}>Total</Text>
              <Text style={styles.total}>₹{total.toFixed(2)}</Text>
            </View>
          </View>

          {/* PAYMENT INFO */}
          <View style={styles.block}>
            <Text style={styles.sectionTitle}>Payment Details</Text>
            <Text style={styles.text}>Mode: Razorpay</Text>
            <Text style={styles.text}>Status: Paid</Text>
            <Text style={styles.text}>Transaction ID: TXN98344212</Text>
          </View>

          {/* FOOTER */}
          <Text style={styles.footer}>
            Thank you for shopping with us!
          </Text>
          <Spacing space={90} />
        </View>
      </ScrollView>
      {/* DOWNLOAD / SHARE BUTTON */}
      <TouchableOpacity activeOpacity={0.8} style={styles.downloadBtn}>
        <Text style={styles.downloadText}>Download Invoice</Text>
      </TouchableOpacity>

    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(InvoiceScreen);


