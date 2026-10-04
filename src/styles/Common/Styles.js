import { Platform, StyleSheet } from 'react-native';
import { SF, SH, SW } from '../../helper';
import { COMMON_PADDING, Fonts, HEADER_ICON_SIZE, ONBOADING_BOTTOM_SPACE, TAB_BAR_HEIGHT } from '../../constants';

export default StyleSheet.create((colors) => ({
  /* Common Style Start */
  themeBackgroundColor: {
    backgroundColor: colors.background_color,
  },
  mainContainerStyle: {
    flex: 1,
    backgroundColor: colors.background_white_color,
  },
  container: {
    height: '100%',
    flexDirection: "column",
    justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollview: {
    flexGrow: 1,
    justifyContent: "center",
  },
  commonBackground: {
    backgroundColor: colors.background_white_color
  },
  commonBackgroundLight: {
    backgroundColor: colors.background
  },
  paddingHorizontalCommon: {
    paddingHorizontal: SW(COMMON_PADDING)
  },
  paddingVerticalCommon: {
    paddingVertical: SW(COMMON_PADDING)
  },
  paddingLeftCommon: {
    paddingLeft: SW(COMMON_PADDING)
  },
  paddingRightCommon: {
    paddingRight: SW(COMMON_PADDING)
  },
  marginLeftCommon: {
    marginLeft: SW(COMMON_PADDING)
  },
  marginRightCommon: {
    marginRight: SW(COMMON_PADDING)
  },
  width100: {
    width: "100%"
  },
  paddingHorizontalHeader: {
    paddingHorizontal: SW(3)
  },
  hr: {
    borderBottomColor: colors.light_gray_01,
    borderBottomWidth: 1
  },
  headerStyle: {
    backgroundColor: colors.primary_color,
  },
  headerWhiteStyle: {
    backgroundColor: colors.white_to_black_color,
  },
  headerTitleStyle: {
    color: colors.secondary_color,
    fontFamily: Fonts.Font_Medium,
    fontSize: 22
  },
  textAlign: {
    textAlign: 'center'
  },
  flex: {
    flex: 1
  },
  flexShrink: {
    flexShrink: 1
  },
  centerView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabBarStyle: {
    backgroundColor: colors.white_to_black_color, // Tab bar background color
    height: SH(TAB_BAR_HEIGHT), // Tab bar height
    borderTopLeftRadius: SW(25),
    borderTopRightRadius: SW(25),
    justifyContent: 'center', // Center content verticall
    borderWidth: 0,
    borderTopWidth: 0,
    borderBottomWidth: 0,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 0,
    paddingBottom: 0,
    marginTop: 0,
    marginBottom: 0
  },
  tabBarLabelStyle: {
    fontSize: SF(12), // Label font size
    fontFamily: Fonts.Font_Medium,
    color:colors.black_to_white_color
  },
  tabBarIconStyle: {
    marginTop: SH(5), // Fine-tuning icon position
    marginBottom: SH(7), // Fine-tuning icon position
  },
  /* Common Style End */

  /* Onboarding Style Start */
  activeDotView: {
    width: SW(18),
    height: SH(18),
    backgroundColor: colors.primary_color,
    borderRadius: SW(100),
    bottom: SH(ONBOADING_BOTTOM_SPACE),
  },
  dotView: {
    width: SW(12),
    height: SH(12),
    backgroundColor: colors.tea_green_color,
    borderRadius: SW(100),
    bottom: SH(ONBOADING_BOTTOM_SPACE),
  },
  renderNextButtonView: {
    flexDirection: 'row',
    height: SH(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderDoneButtonView: {
    flexDirection: 'row',
    height: SH(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  onBoardingView: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  onBoardingImage: {
    maxWidth: '100%',
    height: SH(450),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  onBoardingTextBig: {
    fontSize: SF(30),
    lineHeight: SH(40),
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color,
    textAlign: 'center'
  },
  onBoardingTextSmall: {
    fontSize: SF(16),
    fontFamily: Fonts.Font_Medium,
    color: colors.light_black,
    textAlign: 'center',
    lineHeight: SH(23)
  },
  onBoardingImageView: {
    position: 'relative',
    overflow: 'hidden'
  },
  onBoardingMaskView: {
    height: SH(150),
    width: '100%',
    backgroundColor: colors.white_to_black_color,
    position: 'absolute',
    bottom: SH(-75),
    borderTopRightRadius: '100%',
    borderTopLeftRadius: '100%',
    shadowColor: colors.black,
   shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 24,
  },
  onBoardingButtonView: {
    backgroundColor: colors.primary_color,
    padding: SH(5),
    borderRadius: SH(45),
    height: SH(45),
    width: SH(45),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: SH(ONBOADING_BOTTOM_SPACE),
  },

  onBoardingButtonPreView: {
    borderWidth: SH(1),
    borderColor: colors.primary_color,
    padding: SH(5),
    borderRadius: SH(45),
    height: SH(45),
    width: SH(45),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: SH(ONBOADING_BOTTOM_SPACE),
    bottom: SH(ONBOADING_BOTTOM_SPACE),
  },
  /* Onboarding Style End */

  /* Terms Condition Start */
  commonScreenHeadingText: {
    fontSize: SF(18),
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color,
    textTransform: 'uppercase'
  },
  commonScreenText: {
    fontSize: SF(15),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color
  },
  commonScreenTextSmall: {
    fontSize: SF(14),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color,
    fontStyle: 'italic'
  },
  /* Terms Condition End */

  /* app Header style start */
  appHeaderMainView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Platform.OS === "ios" ? 0 : SH(15),
    marginBottom: Platform.OS === "ios" ? 0 : SH(15),
  },
  appHeaderTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingRight: SH(HEADER_ICON_SIZE)
  },
  appHeaderIconView: {
    borderColor: colors.light_gray,
    borderWidth: SH(1),
    width: SH(HEADER_ICON_SIZE),
    height: SH(HEADER_ICON_SIZE),
    borderRadius: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: colors.white_to_black_color
  },
  /* app Header style End */

  /* Language Style start */
  languageHeading: {
    fontSize: SF(17),
    color: colors.black,
    fontFamily: Fonts.Font_Bold
  },
  languageBoxView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: SH(13),
    borderRadius: SH(8),
    paddingHorizontal: SW(10),
    marginBottom: SH(15),
    borderWidth: SH(1),
    borderColor: colors.gainsboro
  },
  languageBoxText: {
    color: colors.black_to_white_color,
    fontSize: SF(15),
    fontFamily: Fonts.Font_Medium
  },
  languageBgIconView: {
    position: 'absolute',
    bottom: -20,
    zIndex: -1,
    left: 0,
    right: 0,
    justifyContent: 'center',
    flexDirection: 'row'
  },
  /* Language Style end */
  /* Location Style Start */
  locationIconView: {
    backgroundColor: colors.tea_green_color,
    width: SW(120),
    height: SW(120),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '100%'
  },
  locationText: {
    fontSize: SF(25),
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color,
    textAlign: 'center'
  },
  locationSmallText: {
    fontSize: SF(15),
    fontFamily: Fonts.Font_Medium,
    color: colors.light_black,
    textAlign: 'center'
  },
  locationLinkText: {
    fontSize: SF(18),
    fontFamily: Fonts.Font_Medium,
    color: colors.primary_color,
    textAlign: 'center'
  },
  /* Location Style end */

  /* Suport Start */
  suportBoxView: {
    backgroundColor: colors.white_to_black_color,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    borderRadius: SH(10),
    paddingHorizontal: SW(15),
    paddingVertical: SW(15),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: SW(13)
  },
  suportHeading: {
    color: colors.light_black,
    fontSize: SF(18),
    fontFamily: Fonts.Font_Medium
  },
  suportTitle: {
    color: colors.black_to_white_color,
    fontSize: SF(15),
    fontFamily: Fonts.Font_Medium
  },
  suportCategoryView: {
    backgroundColor: colors.cultured,
    borderRadius: SW(20),
    paddingHorizontal: SW(20),
    paddingVertical: SW(7),
    marginRight: SW(10)
  },
  suportCategoryActive: {
    backgroundColor: colors.primary_color,
  },
  suportCategoryTextActive: {
    color: colors.white,
  },
  suportCategorytext: {
    fontSize: SF(15),
    color: colors.black_to_white_color,
    textAlign: 'center',
    fontFamily: Fonts.Font_Medium
  },
  suportItemListView: {
    flexDirection: 'column',
    gap: SH(10)
  },
  suportFixButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: SW(100),
    height: SW(100)
  },
  /* Suport End */
  tabContainer: {
    height: 64,
    alignItems: 'center',
    justifyContent: 'center',
  },

  /* Not Found Style Start */
  notFoundView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  notFoundBigTitle: {
    fontSize: SF(17),
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_Bold,
    textAlign: 'center'
  },
  notFoundSmallTitle: {
    fontSize: SF(14),
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_Medium,
    textAlign: 'center'
  },
  notFoundImage: {
    maxWidth: '100%'
  },

  notFoundImageNoView: {
    height: SW(300),
    width: SW(300),
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  notFoundImageView: {
    backgroundColor: colors.tea_green_color,
    height: SW(300),
    width: SW(300),
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: SW(30),
    borderColor: colors.mint_white,
    overflow: 'hidden'
  },
  /* Not Found Style End */

  /* Notification Style Start */
  notificationView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.white_to_black_color,
    padding: SW(20),
    marginBottom: SW(20),
    borderRadius: SW(5),
  },
  notificationInnerShadView: {
    width: SW(45),
    height: SW(45),
    borderRadius: SW(50),
    backgroundColor: colors.tea_green_color,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SW(-45)
  },
  notificationInnerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: SW(10),
    width: '100%',
    alignItems: 'center'

  },
  notificationUserImageView: {
    width: SW(45),
    height: SW(45),
    borderRadius: SW(50),
    backgroundColor: colors.tea_green_color,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.white_to_black_color
  },
  notificationUserImage: {
    width: '100%',
    height: '100%',
    borderRadius: SW(45)
  },
  notificationHeading: {
    color: colors.black_to_white_color,
    fontSize: SF(15),
    fontFamily: Fonts.Font_SemiBold
  },
  notificationMessage: {
    fontSize: SF(14),
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_Medium,
    lineHeight: SH(22),
    textAlign: 'left'
  },
  notificationTime: {
    fontSize: SF(12),
    color: colors.light_black,
    fontFamily: Fonts.Font_Regular
  },
  notificationTick: {
    position: 'absolute',
    right: SW(5),
    bottom: SW(5)
  },

  notificationSetInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SW(10),
    width: '100%',
    alignItems: 'center'

  },
  notificationSetHeading: {
    color: colors.black,
    fontSize: SF(16),
    fontFamily: Fonts.Font_Bold
  },

  notificationSetMessage: {
    fontSize: SF(13),
    color: colors.gray,
    fontFamily: Fonts.Font_Medium,
    lineHeight: SH(22),
    textAlign: 'left'
  },
  /* Notification Style End */


  /* My Walle Style Start */
  myWalletView: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: SW(20),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.bright_gray,
    elevation: 0,
    backgroundColor: colors.white_to_black_color,
    paddingHorizontal: 10,
    paddingVertical: 8
  },
  myWalletInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: SW(10),
    width: '100%',
    alignItems: 'center'
  },
  myWalletInnerLeftView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: SW(10),
    alignItems: 'center'
  },
  myWalletInnerShadView: {
    width: SW(55),
    height: SW(55),
    borderRadius: SW(55),
    backgroundColor: colors.tea_green_color,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: SW(-55)
  },
  myWalletUserImageView: {
    width: SW(55),
    height: SW(55),
    borderRadius: SW(55),
    backgroundColor: colors.tea_green_color,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    backgroundColor: colors.white_to_black_color,
    borderColor: colors.bright_gray,
  },
  myWalletHeading: {
    color: colors.black_to_white_color,
    fontSize: SF(14),
    fontFamily: Fonts.Font_SemiBold
  },
  myWalletTime: {
    fontSize: SF(12),
    color: colors.light_black,
    fontFamily: Fonts.Font_Regular
  },
  myWalletAmount: {
    color: colors.black_to_white_color,
    fontSize: SF(15),
    fontFamily: Fonts.Font_Bold
  },
  myWalletBox: {
    paddingVertical: SW(20),
    paddingHorizontal: SW(20),
    borderRadius: SW(20),
  },
  myWalletShapeView: {
    width: 220,
    height: 100,
    opacity: 0.1,
    transform: [{ rotate: "-135deg" }],
    position: 'absolute',
    top: '30%',
    right: '-5%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  myWalletShapeLeftView: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 100,
    height: 100,
    borderWidth: 20,
    borderColor: "white",
    borderStyle: "solid",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 0,
    transform: [{ rotate: "-135deg" }],
  },
  myWalletShapeRightView: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 100,
    height: 100,
    borderWidth: 20,
    borderColor: "white",
    borderStyle: "solid",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    transform: [{ rotate: "-135deg" }],
  },
  myWalletBalanceText: {
    fontFamily: Fonts.Font_Regular,
    color: colors.white,
    fontSize: SF(17)
  },
  myWalletTotalAmountText: {
    fontFamily: Fonts.Font_ExtraBold,
    color: colors.white,
    fontSize: SF(25)
  },
  myWalletAddButton: {
    backgroundColor: colors.white_to_black_color,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-end',
    borderRadius: 20
  },
  myWalletAddButtonText: {
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color,
    fontSize: SF(13),
    textTransform: 'uppercase'
  },
  myWalletHistoryText: {
    fontFamily: Fonts.Font_Medium,
    color: colors.black_to_white_color,
    fontSize: SF(16)
  },
  /* My Walle Style End */
  /* Add Money Style Start */
  addMoneycardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderColor: colors.bright_gray,
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 10,
    marginBottom: 10,
  },

  addMoneycardLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  addMoneycardIconBox: {
    backgroundColor: colors.cultured,
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },

  addMoneycardImage: {
    width: 31,
    height: 20,
    resizeMode: "contain",
  },

  addMoneycardTitle: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(15),
    color: colors.black_to_white_color,
    textAlign: "center",
  },

  addMoneyamountBox: {
    width: "100%",
    backgroundColor: colors.white_to_black_color,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: colors.bright_gray,
  },

  addMoneyamountLabel: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(15),
    color: colors.gray,
    textAlign: "center",
  },

  addMoneyamountInputRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  addMoneydollarText: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(20),
    color: colors.black,
  },

  addMoneyamountInput: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(20),
    color: colors.black_to_white_color,
    textAlign: "left",
  },

  addMoneyquickAmountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },

  addMoneyquickAmountBtn: {
    backgroundColor: colors.white_to_black_color,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 13,
    borderWidth: 1,
    borderColor: colors.bright_gray,
  },

  addMoneyquickAmountText: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(13),
    color: colors.gray,
    textAlign: "center",
  },
  /*  Add Money Style End */
  payMethodViewContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderColor: colors.bright_gray,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: colors.white_to_black_color,
    elevation: 3,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    paddingVertical: 10
  },

  bannerImageFull: {
    width: "100%",
    height: '100%',
    resizeMode: "cover",
  },

  bannerImageMaxFull: {
    maxWidth: "100%",
    height: '100%',
    resizeMode: "cover",
  },

  searchBarcontainer: {
    flex: 1,
    backgroundColor: colors.white_to_black_color,
    paddingHorizontal: SW(COMMON_PADDING),
    paddingVertical: SW(COMMON_PADDING),
  },

  searchBarsearchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white_to_black_color,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: colors.bright_gray01,
  },

  searchBarsearchInput: {
    flex: 1,
    fontSize: 15,
    color: colors.black_to_white_color,
    marginLeft: 8,
    fontFamily: Fonts.Font_Medium,
    paddingTop: 0,
    paddingBottom: 0,
  },

  searchBarsection: {
    marginTop: 25,
  },

  searchBarsectionTitle: {
    fontSize: 18,
    fontFamily: Fonts.Font_SemiBold,
    marginBottom: 15,
    color: colors.black_to_white_color,
  },

  // Recent search
  searchBarrecentItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.gainsboro,
  },

  searchBarrecentText: {
    marginLeft: 10,
    fontSize: 13,
    color: colors.light_black,
    fontFamily: Fonts.Font_Regular
  },

  // Horizontal Category Slider
  searchBarcategorySliderContainer: {
    paddingVertical: 5,
  },

  searchBarcategorySliderItem: {
    backgroundColor: colors.mint_dark_white,
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },

  searchBarcategorySliderText: {
    fontSize: 14,
    color: colors.black,
    marginTop: 5,
    fontFamily: Fonts.Font_SemiBold
  },

  // Discover More Grid
  searchBarcategoryGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  searchBarcategoryTag: {
    width: "30%",
    backgroundColor: colors.white_to_black_color,
    paddingVertical: 18,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
    shadowColor:colors.black_to_white_color,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },

  searchBarcategoryText: {
    fontSize: 14,
    fontFamily: Fonts.Font_SemiBold,
    marginTop: 5,
    color: colors.black_to_white_color,
  },

  // Search result dropdown
  searchBarsearchResultBox: {
    backgroundColor: colors.white_to_black_color,
    borderRadius: 10,
    marginTop: 10,
    paddingVertical: 5,
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },

  searchBarresultItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.cultured,
  },

  searchBarresultText: {
    marginLeft: 10,
    fontSize: 15,
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_Medium
  },

  searchBarnoResult: {
    fontSize: 15,
    padding: 15,
    textAlign: "center",
    fontFamily: Fonts.Font_Medium,
    color: colors.gray,
  },

  // Search Styles
  //  filter style
  searchsortFilterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    gap: 10,
    backgroundColor: colors.pine_green_color,
    paddingVertical: 10,
    paddingHorizontal: SW(COMMON_PADDING)
  },
  searchsfBtnView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: 'center',
    gap: 20
  },
  searchsfBtn: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    gap: 5
  },
  searchsfText: {
    fontSize: 14,
    color: colors.white,
    fontFamily: Fonts.Font_Medium
  },
  searchsectionTitle: {
    fontSize: 18,
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_Bold
  },
  /* Search View */
  searchView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    gap: 5
  },
  searchInnerView: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white_to_black_color,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderWidth: 1,
    borderColor: colors.bright_gray_dark,
    flex: 1
  },
  searchcartInnerView: {
    backgroundColor: colors.white_to_black_color,
    padding: 10,
    borderRadius: "100%",
    borderWidth: 1,
    borderColor: colors.bright_gray_dark,
  },
  /* Modals */
  searchmodalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },
  searchmodalBox: {
    height: '90%',
    backgroundColor: colors.white_to_black_color,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  searchmodalSortBox: {
    backgroundColor: colors.white_to_black_color,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: 'hidden',
  },
  searchscrollArea: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  searchmodalTitle: {
    fontSize: 20,
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color
  },
  searchmodalHeader: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: colors.bright_gray,
  },
  searchmodalItem: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchmodalTxt: {
    fontSize: 15,
    fontFamily: Fonts.Font_Medium,
    color: colors.black_to_white_color
  },

  /* Filter */
  searchfilterLabel: {
    fontSize: 15,
    fontFamily: Fonts.Font_Medium,
    color: colors.black_to_white_color
  },

  searchpriceRow: { flexDirection: "row", flexWrap: "wrap", gap: 10, marginTop: 10 },

  searchpriceBox: {
    backgroundColor: colors.bright_gray01,
    padding: 10,
    borderRadius: 10,
  },
  searchpriceText: {
    fontSize: 15,
    fontFamily: Fonts.Font_Medium,
    color: colors.black_to_white_color
  },

  searchcategoryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    padding: 15,
    backgroundColor: colors.white_to_black_color,
    borderTopWidth: 1,
    borderColor: colors.bright_gray,
  },
  searchapplyBtn: {
    backgroundColor: colors.primary_color,
    paddingVertical: 12,
    borderRadius: 7,
    flex: 1,
    borderWidth: 1,
    borderColor: colors.primary_color
  },
  searchapplyCancel: {
    backgroundColor: colors.white_to_black_color,
  },
  searchapplyText: {
    textAlign: "center",
    color: colors.white_to_black_color,
    fontSize: SF(16),
    fontFamily: Fonts.Font_Medium,
  },
  searchcancelText: {
    color: colors.primary_color,
  },
  searchtagContainer: {
    flexDirection: "column",
    flexWrap: "wrap",
    gap: 10
  },
  searchtagRowContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  searchtag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.bright_gray01,
    borderRadius: 20,
    margin: 5,
  },

  searchtagFlex: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: colors.bright_gray01,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5
  },
  searchtagActive: {
    backgroundColor: colors.mint_green_color,
  },
  searchtagText: {
    fontSize: 13,
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_Medium
  },
  searchtagTextActive: {
    color: colors.white_to_black_color,
    fontFamily: Fonts.Font_SemiBold
  },

  // check out style


  checkoutcarInnerRow: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 10
  },
  checkoutcardRow: {
    backgroundColor: colors.white_to_black_color,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  checkoutimageRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    backgroundColor: colors.bright_gray01,
    padding: 5,
    borderRadius: 10
  },
  checkoutaddrTitle: {
    fontSize: 14,
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color
  },
  checkouttagTitle: {
    backgroundColor: '#faf6eaff',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 0,
    fontSize: 12,
    color: colors.light_black
  },
  checkoutaddrText: {
    marginTop: 5,
    color: colors.light_black,
    fontSize: 13,
    fontFamily: Fonts.Font_Regular
  },
  checkoutchangeBtn: {
    marginTop: 10,
    backgroundColor: colors.tea_green_color,
    paddingHorizontal: 13,
    paddingVertical: 8,
    borderRadius: 8,
    alignItems: "center",
    alignSelf: 'flex-start'
  },
  checkoutchangeText: {
    color: colors.primary_color,
    fontFamily: Fonts.Font_SemiBold,
    fontSize: 13
  },

  checkoutpayRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    borderColor: colors.bright_gray,
    borderWidth: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    backgroundColor: colors.white_to_black_color,
    paddingVertical: 5,
    marginBottom: 10
  },

  checkoutbottomBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    backgroundColor: colors.white_to_black_color,
    borderTopWidth: 1,
    borderColor: colors.bright_gray,
    alignItems: "center",
  },
  flexDirectiong10: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 10
  },

  oldPriceSmall: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(11),
    color: colors.light_black,
    flexShrink: 1,
    textDecorationLine: 'line-through',
  },
  basketImage: {
    height: 50,
    width: 50
  },
  // success style
  fullBgImage: {
    position: 'absolute',
    height: '100%',
    left: 0,
    right: 0,
    resizeMode: 'cover',
    opacity: 0.5,
  },
  successMainView: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: "100%", width: '100%'
  },
  succesInnernView: {
    alignItems: 'center',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: "100%"
  },
  succesInnernTopView: {
    alignItems: 'center',
    width: '100%',
    flex: 1,
    justifyContent: 'center'
  },

  // My Order style

  myOrderhorizontalImg: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 10,
    backgroundColor: colors.bright_gray01,
    resizeMode: 'cover',
  },
  myOrdercard: {
    backgroundColor: colors.white_to_black_color,
    borderRadius: 12,
    padding: 15,
    elevation: 3,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    marginLeft: COMMON_PADDING,
    marginRight: COMMON_PADDING,
    marginBottom: 10
  },

  myOrderrow: {
    flexDirection: "row",
    alignItems: "center",
  },

  myOrderrowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.bright_gray01,
    paddingVertical: 5,
    alignItems: 'center'
  },

  myOrderimage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  myOrderproduct: {
    fontSize: 15,
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color
  },
  myOrderproductItem: {
    fontSize: 12,
    fontFamily: Fonts.Font_SemiBold,
    color: colors.light_black,
  },

  myOrderorderId: {
    color: colors.light_black,
    fontSize: 12,
    fontFamily: Fonts.Font_Regular
  },

  myOrderprice: {
    fontSize: 16,
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color
  },

  myOrderstatusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 20,
  },

  myOrderstatusText: {
    fontSize: 12,
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black
  },

  myOrderdate: {
    fontSize: 12,
    color: colors.light_black,
    fontFamily: Fonts.Font_Regular
  },

  myOrderactionRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  myOrderviewBtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderColor: colors.primary_color,
    borderWidth: 1,
    borderRadius: 8,
  },

  myOrderviewText: {
    color: colors.primary_color,
    fontFamily: Fonts.Font_SemiBold,
    fontSize: 13
  },

  myOrderreorderBtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: colors.primary_color,
    borderRadius: 8,
  },

  myOrderreorderText: {
    color: colors.white,
    fontFamily: Fonts.Font_SemiBold,
    fontSize: 13
  },
  myOrderreOrderBanner: {
    borderRadius: 10,
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    alignSelf: 'center'
  },

  // Track Order Style

  trackorderId: {
    fontSize: SF(13),
    color: colors.light_black,
    fontFamily: Fonts.Font_SemiBold
  },

  trackOrderestimateBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.tea_green_light_color,
    padding: 12,
    borderRadius: 10,
    gap: 10,
  },

  trackOrdereestimateLabel: {
    fontSize: SF(13),
    color: colors.light_black,
    fontFamily: Fonts.Font_Medium
  },

  trackOrdereestimateDate: {
    fontSize: SF(15),
    color: colors.primary_color,
    fontFamily: Fonts.Font_SemiBold
  },

  trackOrderesectionTitle: {
    fontSize: SF(16),
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_Bold
  },

  // TIMELINE
  trackOrderetimelineRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  trackOrderedotActive: {
    width: 20,
    height: 20,
    backgroundColor: colors.primary_color,
    borderRadius: '100%',
    borderWidth: 4,
    marginTop: SF(2),
    borderColor: colors.tea_green_color
  },

  trackOrderedotInactive: {
    width: 20,
    height: 20,
    backgroundColor: colors.gray,
    borderRadius: '100%',
    borderWidth: 4,
    marginTop: SF(2),
    borderColor: colors.light_gray
  },

  trackOrderetimelineLine: {
    height: 40,
    width: 2,
    backgroundColor: colors.light_gray,
    position: "absolute",
    top: 20,
    left: 10,
  },

  trackOrderetimelineContent: {
    marginLeft: 20,
  },

  trackOrderetimelineTextActive: {
    fontSize: SF(14),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color,
  },

  trackOrderetimelineText: {
    fontSize: SF(14),
    color: colors.gray,
    fontFamily: Fonts.Font_Medium,
  },

  trackOrderetimelineTime: {
    fontSize: SF(12),
    color: colors.light_black,
    marginTop: 3,
  },

  // DELIVERY BOY
  trackOrderedeliveryRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  trackOrderedeliveryImg: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },

  trackOrderedeliveryName: {
    fontSize: SF(15),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color,
  },

  trackOrderedeliveryPhone: {
    fontSize: SF(13),
    color: colors.gray,
    fontFamily: Fonts.Font_Regular
  },

  trackOrderecallBtn: {
    backgroundColor: colors.primary_color,
    padding: 12,
    borderRadius: 50,
  },

  trackOrderehelpBtn: {
    backgroundColor: colors.background_color,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },

  trackOrderehelpText: {
    fontSize: SF(15),
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_SemiBold
  },

  // Chat style
  chatInputView: {
    flexDirection: "row",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: colors.bright_gray_dark,
  },
  chatInput: {
    flex: 1,
    backgroundColor: colors.bright_gray01,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color:colors.black_to_white_color
  },
  chatButton: {
    backgroundColor: colors.primary_color,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 25,
    marginLeft: 10,
    justifyContent: "center",
  },
  chatButtontxt: {
    color: colors.white,
    fontFamily: Fonts.Font_SemiBold,
    fontSize: 14
  },

  chatView: {
    marginVertical: 6,
    flexDirection: "row",
  },
  chatInnerView: {
    padding: 10,
    borderRadius: 12,
    maxWidth: "70%",
  },
  chatTimeText: {
    marginTop: 4,
    fontSize: 10,
    textAlign: "right",
    fontFamily: Fonts.Font_Regular
  },
  chatText: {
    fontFamily: Fonts.Font_Medium,
    fontSize: 13
  },

  // Review style 

  // PRODUCT BOX
  reviewproductBox: {
    flexDirection: "row",
    backgroundColor: colors.white_to_black_color,
    padding: 15,
    borderRadius: 12,
    elevation: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  reviewproductImage: {
    height: 80,
    width: 80,
    borderRadius: 10,
    marginRight: 15,
    backgroundColor: colors.bright_gray,
    padding: 10
  },
  reviewproductName: {
    fontSize: 15,
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color
  },
  reviewproductBrand: {
    fontSize: 13,
    color: colors.light_black,
    fontFamily: Fonts.Font_Medium,

  },

  reviewsectionTitle: {
    fontSize: 15,
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color,
  },

  reviewsectionSmallTitle: {
    fontSize: 14,
    fontFamily: Fonts.Font_Medium,
    color: colors.light_black,
  },
  // REVIEW INPUT
  reviewinput: {
    backgroundColor: colors.white_to_black_color,
    minHeight: 130,
    borderRadius: 12,
    padding: 12,
    textAlignVertical: "top",
    fontSize: 14,
    elevation: 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_Regular
  },

  // IMAGES
  reviewimageRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  reviewaddImageBtn: {
    height: 80,
    width: 80,
    backgroundColor: colors.bright_gray,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

})
);