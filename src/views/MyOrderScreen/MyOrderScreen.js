import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native";
import { Container, Slider, Spacing } from "../../components";
import { AllBannerData, getStatusStyle, MyOrdersData, SCREEN_WIDTH, SH, SW, useThemeHelper } from "../../helper";
import { Styles } from "../../styles";
import { connect } from 'react-redux';
import { COMMON_PADDING } from "../../constants";
import { RouteName } from "../../routes";

const MyOrdersScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)

  const renderOrder = ({ item, index }) => (
    <View style={Style.myOrdercard} key={index}>
      {/* Product Row */}
      <View style={Style.myOrderrow}>
        <View style={Style.flex}>
          <Text style={Style.myOrderproduct}>{'Grocery'} <Text style={[Style.myOrderproductItem]}>({item?.images?.length} Items)</Text></Text>
          <Text style={Style.myOrderorderId}>Order ID: {item.id}</Text>
        </View>
        <View style={[Style.myOrderstatusBadge, { backgroundColor: getStatusStyle(item.status).backgroundColor }]}>
          <Text style={Style.myOrderstatusText}>{item.status}</Text>
        </View>
      </View>
      <Spacing space={SH(15)} />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item?.images?.map((itm, index) => (
          <Image
            key={index}
            source={itm?.image}
            style={Style.myOrderhorizontalImg}
          />
        ))}
      </ScrollView>

      <Spacing space={15} />
      {/* Status + Date */}
      <View style={Style.myOrderrowBetween}>
        <Text style={Style.myOrderdate}>{item.date}</Text>
        <Text style={Style.myOrderprice}>{item.amount}</Text>
      </View>
      <Spacing space={15} />
      {/* Action Buttons */}
      <View style={Style.myOrderactionRow}>
        <TouchableOpacity style={Style.myOrderviewBtn}
          onPress={() => navigation.navigate(RouteName.INVOICE_SCREEN)}
        >
          <Text style={Style.myOrderviewText}>Invoice</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Style.myOrderreorderBtn} onPress={() => navigation.navigate(getStatusStyle(item.status).navigation)}>
          <Text style={Style.myOrderreorderText}>{getStatusStyle(item.status).label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  {/* Big Banner Section */ }
  const renderBannerAdd = ({ item }) => {
    return (
      <TouchableOpacity style={Style.myOrderreOrderBanner} >
        <Image
          source={item.image}
          style={Style.bannerImageFull}
        />
      </TouchableOpacity>
    );
  };
  return (
    <Container containerPropStyle={Style.themeBackgroundColor}>

      <ScrollView>
        {/* Banner Section */}
        <View style={[Style.paddingHorizontalCommon]}>
          <Slider
            data={AllBannerData.MyOrderData}
            width={(SCREEN_WIDTH) - COMMON_PADDING * 2} //  Dynamic width
            height={SW(110)} //  Dynamic height
            renderItem={renderBannerAdd} //  Fully Dynamic Layout
            autoPlay={true}
          />
        </View>
        <Spacing space={20} />
        {/* Orders List */}
        <View>
          {MyOrdersData.map((item,index) => {
            return renderOrder({ item, index })
          })
          }
        </View>
        <Spacing space={20} />
      </ScrollView>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(MyOrdersScreen);


