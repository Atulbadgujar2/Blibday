import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView, Image
} from "react-native";
import { AllCategoriesData, AllproductsData, SH, SW, useThemeHelper } from '../../helper';
import { Container, Spacing, VectorIcons } from "../../components";
import { Styles } from "../../styles";
import { connect } from 'react-redux';
import { RouteName } from "../../routes";
const recentSearches = ["Milk", "Bread", "Shampoo", "Noodles", "Apple"];
const discoverMore = [
  { name: "Top Deals", icon: "pricetags-outline" },
  { name: "Trending Now", icon: "flame-outline" },
  { name: "Healthy Foods", icon: "heart-outline" },
  { name: "Best Sellers", icon: "star-outline" },
];
const SearchBarScreen = (props) => {
  const { navigation, route } = props;
  const { searchText = "" } = route?.params || {};
  const { colors } = useThemeHelper();
  const styles = Styles(colors)
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  // Handle search input change
  const handleSearch = (text) => {
    setSearch(text);

    if (text.trim().length === 0) {
      setResults([]);
      return;
    }

    const filtered = AllproductsData.filter((item) =>
      item?.name.toLowerCase().includes(text.toLowerCase())
    );
    setResults(filtered);
  };

  // Show filtered products when typing
  useEffect(() => {
    if (searchText.length > 0) {
      handleSearch(searchText)
    } else {
      setResults([]);
    }
  }, [searchText]);
  return (
    <Container>
      {/* Search Box */}
      <View style={styles.searchBarcontainer}>
        <View style={styles.searchBarsearchContainer}>
          <VectorIcons iconFamily="Ionicons" name="search" size={20} color={colors.gray} />
          <TextInput
            placeholder="Search for products..."
            placeholderTextColor={colors.gray}
            style={styles.searchBarsearchInput}
            value={search}
            onChangeText={handleSearch}
            autoFocus={true}
          />
          {/* Clear Button */}
          {search.length > 0 && (
            <TouchableOpacity
              onPress={() => {
                setSearch("");
                setResults([]);
              }}
            >
              <VectorIcons iconFamily="Ionicons" name="close-circle" size={20} color={colors.gray} />
            </TouchableOpacity>
          )}
        </View>
        {/* ⌨ Typing Result Dropdown */}
        {search.length > 0 && (
          <View style={styles.searchBarsearchResultBox}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {results.length > 0 ? (
                results.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate(RouteName.SEARCH_SCREEN, { search: item?.name })}
                    key={index} style={styles.searchBarresultItem}>
                    <VectorIcons iconFamily="Ionicons" name="search-outline" size={18} color={colors.gray} />
                    <Text style={styles.searchBarresultText}>{item?.name}</Text>
                  </TouchableOpacity>
                ))
              ) : (
                <Text style={styles.searchBarnoResult}>No Results Found</Text>
              )}
            <Spacing space={SH(30)} />
            </ScrollView>
          </View>
        )}
        {/* Hide content while typing */}
        {search.length > 0 ? null : (
          <ScrollView showsVerticalScrollIndicator={false}>



            {/* Recent Searches */}
            <View style={styles.searchBarsection}>
              <Text style={styles.searchBarsectionTitle}>Recent Searches</Text>

              {recentSearches.map((item, index) => (
                <TouchableOpacity
                  onPress={() => navigation.navigate(RouteName.SEARCH_SCREEN, { search: item })}
                  key={index} style={styles.searchBarrecentItem}>
                  <VectorIcons iconFamily="Ionicons" name="time-outline" size={18} color={colors.light_black} />
                  <Text style={styles.searchBarrecentText}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>

            {/* Categories Slider (Horizontal) */}
            <View style={styles.searchBarsection}>
              <Text style={styles.searchBarsectionTitle}>Categories</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.searchBarcategorySliderContainer}
              >
                {AllCategoriesData.map((item, index) => (
                  <TouchableOpacity
                    onPress={() => navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR, { screen: RouteName.CATEGORY_SCREEN })}
                    key={index} style={styles.searchBarcategorySliderItem}>
                    <Image source={item.image} style={{
                      width: 58,
                      height: 58
                    }} />
                    <Text style={styles.searchBarcategorySliderText}>{item.shortName}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>

            {/* Discover More Section */}
            <View style={styles.searchBarsection}>
              <Text style={styles.searchBarsectionTitle}>Discover More</Text>

              <View style={styles.searchBarcategoryGrid}>
                {discoverMore.map((item, index) => (
                  <TouchableOpacity key={index} style={styles.searchBarcategoryTag}>
                    <VectorIcons iconFamily="Ionicons" name={item.icon} size={22} color={colors.primary_color} />
                    <Text style={styles.searchBarcategoryText}>{item.name}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
            <Spacing space={SH(20)} />
          </ScrollView>
        )}
      </View>
    </Container>
  );
}
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(SearchBarScreen);
