import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, Image, TouchableOpacity, View, Text, FlatList, Dimensions, Animated, StyleSheet, Pressable } from 'react-native';
import { Container, Spacing, Slider, GradientComponent, VectorIcons, ProductColumn, ProductSmall, HomeHeader, PreviousOrder } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper, BottomTabGap, SCREEN_WIDTH, SW, SF, TopSellingProductData, PreviousOrderData, FreshVeggiesProductData, FreshFruitsProductData, AllBannerData, AllCategoriesData, HomeCategoryShortcuts, ShopsData } from '../../helper';
import { Styles, HomeScreenStyle } from '../../styles';
import { COMMON_PADDING } from '../../constants';
import images from '../../images';
import RouteName from '../../routes/RouteName';
import Reanimated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get("window");

const ShopLocationSelector = () => {
  const [selected, setSelected] = useState('market');
  const marketScale = useRef(new Animated.Value(1)).current;
  const nearbyScale = useRef(new Animated.Value(1)).current;

  const options = [
    {
      id: 'market',
      title: 'Indore',
      subtitle: 'Wholesale Market',
      icon: 'shopping-bag',
      scale: marketScale,
    },
    {
      id: 'nearby',
      title: 'Nearby',
      subtitle: 'Around your location',
      icon: 'map-pin',
      scale: nearbyScale,
    },
  ];

  const handleSelect = (id, scale) => {
    setSelected(id);

    Animated.sequence([
      Animated.spring(scale, {
        toValue: 0.94,
        friction: 5,
        useNativeDriver: true,
      }),
      Animated.spring(scale, {
        toValue: 1,
        friction: 4,
        tension: 150,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={shopStyles.locationContainer}>
      <Text style={shopStyles.locationHeading}>Explore shops</Text>

      <View style={shopStyles.locationRow}>
        {options.map((item) => {
          const active = selected === item.id;

          return (
            <Animated.View
              key={item.id}
              style={[
                shopStyles.locationAnimated,
                { transform: [{ scale: item.scale }] },
              ]}
            >
              <Pressable
                onPress={() => handleSelect(item.id, item.scale)}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
                style={[shopStyles.locationButton, active && shopStyles.locationButtonActive]}
              >
                <View
                  style={[
                    shopStyles.locationIcon,
                    active && shopStyles.locationIconActive,
                  ]}
                >
                  <VectorIcons
                    iconFamily="Feather"
                    name={item.icon}
                    size={20}
                    color={active ? '#FFFFFF' : '#16834A'}
                  />
                </View>

                <View style={shopStyles.locationTextContainer}>
                  <Text
                    style={[
                      shopStyles.locationTitle,
                      active && shopStyles.locationTextActive,
                    ]}
                  >
                    {item.title}
                  </Text>

                  <Text
                    numberOfLines={1}
                    style={[
                      shopStyles.locationSubtitle,
                      active && shopStyles.locationSubtitleActive,
                    ]}
                  >
                    {item.subtitle}
                  </Text>
                </View>

                {active && (
                  <VectorIcons
                    iconFamily="Feather"
                    name="check-circle"
                    size={17}
                    color="#FFFFFF"
                  />
                )}
              </Pressable>
            </Animated.View>
          );
        })}
      </View>
    </View>
  );
};

const ShopsList = () => {
  const [favoriteIds, setFavoriteIds] = useState([]);

  const toggleFavorite = (id) => {
    setFavoriteIds((currentIds) => (
      currentIds.includes(id)
        ? currentIds.filter((favoriteId) => favoriteId !== id)
        : [...currentIds, id]
    ));
  };

  const renderShop = ({ item }) => {
    const isFavorite = favoriteIds.includes(item.id);

    return (
      <View style={shopStyles.card}>
        <View>
          <Image source={{ uri: item.image }} style={shopStyles.image} />
          <View style={shopStyles.offer}>
            <Text style={shopStyles.offerText}>{item.offer}</Text>
          </View>
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityLabel={isFavorite ? `Remove ${item.name} from favorites` : `Add ${item.name} to favorites`}
            onPress={() => toggleFavorite(item.id)}
            style={shopStyles.heart}
          >
            <Ionicons
              name={isFavorite ? 'heart' : 'heart-outline'}
              size={21}
              color={isFavorite ? '#E94B63' : '#333'}
            />
          </TouchableOpacity>
        </View>

        <View style={shopStyles.details}>
          <View style={shopStyles.titleRow}>
            <Text style={shopStyles.name} numberOfLines={1}>{item.name}</Text>
            <View style={shopStyles.rating}>
              <Text style={shopStyles.ratingText}>{item.rating}</Text>
              <Ionicons name="star" size={12} color="#FFFFFF" />
            </View>
          </View>
          <Text style={shopStyles.cuisine} numberOfLines={1}>{item.cuisine}</Text>
          <View style={shopStyles.infoRow}>
            <Text style={shopStyles.price}>{item.price}</Text>
            <View style={shopStyles.delivery}>
              <Ionicons name="time-outline" size={14} color="#555" />
              <Text style={shopStyles.time}>{item.time}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={shopStyles.container}>
      <View style={shopStyles.header}>
        <View>
          <Text style={shopStyles.heading}>Shops</Text>
          <Text style={shopStyles.subtitle}>Discover great finds near you</Text>
        </View>
        <View style={shopStyles.filter}>
          <Ionicons name="options-outline" size={20} color="#333" />
        </View>
      </View>
      <View style={shopStyles.list}>
        {ShopsData.map((item) => (
          <React.Fragment key={item.id}>{renderShop({ item })}</React.Fragment>
        ))}
      </View>
    </View>
  );
};

const shopStyles = StyleSheet.create({
  container: {
    backgroundColor: '#F7F7F7',
  },
  locationContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  locationHeading: {
    color: '#202020',
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 10,
  },
  locationRow: {
    flexDirection: 'row',
    gap: 10,
  },
  locationAnimated: {
    flex: 1,
  },
  locationButton: {
    minHeight: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E6EAE7',
    backgroundColor: '#FFFFFF',
    gap: 8,
  },
  locationButtonActive: {
    backgroundColor: '#16834A',
    borderColor: '#16834A',
  },
  locationIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EAF5EE',
  },
  locationIconActive: {
    backgroundColor: 'rgba(255,255,255,0.18)',
  },
  locationTextContainer: {
    flex: 1,
  },
  locationTitle: {
    color: '#202020',
    fontSize: 13,
    fontWeight: '700',
  },
  locationTextActive: {
    color: '#FFFFFF',
  },
  locationSubtitle: {
    color: '#777777',
    fontSize: 10,
    marginTop: 3,
  },
  locationSubtitleActive: {
    color: '#E7F4EB',
  },
  header: {
    padding: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    fontSize: 25,
    fontWeight: '800',
    color: '#202020',
  },
  subtitle: {
    color: '#777',
    fontSize: 13,
    marginTop: 5,
  },
  filter: {
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#EEE',
  },
  list: {
    paddingHorizontal: 15,
    paddingBottom: 25,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    marginBottom: 18,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.07,
    shadowRadius: 7,
    shadowOffset: { width: 0, height: 3 },
  },
  image: {
    width: '100%',
    height: 190,
    resizeMode: 'cover',
    backgroundColor: '#EEE',
  },
  offer: {
    position: 'absolute',
    bottom: 12,
    left: 0,
    backgroundColor: '#2563EB',
    paddingHorizontal: 11,
    paddingVertical: 7,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  offerText: {
    color: '#FFF',
    fontWeight: '700',
    fontSize: 12,
  },
  heart: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#FFFFFFE8',
    borderRadius: 22,
    width: 38,
    height: 38,
    alignItems: 'center',
    justifyContent: 'center',
  },
  details: {
    padding: 14,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  name: {
    flex: 1,
    fontSize: 18,
    fontWeight: '800',
    color: '#222',
  },
  rating: {
    backgroundColor: '#16834A',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 7,
    paddingVertical: 5,
    borderRadius: 7,
  },
  ratingText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 12,
  },
  cuisine: {
    fontSize: 13,
    color: '#777',
    marginTop: 8,
  },
  infoRow: {
    marginTop: 13,
    paddingTop: 11,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 13,
    color: '#555',
  },
  delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  time: {
    fontSize: 12,
    fontWeight: '600',
    color: '#444',
  },
});

const AnimatedHomeCategoryShortcut = ({ item, active, styles, onPress }) => {
  const scale = useSharedValue(1);

  const shortcutStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPressIn={() => {
        scale.value = withTiming(0.94, { duration: 50 });
      }}
      onPressOut={() => {
        scale.value = withTiming(1, { duration: 20 });
      }}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected: active }}
      accessibilityLabel={item.name}
    >
      <Reanimated.View style={[styles.homeCategoryShortcut, shortcutStyle]}>
        <Reanimated.View
          style={[
            styles.homeCategoryShortcutIconCircle,
            {
              backgroundColor: active ? item.color : item.tint,
              borderColor: item.color,
              shadowColor: item.color,
              elevation: active ? 4 : 0,
              shadowOpacity: active ? 0.18 : 0,
            },
          ]}
        >
          <MaterialCommunityIcons
            name={item.icon}
            size={SF(27)}
            color={active ? '#FFFFFF' : item.color}
          />
        </Reanimated.View>
        <Text
          numberOfLines={1}
          style={[
            styles.homeCategoryShortcutLabel,
            { color: active ? item.color : '#68716C' },
          ]}
        >
          {item.name}
        </Text>
      </Reanimated.View>
    </TouchableOpacity>
  );
};

const HomeScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  const styles = HomeScreenStyle(colors)
  const [search, setSearch] = useState("");
  const [activeShortcutId, setActiveShortcutId] = useState(null);
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

  const renderHomeCategoryShortcut = ({ item }) => (
    <AnimatedHomeCategoryShortcut
      item={item}
      active={activeShortcutId === item.id}
      styles={styles}
      onPress={() => {
        setActiveShortcutId(item.id);
      }}
    />
  );

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

        <ShopLocationSelector />

        {/* Home category shortcuts */}
        <View style={styles.homeCategoryShortcutList}>
          <FlatList
            data={HomeCategoryShortcuts}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.homeCategoryShortcutContent}
            ItemSeparatorComponent={() => <View style={styles.homeCategoryShortcutSeparator} />}
            initialNumToRender={6}
            renderItem={renderHomeCategoryShortcut}
          />
        </View>

        {activeShortcutId && activeShortcutId !== 'home' ? (
          <ShopsList />
        ) : (
        <>
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
          <View style={styles.exploreCategoryListContainer}>
            <FlatList
              data={AllCategoriesData}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.exploreCategoryListContent}
              snapToAlignment="center"
              pagingEnabled={false}
              ItemSeparatorComponent={() => <View style={styles.exploreCategorySeparator} />}
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
        </>
        )}

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
