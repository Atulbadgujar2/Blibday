import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, Image, TouchableOpacity, View, Text, FlatList, Dimensions, Animated } from 'react-native';
import { Container, Spacing, Slider, GradientComponent, VectorIcons, ProductColumn, ProductSmall, HomeHeader, PreviousOrder } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper, BottomTabGap, SCREEN_WIDTH, SW, SF, TopSellingProductData, PreviousOrderData, FreshVeggiesProductData, FreshFruitsProductData, AllBannerData, AllCategoriesData } from '../../helper';
import { Styles, HomeScreenStyle } from '../../styles';
import { COMMON_PADDING } from '../../constants';
import images from '../../images';
import { RouteName } from '../../routes';

const { width } = Dimensions.get("window");
const HomeScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  const styles = HomeScreenStyle(colors)
  const [search, setSearch] = useState("");
  const tabHeight = BottomTabGap();
  const flatListRef = useRef(null);
  const ITEM_WIDTH = width * 0.55;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [productData, setProductData] = useState([]);
  const [offerProductData, setOfferProduct] = useState(FreshFruitsProductData);
  const placeholders = [
    "Search fruits...",
    "Search vegetables...",
    "Search dairy products...",
    "Search snacks...",
    "Search bakery items...",
  ];

  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const translateY = useRef(new Animated.Value(0)).current;


  useEffect(() => {
    setProductData(TopSellingProductData)
    const interval = setInterval(() => {
      // Animate up + fade out
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: -10, // move up
          duration: 300,
          useNativeDriver: true,
        }),
      ]).start(() => {
        // Change the placeholder text
        setPlaceholderIndex((prev) => (prev + 1) % placeholders.length);

        // Reset position instantly
        translateY.setValue(10);

        // Animate back to normal
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.timing(translateY, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true,
          }),
        ]).start();
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [])

  // Wishlist Quantity
  const handleWishlist = (id, type = "") => {
    if (type == 'offer') {
      setOfferProduct((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, ifwishlist: !item.ifwishlist } : item
        )
      );
    } else {
      setProductData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, ifwishlist: !item.ifwishlist } : item
        )
      );
    }

  };
  // Increment Quantity
  const handleIncrement = (id, type = "") => {
    if (type == 'offer') {
      setOfferProduct((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, qty: 1 + (item.qty || 0) } : item
        )
      );
    } else {
      setProductData((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, qty: 1 + (item.qty || 0) } : item
        )
      );
    }

  };
  // Decrement Quantity
  const handleDecrement = (id, type = "") => {
    if (type == 'offer') {
      setOfferProduct((prev) =>
        prev.map((item) =>
          item.id === id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
        )
      );
    } else {
      setProductData((prev) =>
        prev.map((item) =>
          item.id === id && item.qty > 0 ? { ...item, qty: item.qty - 1 } : item
        )
      );
    }


  };

  {/* Big Banner Section */ }
  const renderBanner = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN)} style={styles.bigBannerView} >
        <Image
          source={item.image}
          style={Style.bannerImageFull}
        />
      </TouchableOpacity>
    );
  };

  {/* Small Banner Section */ }
  const renderBannerTwo = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.smallbannerView, { backgroundColor: item?.colors || '#f8a54c3e' }]} >
        <Image
          source={item.image}
          style={Style.bannerImageMaxFull}
        />
        <Text style={styles.smallbannerText} numberOfLines={3} >{item.title}</Text>
      </TouchableOpacity>
    );
  };

  {/* Category Section */ }
  const renderCategory = ({ item, index }) => {
    return (
      <TouchableOpacity key={index} onPress={() => navigation.navigate(RouteName.CATEGORY_SCREEN)}>
        <GradientComponent
          setColors={[colors.light_box, item.color]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          styles={{
            borderRadius: 60,
            marginLeft: index == 0 ? SW(COMMON_PADDING) : 0,
            marginRight: index == (AllCategoriesData.length - 1) ? SW(COMMON_PADDING) : 0,
          }}
        >
          <View style={styles.categoryOuter}>
            <View
              style={[
                styles.categoryInner,
                { borderColor: item.color, backgroundColor: colors.white }
              ]}
            >
              <Image source={item.image} style={styles.categoryImage} />
            </View>
            <Text style={styles.categoryText}>{item?.shortName}</Text>
          </View>
        </GradientComponent>
      </TouchableOpacity>
    );
  };

  return (
    <Container containerPropStyle={Style.themeBackgroundColor}
    SafeAreaViewStyle={{backgroundColor:colors.secondary_light_color}}
    >
      {/* Main header */}
      <HomeHeader setSearch={setSearch} navigation={navigation} search={search} placeholders={placeholders[placeholderIndex]} translateY={translateY} fadeAnim={fadeAnim} />
      <ScrollView>
        {/* Big  Banner Section */}
        <View>
          <Slider
            data={AllBannerData.HomebannerBigData}
            width={(SCREEN_WIDTH)}       //  Dynamic width
            height={SW(170)}      //  Dynamic height
            renderItem={renderBanner} //  Fully Dynamic Layout
            mode="parallax"
            parallaxScrollingOffset={(COMMON_PADDING * 2) + 10}
            parallaxScrollingScale={0.9}
          />
          <Spacing space={SH(5)} />
        </View>

        {/* Header Start */}
        <View style={[Style.paddingHorizontalCommon]}>
          <View style={styles.commonHeaderView}>
            <View style={Style.flexShrink}>
              <Text style={styles.commonHeaderText} numberOfLines={1} >Explore Categories</Text>
              <Text style={styles.commonHeaderSmallText} numberOfLines={1} >Based on what is popular around you</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.CATEGORY_SCREEN)} style={styles.commonHeaderIconView}>
              <VectorIcons iconFamily="Feather" name="arrow-right" size={SF(20)} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Header End */}
        <Spacing space={SH(20)} />
        {/* Category List Section */}
        <GradientComponent
          setColors={[colors.background_box_color, colors.background_color]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <View style={{
            paddingVertical: 10,
          }}>
            <FlatList
              data={AllCategoriesData}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              snapToAlignment="center"
              pagingEnabled={false}
              ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
              renderItem={renderCategory}
            />
          </View>
        </GradientComponent>

        <Spacing space={SH(20)} />

        <View style={[Style.paddingHorizontalCommon]}>
          {/* Heading Start */}
          <View style={styles.commonHeaderView}>
            <View style={Style.flexShrink}>
              <Text style={styles.commonHeaderText} numberOfLines={1} >Top Selling Products</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.SEARCH_SCREEN)} style={styles.commonHeaderIconView}>
              <VectorIcons iconFamily="Feather" name="arrow-right" size={SF(20)} color={colors.black} />
            </TouchableOpacity>
          </View>
          {/* Heading End */}

          <Spacing space={SH(10)} />

          {/* Top Product List Section */}
          <FlatList
            data={productData.slice(0, 4)}
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
        <Spacing space={SH(20)} />

        {/* Heading Start */}
        <View style={[Style.paddingHorizontalCommon]}>
          <View style={styles.commonHeaderView}>
            <View style={Style.flexShrink}>
              <Text style={styles.commonHeaderText} numberOfLines={1} >Groceries</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.SEARCH_SCREEN)} style={styles.commonHeaderIconView}>
              <VectorIcons iconFamily="Feather" name="arrow-right" size={SF(20)} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Heading End */}

        <Spacing space={SH(10)} />

        {/* Small Banner */}

        <GradientComponent
          setColors={[colors.background_box_color, colors.background_color]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          >
          <View style={[Style.paddingLeftCommon,{paddingVertical: 10}]}>
            <Slider
              data={AllBannerData.HomebannerSmallData}
              width={(ITEM_WIDTH)}       //  Dynamic width
              height={SW(90)}      //  Dynamic height
              renderItem={renderBannerTwo} //  Fully Dynamic Layout
              mode="parallax"
              parallaxScrollingOffset={-10}
              parallaxScrollingScale={1}
            />
          </View>
        </GradientComponent>
        <Spacing space={SH(20)} />

        {/* Previous Order Section */}
        <View style={[Style.paddingHorizontalCommon]}>
          <View style={styles.commonHeaderView}>
            <View style={Style.flexShrink}>
              <Text style={styles.commonHeaderText} numberOfLines={1} >Previous Order</Text>
              <Text style={styles.commonHeaderSmallText} numberOfLines={1} >Your Previous Order continue order again</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate(RouteName.MY_ORDER_SCREEN)} style={styles.commonHeaderIconView}>
              <VectorIcons iconFamily="Feather" name="arrow-right" size={SF(20)} color={colors.black} />
            </TouchableOpacity>
          </View>
        </View>

        <Spacing space={SH(20)} />
        <View style={{ paddingHorizontal: COMMON_PADDING - 5 }}>
          <FlatList
            ref={flatListRef}
            pagingEnabled
            data={PreviousOrderData}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.prevOrderlistContent}
            ItemSeparatorComponent={() => <View style={styles.prevOrderitemSeparator} />}
            renderItem={({ item, index }) => (
              <PreviousOrder {...props} item={item} index={index} PreviousOrderData={PreviousOrderData} />
            )}
            onMomentumScrollEnd={(event) => {
              const offsetX = event.nativeEvent.contentOffset.x;
              const index = Math.round(offsetX / SCREEN_WIDTH);
              setCurrentIndex(index);
            }}
          />
        </View>
        <Spacing space={SH(5)} />

        <View style={styles.paginationDotInner}>
          {PreviousOrderData.map((_, index) => {
            return (
              <View
                key={index.toString()}
                style={[styles.paginationDotOuter, {
                  width: index == currentIndex ? SW(20) : SW(6),
                  backgroundColor: index == currentIndex ? colors.earthy_brown_color : colors.light_gray
                }]}
              />
            );
          })}
        </View>

        <Spacing space={SH(20)} />
        <View style={styles.topSellwrapper}>
          <View style={styles.topSellshadowBox}>

            <GradientComponent
              setColors={[colors.background_box_color, colors.primary_color]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              styles={styles.topSellgradientBox}
            >
              <Image
                source={images.bg1}
                style={styles.topSellbgImage}
              />
              <View style={styles.topSelltopSellingContainer}>
                {/* Header */}
                <View style={styles.commonHeaderView}>
                  <View style={Style.flexShrink}>
                    <Text style={styles.commonHeaderText} numberOfLines={1} >Fresh veggies for you</Text>
                    <Text style={[styles.commonHeaderSmallText]} numberOfLines={1} >Based on what is popular around you</Text>
                  </View>
                </View>

                <Spacing space={SH(20)} />
                {/* Product List */}
                <FlatList
                  data={FreshVeggiesProductData}
                  keyExtractor={(item) => item.id.toString()}
                  contentContainerStyle={styles.topSellproductList}
                  renderItem={({ item, index }) => (
                    <ProductSmall
                      mainViewStyle={{
                        width: 180,
                        marginRight: index === TopSellingProductData.length - 1 ? 10 : 0,
                      }}
                      item={item}
                      index={index}
                      onPress={() => navigation.navigate(RouteName.PRODUCT_DETAILS_SCREEN, { productid: item.id })}
                    />
                  )}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  ItemSeparatorComponent={() => <View style={styles.topSellitemGap} />}
                />
              </View>

            </GradientComponent>
          </View>
        </View>

        <Spacing space={SH(30)} />

        <View style={[Style.paddingHorizontalCommon]}>
          {/* Heading Start */}
          <View style={styles.commonHeaderView}>
            <View style={Style.flexShrink}>
              <Text style={styles.commonHeaderText} numberOfLines={1} >Exclusive Offer</Text>
            </View>
            <View style={styles.commonHeaderIconView}>
              <VectorIcons iconFamily="Feather" name="arrow-right" size={SF(20)} color={colors.black} />
            </View>
          </View>
          {/* Heading End */}

          <Spacing space={SH(10)} />

          {/* Top Product List Section */}
          <FlatList
            data={offerProductData}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
            columnWrapperStyle={{
              justifyContent: "space-between",   // this works!
            }}
            renderItem={({ item }) => (
              <ProductColumn item={item} {...props} handleWishlist={(id) => handleWishlist(id, 'offer')} handleDecrement={(id) => handleDecrement(id, 'offer')} handleIncrement={(id) => handleIncrement(id, 'offer')} />
            )}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
          />
        </View>
      <Spacing space={SH(tabHeight)} />

      </ScrollView>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(HomeScreen);
