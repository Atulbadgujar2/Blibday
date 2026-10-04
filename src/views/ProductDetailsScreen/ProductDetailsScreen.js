import React, { useEffect, useState } from 'react';
import { ScrollView, View, FlatList, Image, TouchableOpacity, Text } from 'react-native';
import { Container, Spacing, ProductColumn, Slider, VectorIcons, ProductInformation, SvgIcons, Ratings } from '../../components';
import { connect } from 'react-redux';
import { AllBannerData, onShare, ProductDetailsData, ProductRattingData, SCREEN_WIDTH, SF, SH, SW, TopSellingProductData, useThemeHelper } from '../../helper';
import { Styles, ProductDetailsScreenStyle } from '../../styles';
import { COMMON_PADDING, CURRENCY } from '../../constants';
import Animated, { useAnimatedStyle, interpolate, useSharedValue } from 'react-native-reanimated';
import { RouteName } from '../../routes';
const ProductDetailsScreen = (props) => {
  const { navigation, route } = props
   const { productis } = route?.params || {};
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  const styles = ProductDetailsScreenStyle(colors)
  const [productData, setProductData] = useState(ProductDetailsData);
  const [topProductData, setTopProductData] = useState(TopSellingProductData);
  const progress = useSharedValue(0);
  const imageSize = SCREEN_WIDTH - (COMMON_PADDING * 2);
  // Wishlist Quantity
  const handleWishlist = (id) => {
    setTopProductData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ifwishlist: !item.ifwishlist } : item
      )
    );
  };
  // Increment Quantity
  const handleIncrement = (id) => {
    setTopProductData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: (item.qty || 0) + 1  } : item
      )
    );
  };
  // Decrement Quantity
  const handleDecrement = (id) => {
    setTopProductData((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  {/* Main Image SLider Section */ }
  const renderImageSlider = ({ item, index, animationValue }) => {
    // Animated Rotation (Left +10deg, Center 0deg, Right -10deg)
    const animatedStyle = useAnimatedStyle(() => {
      const rotate = interpolate(
        animationValue.value,
        [-1, 0, 1],   // left, center, right
        [5, 0, -5]  // rotation degrees
      );

      return {
        transform: [
          { rotate: `${rotate}deg` }
        ]
      };
    });
    return (
      <Animated.View
        style={[
          styles.productImageSlideView,
          {
            width: imageSize,
            height: imageSize,
          },
          animatedStyle // apply rotation here
        ]}
      >
        <Image source={item.image} style={Style.bannerImageFull} />
      </Animated.View>
    );
  };

  {/* Pagination Dots Section */ }
  const PaginationDots = ({ data, progress }) => {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
        {data.map((_, i) => {

          const animatedDotStyle = useAnimatedStyle(() => {
            const isActive = Math.round(progress.value) === i;
            const scale = interpolate(
              progress.value,
              [i - 1, i, i + 1],
              [1, isActive ? 1.1 : 1, 1]
            );
            return {
              transform: [{ scale }],
              backgroundColor: isActive ? colors.primary_color : colors.light_gray,
              width: isActive ? 18 : 7,
              height: isActive ? 5.5 : 7,
            };
          });

          return (
            <Animated.View
              key={i}
              style={[
                {
                  borderRadius: 8,
                  marginHorizontal: 5,
                },
                animatedDotStyle
              ]}
            />
          );
        })}
      </View>
    );
  };

  {/* Big Banner Section */ }
  const renderBannerAdd = ({ item }) => {
    return (
      <TouchableOpacity style={styles.sponsoredView} >
        <Image
          source={item.image}
          style={Style.bannerImageFull}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Container containerPropStyle={{backgroundColor:colors.background_white_color}}>
      {/* Header */}
      <View style={[Style.paddingHorizontalCommon, Style.width100]}>
        <View
          style={[Style.appHeaderMainView]}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={[Style.appHeaderIconView, styles.headerIcon]}>
            <VectorIcons iconFamily="AntDesign" name="arrowleft" color={colors.black_to_white_color} size={SF(20)} />
          </TouchableOpacity>
          <View
            style={styles.headerActionRight}>
            <TouchableOpacity onPress={() => onShare()} style={[Style.appHeaderIconView, styles.headerIcon]}>
              <VectorIcons iconFamily="Feather" name="share" color={colors.black_to_white_color} size={SF(20)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR, { screen: RouteName.MY_CART_SCREEN })} style={[Style.appHeaderIconView, styles.headerIcon]}>
              <VectorIcons iconFamily="Feather" name="shopping-cart" color={colors.black_to_white_color} size={SF(20)} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
              setProductData((prev) =>
                prev.id === productData.id ? { ...prev, ifwishlist: !prev.ifwishlist } : prev
              );
            }} style={[Style.appHeaderIconView, styles.headerIcon]}>
              <VectorIcons iconFamily="Octicons" name={productData?.ifwishlist ? "heart-fill" : "heart"} color={productData?.ifwishlist ? colors.red_color : colors.black_to_white_color} size={SF(20)} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Body */}
      <ScrollView>
        <View style={[Style.width100]}>
          {/* Product Slider */}
          <Slider
            data={productData?.images}
            width={(SCREEN_WIDTH)}       //  Dynamic width
            height={imageSize}      //  Dynamic height
            renderItem={renderImageSlider} //  Fully Dynamic Layout
            mode="parallax"
            parallaxScrollingOffset={(COMMON_PADDING * 2) + 40}
            parallaxScrollingScale={0.9}
            autoPlay={false}
            onProgressChange={(offset, absolute) => {
              progress.value = absolute;
            }}
          />
          {/* Product Slider Pagination */}

          <PaginationDots data={productData?.images} progress={progress} />
        </View>
        <View style={[Style.paddingHorizontalCommon, Style.width100]}>
          <Spacing space={SH(30)} />
          <View style={styles.contentWrapper} >
            <Text style={styles.productTitle}>{productData?.name} (<Text style={styles.productSubtitle}>{productData?.weight}</Text>)</Text>
            <Spacing space={SH(15)} />
            <Ratings
              rating={3.7}
              showNumber={true}
              reviews={34}
            />
            <Spacing space={SH(15)} />
            <View>
              <View style={[Style.flexShrink, styles.priceWrapper]}>
                <Text style={styles.priceText}>{CURRENCY}{productData?.price} <Text style={styles.oldPriceText}>{CURRENCY}{productData?.oldPrice}</Text>
                </Text>
                <TouchableOpacity style={styles.discountBtn}>
                  <Text style={styles.discountText}>10% OFF</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Spacing space={SH(20)} />
          <View style={[styles.hr]} />
          <Spacing space={SH(20)} />
          <Text style={styles.sectionTitle}>Description</Text>
          <Spacing space={SH(20)} />
          <Text style={styles.descriptionText}>{productData?.description}</Text>
          <Spacing space={SH(20)} />
          <View style={[styles.hr]} />
          <Spacing space={SH(20)} />
          <Text style={styles.sectionTitle}>Product Information</Text>
          <Spacing space={SH(20)} />
          <ProductInformation data={productData?.productInformation} />
          <Spacing space={SH(20)} />
          <View style={[styles.hr]} />
          <Spacing space={SH(20)} />
          <Text style={styles.sectionTitle}>Reviews & Rating</Text>
          <Spacing space={SH(20)} />
          <View style={styles.totalRatingRow}>
            <Text style={styles.totalRatingValue}>4.2</Text>
            <View>
              <Ratings
                rating={3.7}
                showNumber={false}
              />
              <Spacing space={SH(7)} />
              <Text style={styles.totalReviewCount}>120 Reviews</Text>
            </View>
          </View>
          <Spacing space={SH(20)} />
          {
            ProductRattingData.map((item, index) => {
              return (
                <View key={index} style={styles.reviewContainer}>

                  <View style={styles.reviewLeftWrapper}>

                    {/* Header Row */}
                    <View style={styles.reviewHeaderRow}>
                      <View>
                        <Text style={styles.reviewName}>{item?.name}</Text>

                        <Spacing space={SH(7)} />

                        <Ratings
                          rating={item?.rating}
                          showNumber={false}
                          size={15}
                          color={colors.primary_color}
                        />
                      </View>

                      <Text style={styles.reviewDate}>{item?.date}</Text>
                    </View>

                    <Spacing space={SH(10)} />

                    {/* Review Text */}
                    <Text style={styles.reviewText}>{item?.review}</Text>

                    <Spacing space={SH(10)} />

                    {/* Images */}
                    <View style={styles.reviewImageRow}>
                      {item?.images.map((img, i) => (
                        <Image key={i} source={img} style={styles.reviewImage} />
                      ))}
                    </View>

                  </View>

                </View>
              );
            })
          }
          <Spacing space={SH(10)} />
          <Text style={styles.sectionTitle}>Bought Together</Text>
          <Spacing space={SH(20)} />
          {/* Product List Section */}

          <FlatList
            data={topProductData}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => (
              <ProductColumn
                {...props}
                item={item}
                mainViewStyle={{
                  ...styles.productMainStyle,
                  marginRight: index === topProductData.length - 1 ? 10 : 0,
                }}
                handleWishlist={handleWishlist} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            ItemSeparatorComponent={() => <View style={styles.topSellitemGap} />}
          />

          <Spacing space={SH(20)} />

          <Text style={styles.sectionTitle}>Sponsored</Text>
          <Spacing space={SH(20)} />
          {/* Banner Section */}
          <Slider
            data={AllBannerData.productdetails}
            width={(SCREEN_WIDTH) - COMMON_PADDING * 2} //  Dynamic width
            height={SW(200)} //  Dynamic height
            renderItem={renderBannerAdd} //  Fully Dynamic Layout
            autoPlay={true}
          />
          <Spacing space={SH(40)} />
        </View>
      </ScrollView>
      <View style={[Style.paddingHorizontalCommon, Style.width100, styles.bottomWrapper]}>

        {/* Total Price Box */}
        <View style={styles.totalPriceBox}>
          <Text style={styles.totalPriceLabel}>Total Price</Text>
          <Spacing space={SH(2)} />
          <Text style={styles.totalPriceValue}>{CURRENCY}30.00</Text>
        </View>

        {/* Qty Buttons OR Add To Cart */}
        {productData.qty ? (
          <View style={[styles.qtyWrapper]}>

            <TouchableOpacity
              style={styles.qtyBtnMinus}
              onPress={() => {
                setProductData(prev =>
                  prev.id === productData.id ? { ...prev, qty: prev?.qty - 1 } : prev
                );
              }}
            >
              <VectorIcons
                iconFamily="Entypo"
                name="minus"
                size={SF(22)}
                color={colors.white}
              />
            </TouchableOpacity>

            <View style={styles.qtyCountContainer}>
              <Text style={styles.qtyText}>{productData.qty}</Text>
            </View>

            <TouchableOpacity
              style={styles.qtyBtnPlus}
              onPress={() => {
                setProductData(prev =>
                  prev.id === productData.id ? { ...prev, qty: 1 + (prev?.qty || 0) } : prev
                );
              }}
            >
              <VectorIcons
                iconFamily="Entypo"
                name="plus"
                size={SF(22)}
                color={colors.white}
              />
            </TouchableOpacity>

          </View>
        ) : (
          <TouchableOpacity
            style={[styles.addToCartBtn]}
            onPress={() => {
              setProductData(prev =>
                prev.id === productData.id ? { ...prev, qty: 1 + (prev?.qty || 0) } : prev
              );
            }}
          >
            <SvgIcons name={"Bag"} height={SF(17)} width={SF(17)} />
            <Text style={styles.addToCartText}>Add to cart</Text>
          </TouchableOpacity>
        )}

      </View>

    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(ProductDetailsScreen);
