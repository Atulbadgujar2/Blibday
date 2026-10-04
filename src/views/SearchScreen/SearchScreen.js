import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, ScrollView, Modal } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Container, NotFound, ProductColumn, Spacing, VectorIcons } from "../../components";
import { AllBrands, AllCategoriesData, AllproductsData, SF, useThemeHelper } from '../../helper';
import { Styles } from "../../styles";
import { RouteName } from "../../routes";
import { connect } from "react-redux";

const SearchScreen = (props) => {
  const { navigation, route } = props;
  const { search = "" } = route?.params || {};
  const [searchText, setSearchText] = useState(search);
  const [sortVisible, setSortVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [sortData, setSortData] = useState('');
  const { colors } = useThemeHelper();
  const styles = Styles(colors);
  const [price, setPrice] = useState(null);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [discount, setDiscount] = useState(null);
  const [offers, setOffers] = useState(null);
  const [productData, setProductData] = useState([]);

  // Show filtered products when typing
  useEffect(() => {
    if (searchText != "") {
      const result = AllproductsData.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setProductData(result);
    } else {
      setProductData(AllproductsData.slice(20, 30));
    }
  }, [searchText]);


  // Wishlist Quantity
  const handleWishlist = (id) => {
    setProductData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, ifwishlist: !item.ifwishlist } : item
      )
    );
  };
  // Increment Quantity
  const handleIncrement = (id) => {
    setProductData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: 1 + (item.qty || 0) } : item
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

  const toggleCategory = (item) => {
    if (selectedCategories.includes(item)) {
      setSelectedCategories(selectedCategories.filter(i => i !== item));
    } else {
      setSelectedCategories([...selectedCategories, item]);
    }
  };

  const toggleBrand = (item) => {
    if (selectedBrands.includes(item)) {
      setSelectedBrands(selectedBrands.filter(i => i !== item));
    } else {
      setSelectedBrands([...selectedBrands, item]);
    }
  };

  const applyFilters = () => {
    setFilterVisible(false)
    console.log("Filters Applied:");
    console.log("Price:", price);
    console.log("Categories:", selectedCategories);
    console.log("Brands:", selectedBrands);
    console.log("Discount:", discount);
    console.log("Offers:", offers);
  };


  return (
    <Container containerPropStyle={styles.themeBackgroundColor}>

      {/* BACK + SORT + FILTER */}
      <View style={styles.searchsortFilterRow}>
        <TouchableOpacity
          style={[styles.searchsfBtn]}
          onPress={() => navigation.goBack()}
        >
          <VectorIcons iconFamily="AntDesign" name="arrowleft" color={colors.white} size={SF(25)} />
        </TouchableOpacity>
        {productData.length > 0 && (
          <View style={styles.searchsfBtnView}>
            <TouchableOpacity
              style={[styles.searchsfBtn]}
              onPress={() => setSortVisible(true)}
            >

              <VectorIcons iconFamily="Ionicons" name="swap-vertical-outline" color={colors.white} size={SF(20)} />
              <Text style={styles.searchsfText}>Sort</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.searchsfBtn]}
              onPress={() => setFilterVisible(true)}
            >
              <VectorIcons iconFamily="Ionicons" name="options-outline" color={colors.white} size={SF(20)} />
              <Text style={styles.searchsfText}>Filter</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <Spacing space={10} />

      <View style={styles.paddingHorizontalCommon}>

        {/* Search Bar */}
        <View style={styles.searchView} >
          <TouchableOpacity
            onPress={() => navigation.navigate(RouteName.SEARCH_BAR_SCREEN, { searchText: searchText })}
            style={styles.searchInnerView}>
            <VectorIcons iconFamily="Ionicons" name="search" size={SF(20)} color={colors.gray} />
            <View>
              <Text style={styles.searchBarsearchInput}>{searchText}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR, { screen: RouteName.MY_CART_SCREEN })}
            style={styles.searchcartInnerView} >
            <VectorIcons iconFamily="Feather" name="shopping-cart" color={colors.pine_green_color} size={SF(20)} />
          </TouchableOpacity>
        </View>
        <Spacing space={10} />

        {/* Product List */}
        {productData.length > 0 && (
          <ScrollView showsVerticalScrollIndicator={false}>
            <Spacing space={10} />
            <Text style={styles.searchsectionTitle}>{productData.length} products found</Text>
            <Spacing space={15} />

            <FlatList
              numColumns={2}
              columnWrapperStyle={{
                justifyContent: "space-between",   // this works!
              }}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
              data={productData}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <ProductColumn item={item} {...props} handleWishlist={handleWishlist} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
              )}
            />
            <Spacing space={150} />
          </ScrollView>
        )}
        {/* Discover More */}
        {productData.length === 0 && (
          <NotFound height="85%"
            title="Product Not Found"
            content="Opps! We can’t find your product! But you can add it to wishlist"
          />
        )}

      </View>
      {/* SORT MODAL */}
      {sortVisible && (
        <Modal visible={sortVisible} animationType="slide" transparent>
          <View style={styles.searchmodalContainer}>
            <View style={styles.searchmodalSortBox}>
              <View style={styles.searchmodalHeader}>
                <Text style={styles.searchmodalTitle}>Sort By</Text>
                <TouchableOpacity onPress={() => setSortVisible(false)}>
                  <VectorIcons iconFamily="Ionicons" name="close" color={colors.black_to_white_color} size={SF(28)} />
                </TouchableOpacity>
              </View>
              <ScrollView
                style={styles.searchscrollArea}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}  // space for bottom button
              >
                {["Relevance", "Low to High", "High to Low", "Newest"].map(
                  (item, idx) => (
                    <TouchableOpacity
                      onPress={() => setSortData(idx)}
                      key={idx} style={styles.searchmodalItem}>
                      <Text style={styles.searchmodalTxt}>{item}</Text>
                      <VectorIcons iconFamily="Ionicons" name="checkmark-circle-outline" size={SF(22)} color={sortData == idx ? colors.primary_color : colors.light_gray} />
                    </TouchableOpacity>
                  )
                )}
              </ScrollView>
            </View>
          </View>
        </Modal>
      )}

      {/* FILTER MODAL */}
      {filterVisible && (
        <Modal visible={filterVisible} animationType="slide" transparent>
          <View style={styles.searchmodalContainer}>
            <View style={styles.searchmodalBox}>
              <View style={styles.searchmodalHeader}>
                <Text style={styles.searchmodalTitle}>Filters</Text>
                <TouchableOpacity onPress={() => setFilterVisible(false)}>
                  <VectorIcons iconFamily="Ionicons" name="close" color={colors.black_to_white_color} size={SF(28)} />
                </TouchableOpacity>
              </View>
              <ScrollView
                style={styles.searchscrollArea}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 10 }}  // space for bottom button
              >
                <Text style={styles.searchfilterLabel}>Price</Text>
                <View style={styles.searchpriceRow}>
                  {["$10", "$20", "$50", "$100"].map((p, i) => (
                    <TouchableOpacity
                      onPress={() => setPrice(p)}
                      key={i} style={[styles.searchpriceBox, price === p && styles.searchtagActive]}>
                      <Text style={[styles.searchpriceText, price === p && styles.searchtagTextActive]}>{p}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
                <Spacing space={15} />

                <Text style={styles.searchfilterLabel}>Category</Text>
                <Spacing space={8} />
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{
                    paddingVertical: 5,
                  }}
                >
                  {AllCategoriesData.map((item, index) => (
                    <TouchableOpacity
                      onPress={() => toggleCategory(item.shortName)}
                      key={index} style={[styles.searchBarcategorySliderItem, {
                        backgroundColor: selectedCategories.includes(item.shortName) ? colors.mint_green_color : colors.mint_dark_white,

                      }]}>
                      <Text style={[styles.searchBarcategorySliderText, { color: selectedCategories.includes(item.shortName) ? colors.white_to_black_color : colors.black_to_white_color }]}>{item.shortName}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>

                {/* BRAND */}
                <Spacing space={15} />
                <Text style={styles.searchfilterLabel}>Brand</Text>
                <Spacing space={8} />

                <View style={styles.searchtagRowContainer}>
                  {AllBrands.map((item) => (
                    <TouchableOpacity
                      key={item}
                      onPress={() => toggleBrand(item)}
                      style={[
                        styles.searchtag,
                        selectedBrands.includes(item) && styles.searchtagActive, {
                          flexDirection: 'row',
                          justifyContent: 'flex-start',
                          alignItems: 'center',
                          gap: 5
                        }
                      ]}
                    >
                      <VectorIcons iconFamily="FontAwesome" name="check-circle" color={selectedBrands.includes(item) ? colors.white_to_black_color : colors.black_to_white_color} size={SF(15)} />

                      <Text
                        style={[
                          styles.searchtagText,
                          selectedBrands.includes(item) && styles.searchtagTextActive,
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* DISCOUNT */}
                <Spacing space={15} />
                <Text style={styles.searchfilterLabel}>Discount</Text>
                <Spacing space={8} />

                <View style={styles.searchtagRowContainer}>
                  {["10%", "20%", "30%", "50%"].map((item) => (
                    <TouchableOpacity
                      key={item}
                      onPress={() => setDiscount(item)}
                      style={[
                        styles.searchtag,
                        discount === item && styles.searchtagActive,
                      ]}
                    >
                      <Text
                        style={[
                          styles.searchtagText,
                          discount === item && styles.searchtagTextActive,
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

                {/* OFFERS */}
                <Spacing space={15} />
                <Text style={styles.searchfilterLabel}>Offers</Text>
                <Spacing space={8} />
                <View style={styles.searchtagContainer}>
                  {["Buy 1 Get 1", "Free Delivery", "Assured Quality"].map((item) => (
                    <TouchableOpacity
                      key={item}
                      onPress={() => setOffers(item)}
                      style={[
                        styles.searchtagFlex,
                        offers === item && styles.searchtagActive,
                      ]}
                    >
                      <VectorIcons iconFamily="FontAwesome" name="check-circle" color={offers === item ? colors.white_to_black_color : colors.black_to_white_color} size={SF(15)} />

                      <Text
                        style={[
                          styles.searchtagText,
                          offers === item && styles.searchtagTextActive,
                        ]}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>

              </ScrollView>


              <View style={styles.searchcategoryRow}>
                <TouchableOpacity
                  style={[styles.searchapplyBtn, styles.searchapplyCancel]}
                  onPress={() => setFilterVisible(false)}
                >
                  <Text style={[styles.searchapplyText, styles.searchcancelText]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.searchapplyBtn}
                  onPress={() => applyFilters()}
                >
                  <Text style={styles.searchapplyText}>Apply Filters</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(SearchScreen);