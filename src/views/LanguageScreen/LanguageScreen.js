import React, { useState } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Spacing, VectorIcons } from '../../components';
import { connect } from 'react-redux';
import { SH, SF, LanguageList, useThemeHelper } from '../../helper';
import { Styles } from '../../styles';

const LanguageScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper();
  const LanguageStyle = Styles(colors);
  const [isChecked, setIsChecked] = useState("English");
  return (
    <Container>
      <ScrollView>
        <View style={LanguageStyle.paddingHorizontalCommon}>
          <Spacing space={SH(20)} />
          {LanguageList.map((item, index) => {
            return (
              <View key={index}>
                <TouchableOpacity key={index} style={[LanguageStyle.languageBoxView, isChecked == item?.value && { borderColor: colors.mint_green_color }]} onPress={() => { setIsChecked(item?.value) }}>
                  <Text style={LanguageStyle.languageBoxText}>{item?.lable}</Text>
                  {isChecked == item?.value ?
                    <VectorIcons
                      iconFamily="Entypo"
                      name={'language'}
                      size={SF(22)}
                      color={colors.primary_color} />
                    :
                    <VectorIcons
                      iconFamily="MaterialCommunityIcons"
                      name={'radiobox-blank'}
                      size={SF(22)}
                      color={colors.gray} />
                  }
                </TouchableOpacity>
              </View>
            )
          }
          )}
          <Spacing space={SH(20)} />
        </View>
          <View style={LanguageStyle.languageBgIconView}>
        <VectorIcons
          iconFamily="Entypo"
          name={'language'}
          size={SF(250)}
          color={colors.mint_white} />
      </View>
      </ScrollView>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(LanguageScreen);
