import { StyleSheet } from 'react-native';
import { SF, SW } from '../../helper';
import { CATEGORY_BOX_PADDING, Fonts } from '../../constants';

export default StyleSheet.create((colors) => ({
  backgroundColorLight: {
    flex: 1,
    backgroundColor: colors.background_color
  },
  categoryContainer: {
    marginBottom: 20,
  },

  categoryTitle: {
    fontFamily: Fonts.Font_Bold,
    fontSize: SF(18),
    textAlign: "left",
    color:colors.black_to_white_color
  },

  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
cardGradient: {
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 18,
    width: "31%",            // 3 boxes per row
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: SW(12),
  },
  cardGradientInner: {
  alignItems:'center',
  justifyContent: "center",
  flexDirection: "column",
  paddingVertical: 5,
    paddingHorizontal: 5,
  },
  card: {
    paddingVertical: 5,
    paddingHorizontal: 5,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 18,
    width: "31%",            // 3 boxes per row
    borderWidth: 1,
    overflow: "hidden",
    marginBottom: SW(12),
  },
  cardImage: {
    maxWidth: "100%",
    height: 70,
    resizeMode: "cover",
  },
  cardTitle: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(13),
    textAlign: "center",
  },

  // Category Product Start


  categoryContainerMain: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.background_color
  },

  //LEFT SIDE START
  leftContainer: {
    width: "25%",               // small left side
    backgroundColor: colors.background_box_color,
  },
  leftCategoryItem: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRightWidth: 3,
    borderRightColor: "transparent",
  },
  leftSideImageView: {
    maxWidth: '100%',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 5,
    borderWidth: 1,
    alignItems: 'center'
  },
  leftSideImage: {
    maxWidth: '100%',
    height: 60,
    resizeMode: 'contain',
  },

  categoryItemActive: {
    backgroundColor: colors.white_to_black_color,
    borderRightColor: colors.mint_green_color,
  },
  categoryText: {
    fontSize: SF(12),
    color: colors.black_to_white_color,
    textAlign: 'center',
    fontFamily: Fonts.Font_Medium
  },

  categoryTextActive: {
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_Black,
  },
  //LEFT SIDE END


  //RIGHT SIDE START
  rightContainer: {
    width: "75%",               // big right side
    backgroundColor: colors.background_color,
  },

  productBox: {
    width: "49.60%",
    padding: 0,
    backgroundColor: colors.background_box_color,
    marginBottom: "0.90%",
    borderRadius: 1
  },
  productText: {
    textAlign: "left",
    fontSize: SF(13),
    fontFamily: Fonts.Font_Medium,
    color: colors.light_black
  },
  productInnerView: {
    maxWidth: '100%',
    resizeMode: 'contain',
    borderRadius: 10,
    paddingVertical: 1,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  productImage: {
    maxWidth: '100%',
    height: 140,
    resizeMode: 'contain',
  },
  productDetailsView: {
    paddingHorizontal: 5
  },
  productPriceText: {
    textAlign: "left",
    fontSize: SF(13),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.primary_color,
  },
  productWeightText: {
    textAlign: "left",
    fontSize: SF(11),
    fontFamily: Fonts.Font_Medium,
    color: colors.gray
  },
  productOldPriceText: {
    textDecorationLine: 'line-through',
    textAlign: "left",
    fontSize: SF(13),
    fontFamily: Fonts.Font_Medium,
    color: colors.light_black

  },
  // SLIDER VIEW
  categoryBannerMainView: {
    width: '100%',
    overflow: "hidden",
    marginLeft: CATEGORY_BOX_PADDING
  },
  categoryBannerView: {
    width: '100%',
    borderRadius: 12,
    overflow: "hidden",
    // marginLeft: 10
  },
  categoryBannerImage: {
    width: "100%",
    height: '100%',
    resizeMode: "cover",
  },

  addCartView: {
    borderTopColor: colors.bright_gray,
    borderTopWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    borderBottomWidth: 3,
    borderBottomColor: colors.tea_green_color
  },
  addCartButtonView: {
    textAlign: "left",
    fontSize: SF(13),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.light_black
  },
  qntView: {
    borderTopColor: colors.bright_gray,
    borderTopWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    borderBottomWidth: 3,
    borderBottomColor: colors.tea_green_color
  },
  qntText: {
    textAlign: "left",
    fontSize: SF(13),
    fontFamily: Fonts.Font_SemiBold,
    color: colors.light_black
  },
  favoriteView: {
    position: 'absolute',
    right: 5,
    top: 5,
    backgroundColor: colors.tea_green_light_color,
    height: 25,
    width: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    flexDirection: 'row',
    paddingTop: 2,
    zIndex: 1
  },
  newProductView: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#FDEFD5',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 3,
    paddingHorizontal: 5,
    zIndex: 1
  },
  newProductText: {
    textAlign: "left",
    fontSize: SF(11),
    fontFamily: Fonts.Font_Medium,
    color: '#E8AD41'
  },
  discountProductView: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: '#FEE4E4',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingVertical: 3,
    paddingHorizontal: 5,
    zIndex: 1
  },
  discountProductText: {
    textAlign: "left",
    fontSize: SF(11),
    fontFamily: Fonts.Font_Medium,
    color: '#F56262'
  },

  smallProductMainView: {
    borderRadius: 30,
    padding: 0,
    backgroundColor: colors.background_box_color,
    borderRadius: 20,
    paddingTop: 60,
    position: 'relative',
  },
  smallProductImageView: {
    maxWidth: '100%',
    backgroundColor: colors.transparent,
    alignItems: 'center',
    top: -70,
    zIndex: 1,
    position: 'absolute',
    left: 0,
    right: 0,
    Width: 130,
    height: 130,
  },

  smallProductPriceView: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10
  },
  smallProductPriceRatView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2
  }
})
);