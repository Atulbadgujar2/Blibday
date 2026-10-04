import React, { useEffect, useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Container, CustomTabView, FaqList, LottieIcon, Spacing, VectorIcons } from '../../components';
import { connect } from 'react-redux';
import { faqCategoriesArray, faqListArray, SF, SH, SW, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';
import images from '../../images';

const SupportScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const [activeCategory, setActiveCategory] = useState(0)
  const CommonStyles = Styles(colors);
  const [faqListData, setFaqListData] = React.useState([]);

  useEffect(() => {
    getFaqByCategory(activeCategory)
  }, [])

  const getFaqByCategory = (categoryId) => {
    setActiveCategory(categoryId)
    if (categoryId == 0) {
      setFaqListData(faqListArray.flatMap(item => item.faqs) || []);
    } else {
      setFaqListData(faqListArray.find(item => item.categoryId === categoryId)?.faqs || []);

    }
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => getFaqByCategory(item.id)} style={[CommonStyles.suportCategoryView, activeCategory === item.id && CommonStyles.suportCategoryActive, { borderLeftWidth: 3, borderLeftColor: colors.primary_color, borderWidth: 0.3, borderColor: colors.primary_color }]}>
      <Text style={[CommonStyles.suportCategorytext, activeCategory === item.id && CommonStyles.suportCategoryTextActive]}>{item?.name}</Text>
    </TouchableOpacity>
  );

  const tabs = [
    {
      key: '1',
      title: 'FAQ',
      content: (
        <View>
          <Spacing space={SH(20)} />
          <View style={CommonStyles.width100}>
            <FlatList
              data={faqCategoriesArray}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
            />
          </View>
          <Spacing space={SH(20)} />
          <View style={CommonStyles?.suportItemListView}>
            <FaqList data={faqListData} />

          </View>
        </View>
      ),
    },
    {
      key: '2',
      title: 'Contact Us',
      content: (
        <View style={{ width: '100%' }}>
          <Spacing space={SH(20)} />
          <TouchableOpacity style={[CommonStyles.suportBoxView]}>
            <VectorIcons iconFamily="MaterialCommunityIcons" name="phone" size={SW(25)} color={colors.pine_green_color} />
            <Text style={CommonStyles.suportTitle}>+91 5446895781</Text>
          </TouchableOpacity>
          <Spacing space={SH(15)} />
          <TouchableOpacity style={[CommonStyles.suportBoxView]}>
            <VectorIcons iconFamily="MaterialCommunityIcons" name="email" size={SW(25)} color={colors.pine_green_color} />
            <Text style={CommonStyles.suportTitle}>help@example.com</Text>
          </TouchableOpacity>
          <Spacing space={SH(15)} />
          <TouchableOpacity style={[CommonStyles.suportBoxView]}>
            <VectorIcons iconFamily="MaterialCommunityIcons" name="web" size={SW(25)} color={colors.pine_green_color} />
            <Text style={CommonStyles.suportTitle}>www.website.com</Text>
          </TouchableOpacity>
          <Spacing space={SH(15)} />
          <TouchableOpacity style={[CommonStyles.suportBoxView]}>
            <VectorIcons iconFamily="MaterialCommunityIcons" name="instagram" size={SW(25)} color={colors.pine_green_color} />
            <Text style={CommonStyles.suportTitle}>Instagram</Text>
          </TouchableOpacity>
          <Spacing space={SH(15)} />
          <TouchableOpacity style={[CommonStyles.suportBoxView]}>
            <VectorIcons iconFamily="MaterialCommunityIcons" name="facebook" size={SW(25)} color={colors.pine_green_color} />
            <Text style={CommonStyles.suportTitle}>Facebook</Text>
          </TouchableOpacity>
          <Spacing space={SH(15)} />
          <TouchableOpacity style={[CommonStyles.suportBoxView]}>
            <VectorIcons iconFamily="MaterialCommunityIcons" name="twitter" size={SW(25)} color={colors.pine_green_color} />
            <Text style={CommonStyles.suportTitle}>Twitter</Text>
          </TouchableOpacity>
          <Spacing space={SH(15)} />
        </View>
      ),
    },
  ];

  return (
    <Container containerPropStyle={CommonStyles.commonBackground}>
      <ScrollView style={CommonStyles.paddingHorizontalCommon}>
        <Spacing space={SH(20)} />
        <CustomTabView tabs={tabs} />
        <Spacing space={SH(20)} />
      </ScrollView>
      <TouchableOpacity style={CommonStyles.suportFixButton}>
        <LottieIcon source={images.customer_support} style={{ height: SW(100) }} />
      </TouchableOpacity>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(SupportScreen);
