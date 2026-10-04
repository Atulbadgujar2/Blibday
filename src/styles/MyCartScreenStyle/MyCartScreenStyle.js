import { StyleSheet } from 'react-native';
import { SF, SH, SW } from '../../helper';
import { COMMON_PADDING, Fonts, TAB_BAR_HEIGHT } from '../../constants';

export default StyleSheet.create((colors) => ({
  fullBgImage: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: -1
  },
   layerView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    zIndex: -1,
    backgroundColor: colors.rgbview_color,
  },
  container: {
    paddingHorizontal: (COMMON_PADDING),
    width: '100%',
  },
  card: {
    backgroundColor: colors.cultured,
    padding: SW(8),
    borderRadius: SW(15),
    borderWidth: SW(4),
    borderColor: colors.white_to_black_color,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: SW(10),
  },
  imageContainer: {
    width: SW(100),
    height: SW(100),
    backgroundColor: colors.white_to_black_color,
    borderRadius: SW(15),
    padding: SW(10),
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
  image: {
    height: '100%',
    width: '100%',
    borderRadius: SW(10),
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(15),
    color: colors.black_to_white_color,
  },
  subtitle: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(10),
    color: colors.black_to_white_color,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SW(10),
  },
  price: {
    fontFamily: Fonts.Font_Bold,
    fontSize: SF(15),
    color: colors.primary_color,
    flexShrink: 1,
  },
  oldPrice: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(15),
    color: colors.gray,
    flexShrink: 1,
    textDecorationLine: 'line-through',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  saveLater: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(13),
    color: colors.black_to_white_color,
    flexShrink: 1,
  },
  qtyContainer: {
    flexDirection: 'row',
    gap: SW(10),
    backgroundColor: colors.white_to_black_color,
    borderRadius: SW(20),
    padding: SW(2),
    alignSelf: 'flex-end',
  },
  qtyBtnMinus: {
    width: SW(25),
    height: SW(25),
    backgroundColor: colors.mint_white,
    borderRadius: SW(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyBtnPlus: {
    width: SW(25),
    height: SW(25),
    backgroundColor: colors.mint_green_color,
    borderRadius: SW(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  qtyCountContainer: {
    minWidth: SW(20),
  },
  qtyText: {
    fontFamily: Fonts.Font_Bold,
    fontSize: SF(15),
    color: colors.black_to_white_color,
    textAlign: 'center',
  },
  rightActionContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: SW(20),
  },
  deleteButton: {
    backgroundColor: colors.red_light_color,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: SW(10),
    height: '100%',
    paddingHorizontal: SW(20),
    paddingVertical: SH(10)
  },

  // Bottom Summary
  bottomContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: colors.white_to_black_color,
    bottom: SH(TAB_BAR_HEIGHT),
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SW(10),
    paddingHorizontal: SW(20)
  },
  summaryContainerRow: {
    backgroundColor: colors.white_to_black_color,
    paddingVertical: SW(10),
    borderRadius: SW(10),
    elevation: 5,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 0 },
     shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryMainLabel: {
    fontFamily: Fonts.Font_SemiBold,
    color: colors.black_to_white_color,
    fontSize: SF(15)
  },
  summaryLabel: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(14),
    color: colors.gray,
  },
  summaryValue: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(14),
    color: colors.black_to_white_color,
  },
  discountValue: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(14),
    color: 'green',
  },
  divider: {
    borderBottomColor: '#e0e0e0',
    borderBottomWidth: 1,
    marginVertical: 8,
  },
  totalLabel: {
    fontFamily: Fonts.Font_Bold,
    fontSize: SF(16),
    color: colors.black_to_white_color,
  },
  totalValue: {
    fontFamily: Fonts.Font_Bold,
    fontSize: SF(16),
    color: colors.primary_color,
  },
  orderText: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(15),
    color: colors.secondary_color
  },
  promoCodeView: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white_to_black_color,
    borderRadius: SW(10),
    paddingVertical: SH(4),
    paddingHorizontal: SW(4),
    elevation: 5,
    shadowColor: colors.gray,
    shadowOffset: { width: 0, height: 0 },
     shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  promoCodinput: {
    flex: 1,
    paddingHorizontal: SW(15),
    paddingVertical: SW(12),
    fontSize: SF(16),
    color: colors.black_to_white_color,
    fontFamily: Fonts.Font_Medium
  },

  promoCodButtonView: {
    backgroundColor: colors.primary_color,
    paddingVertical: SW(12),
    paddingHorizontal: SW(20),
    justifyContent: 'center',
    borderRadius: SW(10)
  },

  promoCodButtonText: {
    color: colors.white,
    fontSize: SF(16),
    fontFamily: Fonts.Font_Medium
  },
  saveOrderView: {
    flexDirection: 'row', justifyContent: 'center', gap: SW(5),
    backgroundColor: colors.tea_green_light_color,
    width: 'auto',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: SH(5),
    paddingHorizontal: SW(5),
    borderRadius: SW(5)
  },
  saveOrderText: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(15),
    color: colors.pine_green_color
  },
  bottomFix: {
    bottom: SH(TAB_BAR_HEIGHT * 2),
    height: 1,
    elevation: 20,
    shadowOffset: { width: 0, height: 0 },
     shadowOpacity: 0.3,
    shadowRadius: 3,
    shadowColor: colors.black_to_white_color,
    position: 'absolute',
    left: 0,
    right: 0,
    backgroundColor: colors.white_to_black_color,
  },
  placeOrderBtn: {
    backgroundColor: colors.secondary_color,
    height: SH(40),
    paddingHorizontal: SW(20)
  }
})
);