import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import { Button, Container, Ratings, Spacing, VectorIcons } from "../../components";
import { ProductDetailsData, useThemeHelper } from "../../helper";
import { Styles } from "../../styles";
import { connect } from 'react-redux';
import images from "../../images";
import { CURRENCY } from "../../constants";
import { RouteName } from "../../routes";

const ReviewScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSelectImage = () => {
    // Here you can integrate:
    // react-native-image-picker
  };

  return (
    <Container containerPropStyle={Style.themeBackgroundColor}>
      <ScrollView contentContainerStyle={Style.paddingHorizontalCommon}>
        <Spacing space={20} />

        {/* PRODUCT DETAILS */}
        <View style={Style.reviewproductBox}>
          <Image
            source={images.product1}
            style={Style.reviewproductImage}
          />
          <View style={Style.flex}>
            <Text style={Style.reviewproductName}>{ProductDetailsData?.name}</Text>
            <Spacing space={5} />
            <Text style={Style.reviewproductBrand}>{ProductDetailsData?.weight}</Text>
            <Spacing space={5} />
            <Text style={Style.reviewproductName}>{CURRENCY}{ProductDetailsData?.price}</Text>
          </View>
        </View>
        <Spacing space={25} />

        {/* RATING */}
        <Text style={Style.reviewsectionTitle}>Rate This Product</Text>

        <Spacing space={10} />
        <Ratings
          rating={rating}
          interactive={true}
          onRate={(value) => setRating(value)}
          showNumber={false}
          size={30}
          color={colors.secondary_color}
        />
        <Spacing space={25} />


        {/* REVIEW INPUT */}
        <Text style={Style.reviewsectionTitle}>Write Your Review</Text>
        <Spacing space={10} />

        <TextInput
          placeholder="Share your experience..."
          value={review}
          onChangeText={setReview}
          style={Style.reviewinput}
          multiline
        />
        <Spacing space={25} />

        {/* ADD IMAGES */}
        <Text style={Style.reviewsectionTitle}>Add Photos</Text>
        <Spacing space={10} />

        <View style={Style.reviewimageRow}>
          <TouchableOpacity style={Style.reviewaddImageBtn} onPress={handleSelectImage}>
            <VectorIcons
              iconFamily="Entypo"
              name="plus"
              size={30}
              color={colors.gray}
            />
          </TouchableOpacity>

        </View>
        <Spacing space={20} />

        {/* SUBMIT BUTTON */}
        <Button title="Submit Review" onPress={()=>navigation.navigate(RouteName.MY_ORDER_SCREEN)} />

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
export default connect(mapStateToProps, null)(ReviewScreen);


