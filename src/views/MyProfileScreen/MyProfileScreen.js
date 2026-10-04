import React,{useContext} from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Container, Spacing, SvgIcons, Switch, VectorIcons } from '../../components';
import { connect } from 'react-redux';
import { SH, SF, useThemeHelper, SW, ProfileListArray, UserDetails, onShare } from '../../helper';
import { ProfileStyle } from '../../styles';
import { RouteName } from '../../routes';
import { useDispatch } from 'react-redux';
import { login_Action } from '../../redux/action';
import { useTheme } from '../../theme/ThemeProvider';

const MyProfileScreen = (props) => {
  const { navigation } = props;
  const { colors } = useThemeHelper()
  const MyProfileStyle = ProfileStyle(colors)
  const dispatch = useDispatch();

  const handleNavigate = (url) => {
    if (url == 'share') {
      onShare()
    } else {
      url != '' && navigation.navigate(url);
    }
  }
  const onhandleLogout = () => {
    dispatch(login_Action(false));
    navigation.navigate(RouteName.ONBOARDING_SCREEN);
  }

  const { dark, setScheme } = useContext(useTheme);

  const [isSwitchOn, setIsSwitchOn] = React.useState(dark ? true : false);
  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn)
    dark ? setScheme('light') : setScheme('dark');
  };

  return (
    <Container>
      <View style={[MyProfileStyle.container, { backgroundColor: colors.mint_white }]}>

        <ScrollView>
          <View style={MyProfileStyle.myProfileBannerView}>
            <Spacing space={SH(15)} />
            <View style={MyProfileStyle.imageSection}>
              <View style={MyProfileStyle.imageSectionInner}>
                <View style={[MyProfileStyle.myProfileBannerImageInnerView]}>
                  <SvgIcons name="female" height={SW(47)} width={SW(47)} />
                </View>
                <View>
                  <Text style={[MyProfileStyle.myProfileNameText]}>{UserDetails.name} {UserDetails.lastname}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleNavigate(RouteName.EDIT_PROFILE_SCREEN)}>
                <VectorIcons iconFamily="SimpleLineIcons" name="arrow-right" size={SF(20)} color={colors.white} />
              </TouchableOpacity>
            </View>
            <Spacing space={SH(15)} />
          </View>

          <View>
            <View style={MyProfileStyle.boxShadowView}>
              <View style={[MyProfileStyle.sectionBoxView]}>
                <TouchableOpacity style={MyProfileStyle.sectionBoxInnerView} onPress={() => navigation.navigate(RouteName.MY_ORDER_SCREEN)}>
                  <VectorIcons iconFamily="Feather" name="box" size={SF(23)} color={colors.primary_color} />
                  <Text style={MyProfileStyle.sectionBoxInnerText}>Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MyProfileStyle.sectionBoxInnerView} onPress={() => navigation.navigate(RouteName.BOTTOM_TAB_NAVIGATOR, { screen: RouteName.WISHLIST_SCREEN })}>
                  <VectorIcons iconFamily="Octicons" name="heart" size={SF(23)} color={colors.primary_color} />
                  <Text style={MyProfileStyle.sectionBoxInnerText}>Wishlist</Text>
                </TouchableOpacity>
              </View>
              <Spacing space={SH(15)} />
              <View style={[MyProfileStyle.sectionBoxView]}>
                <TouchableOpacity style={MyProfileStyle.sectionBoxInnerView} onPress={() => navigation.navigate(RouteName.COUPON_SCREEN)}>
                  <VectorIcons iconFamily="AntDesign" name="gift" size={SF(23)} color={colors.primary_color} />
                  <Text style={MyProfileStyle.sectionBoxInnerText}>Coupons</Text>
                </TouchableOpacity>
                <TouchableOpacity style={MyProfileStyle.sectionBoxInnerView} onPress={() => navigation.navigate(RouteName.SUPPORT_SCREEN)}>
                  <VectorIcons iconFamily="MaterialIcons" name="headset-mic" size={SF(23)} color={colors.primary_color} />
                  <Text style={MyProfileStyle.sectionBoxInnerText}>Help Center</Text>
                </TouchableOpacity>
              </View>
            </View>

            <Spacing space={SH(10)} />

            <View style={MyProfileStyle.boxListMainView}>
              {ProfileListArray.map((item, index) => {
                return (
                  <View
                    key={index}
                    style={MyProfileStyle.boxShadowView}>
                    <Text style={MyProfileStyle.headingText}>{item.heading}</Text>
                    <Spacing space={SH(15)} />
                    <View style={MyProfileStyle.boxListInnerView}>
                      {item.data.map((itemi, index) => {
                        return (
                          <TouchableOpacity key={index} style={MyProfileStyle.listView} onPress={() => handleNavigate(itemi?.navigate || '')}>
                            <View style={MyProfileStyle.listLeftView}>
                              <VectorIcons iconFamily={itemi.iconFamily} name={itemi.icon} size={SF(itemi.size)} color={colors.primary_color} />
                              <Text style={MyProfileStyle.listLeftText}>{itemi.title}</Text>
                            </View>
                            <View>
                              <VectorIcons iconFamily="Ionicons" name="arrow-forward-outline" size={SF(15)} color={colors.light_black} />
                            </View>
                          </TouchableOpacity>
                        )
                      })}
                    </View>
                  </View>
                )
              })}
            </View>
            <Spacing space={SH(10)} />
             
              <View style={MyProfileStyle.boxShadowView}>
                  <View style={MyProfileStyle.listLeftView}>
                    <Switch onValueChange={onToggleSwitch} value={isSwitchOn} />
                    <Text style={MyProfileStyle.listLeftText}>Dark/Light Mode</Text>
                  </View>
            </View>
            <Spacing space={SH(10)} />

            <View style={MyProfileStyle.boxListMainView}>
              <View style={MyProfileStyle.boxShadowView}>
                <TouchableOpacity
                onPress={()=>navigation.navigate(RouteName.ALL_SCREEN)}
                style={MyProfileStyle.listView}>
                  <View style={MyProfileStyle.listLeftView}>
                    <Text style={MyProfileStyle.headingText}>See All Screen</Text>
                  </View>
                  <View>
                    <VectorIcons iconFamily="Ionicons" name="arrow-forward-outline" size={SF(15)} color={colors.light_black} />
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Spacing space={SH(30)} />
            <TouchableOpacity style={MyProfileStyle.logOutView} onPress={onhandleLogout}>
              <View style={MyProfileStyle.logOutIconView}>
                <VectorIcons iconFamily="AntDesign" name="logout" size={SF(22)} color={colors.white} />
              </View>
              <Text style={MyProfileStyle.logOutText}>Log Out</Text>
            </TouchableOpacity>
            <Spacing space={SH(90)} />
          </View>
        </ScrollView>
      </View>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.commonReducer.isLoggedIn,
  };
};
export default connect(mapStateToProps, null)(MyProfileScreen);
