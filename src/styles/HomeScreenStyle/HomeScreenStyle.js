import { Platform, StyleSheet } from 'react-native';
import { SCREEN_WIDTH, SF, SH, SW } from '../../helper';
import { COMMON_PADDING, Fonts, TAB_BAR_HEIGHT } from '../../constants';

export default StyleSheet.create((colors) => ({
  bigBannerView: {
    borderRadius: 20,
    flex: 1,
    overflow: 'hidden',
    width: SCREEN_WIDTH,
    alignSelf: 'center'
  },
  headerMainContainer: {
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    borderBottomColor: colors.gainsboro,
    borderBottomWidth: 1
  },
  homeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    gap: 5
  },
  homeLocationView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
    flexShrink: 1
  },
  homeRroundView: {
    backgroundColor: colors.white_transparent,
    padding: 7,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: SF(25)
  },
  homeLocationTextView: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexShrink: 1
  },
  homeSmallText: {
    fontFamily: Fonts.Font_Regular,
    fontSize: 12,
    color: colors.black
  },
  homeLocationText: {
    fontFamily: Fonts.Font_Medium,
    fontSize: 12,
    color: colors.black,
    flexShrink: 1
  },
  commonHeaderView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'flex-start',
    gap: 8
  },
  commonHeaderText: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(18),
    textAlign: "left",
    color: colors.black_to_white_color
  },
  commonHeaderSmallText: {
    fontFamily: Fonts.Font_Regular,
    fontSize: SF(13),
    textAlign: "left",
    color: colors.light_black
  },
  commonHeaderIconView: {
    backgroundColor: colors.secondary_light_color,
    paddingHorizontal: 12,
    paddingVertical: 2,
    borderRadius: 12
  },
  categoryOuter: {
     alignItems: 'center',
    alignSelf: 'flex-start',
    padding: 0,
    borderRadius: 60,
    paddingRight: 20,
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'flex-start',
  },

  categoryInner: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 80,
    width: 65,
    height: 65,
    borderWidth: 1,
    overflow: "hidden",
  },

  categoryImage: {
    width: 58,
    height: 58
  },

  categoryText: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(14),
    textAlign: "left",
    color: colors.black
  },


  prevOrderlistContent: {
    margin: 5,
  },

  prevOrderitemSeparator: {
    width: 10,
  },

  prevOrdercard: {
    backgroundColor: colors.background_box_color,
    borderRadius: 15,
    elevation: 3,
     shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 50,
  },

  prevOrderleftContainer: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    flexShrink: 1,
    flex: 8,
    zIndex: 1,
    backgroundColor: colors.background_box_color
  },

  prevOrderdeliveredText: {
    color: colors.primary_color,
    fontFamily: Fonts.Font_Medium,
    fontSize: 12,
  },

  prevOrderdateText: {
    fontFamily: Fonts.Font_Medium,
    fontSize: 12,
    color: colors.black_to_white_color,
    flexShrink: 1,
  },

  prevOrderproductRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.cultured,
    borderRadius: 10,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  prevOrderproductImg: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },

  prevOrdermoreText: {
    flexShrink: 1,
    textAlign: 'center',
    color:colors.black_to_white_color
  },

  prevOrderorderFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },

  prevOrderorderIdText: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: 12,
    color: colors.black_to_white_color,
  },

  prevOrderfinalTotalText: {
    fontFamily: Fonts.Font_Bold,
    fontSize: 17,
    color: colors.black_to_white_color,
  },

  prevOrderorderAgainButton: {
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: colors.primary_color
  },

  prevOrderorderAgainButtonText: {
    fontFamily: Fonts.Font_Medium,
    fontSize: 13,
    color: colors.white,
  },

  prevOrderrightRibbon: {
    alignSelf: "stretch",
    justifyContent: "center",
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 190,
    alignItems: 'flex-start',
    transform: [{ rotate: Platform.OS === "ios" ? '90deg' : '180deg' }],
    zIndex: -1,
    backgroundColor: colors.earthy_brown_color
  },

  prevOrderribbonText: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: 12,
    color: colors.white,
    transform: [{ rotate: '-90deg' }],
    paddingBottom: 140,
  },

  topSellwrapper: {
    paddingHorizontal: COMMON_PADDING,
  },

  topSellshadowBox: {
    elevation: 10,
     shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowColor: colors.primary_color,
    position: 'relative',
    overflow: 'hidden',
  },

  topSellgradientBox: {
    borderRadius: 12,
  },

  topSellbgImage: {
    position: 'absolute',
    opacity: 0.1,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
  },

  topSelltopSellingContainer: {
    paddingVertical: 20,
    paddingLeft: 10,
  },

  topSellheaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  topSellflexShrink: {
    flexShrink: 1,
  },

  topSellproductList: {
    marginTop: 60,
  },

  topSellitemGap: {
    width: 10,
  },
  searchMainView: {

    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.background_box_color,
    borderRadius: SF(30),
    paddingHorizontal: SF(15),
    height: SF(45),
    shadowColor: colors.black,
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 }
  },
  searchInput: {
    flex: 1,
    marginLeft: SF(10),
    fontSize: SF(16),
    color: colors.black,
  },

  smallbannerView: {
    borderRadius: 20,
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    paddingVertical: 10,
    paddingHorizontal: 10
  },
  smallbannerText: {
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color,
    fontSize: SF(16),
    flexShrink: 1,
  },
  paginationDotInner: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  paginationDotOuter: {
    height: SW(6),
    borderRadius: SW(6),
    marginHorizontal: SW(4),
  }
})
);