import React,{useEffect,useState} from 'react';
import { ScrollView, Image, TouchableOpacity, View } from 'react-native';
import { Container, Spacing, AppHeader, Category, Slider } from '../../components';
import { connect } from 'react-redux';
import { SH, useThemeHelper, BottomTabGap, SCREEN_WIDTH, SW, AllBannerData, AllCategoriesData, AllSubcategoriesData } from '../../helper';
import { Styles, CategoryScreenStyle } from '../../styles';
import { COMMON_PADDING, String } from '../../constants';
import { RouteName } from '../../routes';

const CategoryScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)
  const styles = CategoryScreenStyle(colors)
  const [categoryList, setCategoryList] = useState([]);

  useEffect(()=>{
const NestedCategoriesData = AllCategoriesData.map(category => {
  const subcategories = AllSubcategoriesData.filter(
    sub => sub.parentCategoryId === category.id
  );
  return {
    ...category,
    subcategory: subcategories,
  };
});
console.log(NestedCategoriesData);

setCategoryList(NestedCategoriesData)
  },[])



  const tabHeight = BottomTabGap();
  const handleCategory = (id, subid) => {
    navigation.navigate(RouteName.CATEGORY_PRODUCT_SCREEN, { catid: id, subcatid: subid })
  }
  const bannerData = AllBannerData.category;
  const renderBanner = ({ item }) => {
    return (
      <TouchableOpacity style={[styles.categoryBannerView, { borderRadius: 5, flex: 1, overflow: 'hidden', width: SCREEN_WIDTH, alignSelf: 'center' }]} >
        <Image
          source={item.image}
          style={styles.categoryBannerImage}
        />
      </TouchableOpacity>
    );
  };

  return (
    <Container SafeAreaViewStyle={{backgroundColor:colors.secondary_light_color}}  >
      <AppHeader {...props} children={String.label.Category} ifGradient={true} />
      <ScrollView style={{backgroundColor:colors.background_white_color}}>
        <Spacing space={SH(5)} />
        {/* Banner Section */}
        <Slider
          data={bannerData}
          width={(SCREEN_WIDTH)}       //  Dynamic width
          height={SW(100)}      //  Dynamic height
          renderItem={renderBanner} //  Fully Dynamic Layout
          mode="parallax"
          parallaxScrollingOffset={(COMMON_PADDING * 2) + 10}
          parallaxScrollingScale={0.9}
        />
        <View style={[Style.paddingHorizontalCommon, Style.paddingVerticalCommon,]}>
          <Category items={categoryList} handleCategory={handleCategory} />
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
export default connect(mapStateToProps, null)(CategoryScreen);
