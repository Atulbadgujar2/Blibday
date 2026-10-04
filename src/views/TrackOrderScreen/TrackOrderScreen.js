import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Button, Container, ProductRowCards, Spacing, TrackOrderMap, VectorIcons } from "../../components";
import { MyCartData, SH, useThemeHelper } from "../../helper";
import { Styles } from "../../styles";
import { connect } from 'react-redux';
import images from "../../images";
import { RouteName } from "../../routes";

const TrackOrdersScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(MyCartData)
  }, [])

  const steps = [
    { id: 1, label: "Order Placed", time: "20 Oct, 10:00 AM", done: true },
    { id: 2, label: "Packed", time: "20 Oct, 04:00 PM", done: true },
    { id: 3, label: "Shipped", time: "21 Oct, 09:00 AM", done: true },
    { id: 4, label: "Out for Delivery", time: "22 Oct, 08:00 AM", done: true },
    { id: 5, label: "Delivered", time: "Expected Today", done: false },
  ];

  return (
    <Container>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={[Style.paddingHorizontalCommon]}>
          <Text style={Style.trackorderId}>Order ID: #A3D45W56</Text>
        </View>
        <Spacing space={SH(10)} />
        {/* Map */}
        <TrackOrderMap />
        <Spacing space={SH(10)} />
        <View style={[Style.paddingHorizontalCommon]}>
          {/* Estimated Delivery */}
          <View style={Style.trackOrderestimateBox}>
            <VectorIcons iconFamily="Feather" name="clock" size={20} color={colors.primary_color} />
            <View>
              <Text style={Style.trackOrdereestimateLabel}>Estimated Delivery</Text>
              <Text style={Style.trackOrdereestimateDate}>Today, before 8:00 PM</Text>
            </View>
          </View>
          <Spacing space={SH(20)} />

          {/* STATUS TIMELINE */}
          <View>
            <Text style={Style.trackOrderesectionTitle}>Order Status</Text>
            <Spacing space={SH(15)} />

            {steps.map((item, index) => (
              <View key={item.id} >
                <View style={Style.trackOrderetimelineRow}>

                  {/* DOT */}
                  <View style={item.done ? Style.trackOrderedotActive : Style.trackOrderedotInactive} />

                  {/* LINE */}
                  {index < steps.length - 1 && (
                    <View style={Style.trackOrderetimelineLine} />
                  )}
                  {/* LABELS */}
                  <View style={Style.trackOrderetimelineContent}>
                    <Text style={item.done ? Style.trackOrderetimelineTextActive : Style.trackOrderetimelineText}>
                      {item.label}
                    </Text>
                    <Text style={Style.trackOrderetimelineTime}>{item.time}</Text>
                  </View>

                </View>

                <Spacing space={SH(12)} />

              </View>
            ))}
          </View>


          {/* PRODUCT SUMMARY */}

          <Spacing space={SH(10)} />
          <Text style={Style.trackOrderesectionTitle}>Product In Order</Text>
          <Spacing space={SH(15)} />
        </View>
        <View>
          <ProductRowCards
            items={cartItems.slice(0, 2)}
          />
        </View>
        <Spacing space={SH(25)} />
        <View style={[Style.paddingHorizontalCommon]}>

          {/* DELIVERY PERSON */}
          <View>
            <Text style={Style.trackOrderesectionTitle}>Delivery Partner</Text>
            <Spacing space={SH(15)} />

            <View style={Style.trackOrderedeliveryRow}>
              <Image source={images.user} style={Style.trackOrderedeliveryImg} />
              <View style={{ flex: 1 }}>
                <Text style={Style.trackOrderedeliveryName}>Rohan Jack</Text>
                <Text style={Style.trackOrderedeliveryPhone}>+91 98765 43210</Text>
              </View>
              <TouchableOpacity style={Style.trackOrderecallBtn}
                onPress={() => navigation.navigate(RouteName.CHAT_SCREEN)}
              >
                <VectorIcons iconFamily="Ionicons" name="chatbubble-ellipses" size={22} color={colors.white} />
              </TouchableOpacity>
              <TouchableOpacity style={Style.trackOrderecallBtn}>
                <VectorIcons iconFamily="Ionicons" name="call" size={22} color={colors.white} />
              </TouchableOpacity>
            </View>
          </View>
          <Spacing space={SH(25)} />

          {/* NEED HELP */}
          <TouchableOpacity onPress={() => navigation.navigate(RouteName.SUPPORT_SCREEN)} style={Style.trackOrderehelpBtn}>
            <Text style={Style.trackOrderehelpText}>Need Help?</Text>
          </TouchableOpacity>
          <Spacing space={SH(10)} />

          {/* REORDER BUTTON */}
          <Button title="Reorder" onPress={() => navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR, { screen: RouteName.MY_CART_SCREEN })} />
          <Spacing space={SH(25)} />

        </View>
      </ScrollView>


    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(TrackOrdersScreen);


