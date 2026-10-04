import { StyleSheet } from 'react-native';
import { SCREEN_WIDTH, SF, SH, SW } from '../../helper';
import { CATEGORY_BOX_PADDING, Fonts, TAB_BAR_HEIGHT } from '../../constants';

export default StyleSheet.create((colors) => ({
  topSellitemGap: {
    width: 10,
  },
  headerIcon: {
    backgroundColor: colors.white_to_black_color,
    borderWidth: 0,
    elevation: 2,
    shadowColor: colors.black_to_white_color,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1,
  },
  headerActionRight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10
  },
  contentWrapper: {
    backgroundColor: colors.white_to_black_color,
    paddingHorizontal: 5
  },
  productTitle: {
    textAlign: "left",
    fontSize: SF(17),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color
  },
  productSubtitle: {
    textAlign: "left",
    fontSize: SF(17),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color
  },
  priceWrapper: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', gap: 20 },
  priceText: {
    textAlign: "left",
    fontSize: SF(22),
    fontFamily: Fonts.Font_Bold,
    color: colors.primary_color,
  },
  oldPriceText: {
    textDecorationLine: 'line-through',
    textAlign: "left",
    fontSize: SF(16),
    fontFamily: Fonts.Font_Medium,
    color: colors.gray
  },
  discountBtn: {
    gap: SW(5),
    backgroundColor: colors.tea_green_light_color,
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: SH(5),
    paddingHorizontal: SW(15),
    borderRadius: SW(5),
    alignSelf: 'flex-start'
  },
  discountText: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(15),
    color: colors.pine_green_color
  },
  hr: {
    borderBottomColor: colors.bright_gray01,
    borderBottomWidth: 1,

  },
  sectionTitle: {
    textAlign: "left",
    fontSize: SF(16),
    lineHeight: SF(18),
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color
  },
  descriptionText: {
    textAlign: "left",
    fontSize: SF(14),
    lineHeight: SF(18),
    fontFamily: Fonts.Font_Medium,
    color: colors.light_black
  },
  totalRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 15
  },
  totalRatingValue: {
    textAlign: "left",
    fontSize: SF(30),
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color
  },
  totalReviewCount: {
    textAlign: "left",
    fontSize: SF(14),
    fontFamily: Fonts.Font_Medium,
    color: colors.light_black
  },
  reviewContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: 15,
    marginBottom: 20,
    borderBottomColor: colors.background_color,
    borderBottomWidth: 1,
    paddingBottom: 20,
  },

  reviewLeftWrapper: {
    flex: 1,
  },

  reviewHeaderRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 5,
  },

  reviewName: {
    textAlign: "left",
    fontSize: SF(15),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color,
  },

  reviewDate: {
    textAlign: "left",
    fontSize: SF(12),
    fontFamily: Fonts.Font_Medium,
    color: colors.gray,
  },

  reviewText: {
    textAlign: "left",
    fontSize: SF(14),
    fontFamily: Fonts.Font_Medium,
    color: colors.light_black,
  },

  reviewImageRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },

  reviewImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
    backgroundColor: colors.background_color,
  },
  productMainStyle: {
    width: 180,
    borderWidth: 0.5,
    borderColor: colors.tea_green_color
  },
  productImageSlideView: {
    backgroundColor: colors.white_to_black_color,
    borderRadius: 20,
    flex: 1,
    // overflow: 'hidden',
    alignItems: 'center',
    elevation: 3,
    shadowColor: colors.black_to_white_color,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.30,
    shadowRadius: 1,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  sponsoredView: {
    borderRadius: 20,
    flex: 1,
    overflow: 'hidden',
    width: '100%',
    alignSelf: 'center'
  },
  bottomWrapper: {
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 50,
    backgroundColor: colors.mint_dark_white,
  },

  totalPriceBox: {
    borderRightWidth: 1,
    borderColor: colors.tea_green_color,
    paddingRight: 40,
  },

  totalPriceLabel: {
    textAlign: "center",
    fontSize: SF(12),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.light_black,
  },

  totalPriceValue: {
    textAlign: "center",
    fontSize: SF(15),
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color,
  },

  qtyWrapper: {
    backgroundColor: colors.primary_color,
    borderTopColor: colors.bright_gray,
    borderTopWidth: 0.5,
    paddingVertical: 0,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    borderRadius: 10,
    flex: 1,
    height:52
  },

  qtyBtnMinus: {
    padding: 5,
  },

  qtyBtnPlus: {
    padding: 5,
  },

  qtyCountContainer: {
    paddingHorizontal: 10,
  },

  qtyText: {
    textAlign: "center",
    fontSize: SF(15),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.white_to_black_color,
  },

  addToCartBtn: {
    backgroundColor: colors.primary_color,
    borderTopColor: colors.bright_gray,
    borderTopWidth: 0.5,
    paddingVertical: 0,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderRadius: 10,
    flex: 1,
    height:52
  },

  addToCartText: {
    textAlign: "center",
    fontSize: SF(15),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.white,
  },
})
);