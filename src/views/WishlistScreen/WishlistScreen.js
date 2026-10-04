import React, { useCallback, useState } from 'react';
import { ScrollView, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Container, Spacing, ProductColumn, Slider, NotFound } from '../../components';
import { connect } from 'react-redux';
import { AllBannerData, AllproductsData, BottomTabGap, SCREEN_WIDTH, SH, SW, useThemeHelper } from '../../helper';
import { CategoryScreenStyle, Styles } from '../../styles';
import images from '../../images';
import { COMMON_PADDING } from '../../constants';
import { useFocusEffect } from '@react-navigation/native';

const WishlistScreen = (props) => {
  const tabHeight = BottomTabGap();
  const { colors } = useThemeHelper();
  const styles = CategoryScreenStyle(colors)
  const Style = Styles(colors)
  const [productData, setProductData] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const wishlistProducts = AllproductsData.filter(p => p.ifwishlist);
      setProductData(wishlistProducts)
    }, [])
  );


  // Wishlist Quantity
  const handleWishlist = (id) => {
    setProductData(prev => prev.filter(item => item.id !== id));
  };
  // Increment Quantity
  const handleIncrement = (id) => {
    setProductData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: (item.qty || 0) + 1 } : item
      )
    );
  };

  // Decrement Quantity
  const handleDecrement = (id) => {
    setProductData((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const bannerData = AllBannerData.whishlist;

  const renderBanner = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.categoryBannerView, { borderRadius: 5 }]} >
        <Image
          source={item.image}
          style={styles.categoryBannerImage}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Container>
      <View style={styles.backgroundColorLight}>
        {productData.length != 0 ?

          <ScrollView>
            <View style={[Style.paddingHorizontalCommon, Style.width100]}>
              <Spacing space={SH(10)} />

              {/* Banner Section */}
              <Slider
                data={bannerData}
                width={(SCREEN_WIDTH) - COMMON_PADDING * 2}       //  Dynamic width
                height={SW(90)}      //  Dynamic height
                renderItem={renderBanner} //  Fully Dynamic Layout
              />
              <Spacing space={SH(10)} />

              {/* Product List Section */}
              <FlatList
                data={productData}
                numColumns={2}
                keyExtractor={(item) => item.id.toString()}
                columnWrapperStyle={{
                  justifyContent: "space-between",   // this works!
                }}
                renderItem={({ item }) => (
                  <ProductColumn item={item} {...props} handleWishlist={handleWishlist} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
                )}
                showsVerticalScrollIndicator={false}
                scrollEnabled={false}
              />
            </View>
          </ScrollView>
          :
          <View style={[Style.paddingHorizontalCommon, Style.width100]}>
            <NotFound
              title="Your Whishlist is Empty!!"
              content="It's a nice day to buy the items you saved for later!"
              image={images.notfoundimg}
              height="90%"
            />
          </View>
        }
      </View>
      <Spacing space={SH(tabHeight)} />
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(WishlistScreen);
