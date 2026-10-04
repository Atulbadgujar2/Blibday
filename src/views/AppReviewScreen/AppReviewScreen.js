import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { Button, Container, Ratings, Spacing } from "../../components";
import { useThemeHelper } from "../../helper";
import { Styles } from "../../styles";
import { connect } from 'react-redux';

const AppReviewScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const Style = Styles(colors)

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  return (
    <Container>
      <ScrollView contentContainerStyle={Style.paddingHorizontalCommon}>
        <Spacing space={50} />

        {/* RATING */}
        <Text style={[Style.reviewsectionTitle, Style.textAlign]}>Tell Us to Improve</Text>
        <Spacing space={10} />

        <Text style={[Style.reviewsectionSmallTitle, , Style.textAlign]}>please give your rating by clicking on
          the stars below</Text>

        <Spacing space={30} />
        <View style={Style.centerView}>
          <Ratings
            rating={rating}
            interactive={true}
            onRate={(value) => setRating(value)}
            showNumber={false}
            size={30}
            color={colors.secondary_color}
          />
        </View>
        <Spacing space={35} />


        {/* REVIEW INPUT */}
        <Text style={[Style.reviewsectionTitle, Style.textAlign]}>Let us know what you think</Text>
        <Spacing space={10} />

        <TextInput
          placeholder="Share your experience..."
          value={review}
          onChangeText={setReview}
          style={Style.reviewinput}
          placeholderTextColor={colors.gray}
          multiline
        />
        <Spacing space={55} />

        {/* SUBMIT BUTTON */}
        <Button title="Submit Review" />

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
export default connect(mapStateToProps, null)(AppReviewScreen);


