import React, { useEffect, useState } from 'react';
import { ScrollView, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Container, Spacing, AppHeader, CategoryProductLeft, ProductColumn, Slider } from '../../components';
import { connect } from 'react-redux';
import { AllBannerData, AllChildcategoriesData, AllproductsData, AllSubcategoriesData, SCREEN_WIDTH, SH, SW, useThemeHelper } from '../../helper';
import { CategoryScreenStyle } from '../../styles';
import { CATEGORY_BOX_PADDING } from '../../constants';

const CategoryProductScreen = (props) => {
  const { navigation, route } = props;
  const { catid, subcatid } = route?.params || {};
  const { colors } = useThemeHelper();
  const styles = CategoryScreenStyle(colors)
  const [activeCategory, setActiveCategory] = useState('');
  const [productData, setProductData] = useState([]);
  const [childcategoryData, setChildcategoryData] = useState([]);
  const [categoryName, setCategoryName] = useState("All");

  useEffect(() => {
    const arrayItem = AllChildcategoriesData.filter(item => item.parentSubcategoryId == subcatid) || null;
    const nameData = AllSubcategoriesData.find(item => item.id == subcatid) || null;
    const arrayProductItem = AllproductsData.filter(item => item.parentChildCategoryId == arrayItem[0]?.id) || null;

    setChildcategoryData(arrayItem || [])
    setCategoryName(nameData?.name || "All")
    setActiveCategory(arrayItem[0]?.id)
    setProductData(arrayProductItem || [])
  }, [catid, subcatid])

  const onHandlewCatrory = (id) => {
    setActiveCategory(id);
    setProductData(AllproductsData.filter(item => item.parentChildCategoryId == id) || [])
  }
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

  const bannerData = AllBannerData.categoryproduct;

  const renderBanner = ({ item }) => {
    return (
      <TouchableOpacity style={styles.categoryBannerView} >
        <Image
          source={item.image}
          style={styles.categoryBannerImage}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Container SafeAreaViewStyle={{ backgroundColor: colors.secondary_light_color }}  >
      <AppHeader {...props} children={categoryName} ifGradient={true} />
      <View style={styles.categoryContainerMain}>
        {/* LEFT SIDE CATEGORY LIST */}

        <View style={styles.leftContainer}>
          <FlatList
            data={childcategoryData}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CategoryProductLeft item={item} onHandlewCatrory={onHandlewCatrory} activeCategory={activeCategory} />
            )}
          />
        </View>


        {/* RIGHT SIDE PRODUCTS LIST */}
        <View style={styles.rightContainer}>
          <ScrollView>
            <Spacing space={SH(10)} />

            {/* Banner Section */}
            <View style={styles.categoryBannerMainView} >
              <Slider
                data={bannerData}
                width={(SCREEN_WIDTH * 0.75) - 20}       //  Dynamic width
                height={SW(122)}      //  Dynamic height
                renderItem={renderBanner} //  Fully Dynamic Layout
              />
            </View>
            <Spacing space={SH(10)} />

            {/* Product List Section */}
            <FlatList
              data={productData}
              numColumns={2}
              keyExtractor={(item) => item.id.toString()}
              columnWrapperStyle={{
                justifyContent: "space-between",   // this works!
              }}
              contentContainerStyle={{
                paddingHorizontal: CATEGORY_BOX_PADDING,
              }}
              renderItem={({ item }) => (
                <ProductColumn item={item} {...props} handleWishlist={handleWishlist} handleDecrement={handleDecrement} handleIncrement={handleIncrement} />
              )}
              showsVerticalScrollIndicator={false}
              scrollEnabled={false}
            />
          </ScrollView>
        </View>
      </View>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(CategoryProductScreen);
