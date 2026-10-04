import { StyleSheet } from 'react-native';
import { SF, SH, SW } from '../../helper';
import { Fonts, TAB_BAR_HEIGHT } from '../../constants';

export default StyleSheet.create((colors) => ({
  cardContainer: {
    backgroundColor: colors.white_to_black_color,
    borderWidth: 1,
    borderColor: colors.light_gray,
    borderRadius: SW(10),
    position: 'relative',
    marginBottom: SH(20),
  },

  /* ---- Left cut ---- */
  leftCut: {
    backgroundColor: colors.background_white_color,
    borderWidth: 1,
    borderColor: colors.light_gray,
    height: SW(36),
    width: SW(36),
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -18 }],
    borderRadius: SW(36),
    left: -18,
    justifyContent: 'center',
    alignItems: 'flex-start',
    zIndex: 1,
  },
  leftCutMask: {
    backgroundColor: colors.white_to_black_color,
    height: '110%',
    width: '50%',
    left: -1,
  },

  /* ---- Right cut ---- */
  rightCut: {
    backgroundColor: colors.background_white_color,
    borderWidth: 1,
    borderColor: colors.light_gray,
    height: SW(36),
    width: SW(36),
    position: 'absolute',
    top: '50%',
    transform: [{ translateY: -18 }],
    borderRadius: SW(36),
    right: -18,
    justifyContent: 'center',
    alignItems: 'flex-end',
    zIndex: 1,
  },
  rightCutMask: {
    backgroundColor: colors.white_to_black_color,
    height: '110%',
    width: '50%',
    right: -1,
  },

  contentWrapper: {
    overflow: 'hidden',
  },

  cardContent: {
    paddingVertical: SH(15),
    paddingHorizontal: SW(30),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  textSection: {
    flexShrink: 1,
    paddingRight: 5,
  },

  couponCode: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(15),
    color: colors.black_to_white_color,
    textTransform: 'uppercase',
  },

  unlockText: {
    fontFamily: Fonts.Font_Medium,
    fontSize: SF(11),
    color: colors.black_to_white_color,
  },

  offerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: SW(8),
  },

  offerText: {
    fontFamily: Fonts.Font_SemiBold,
    fontSize: SF(15),
    color: colors.black_to_white_color,
  },
 offerTextBig: {
    fontSize: SF(18),
    color: colors.black,

  },
  separator: {
    borderLeftWidth: 1,
    borderStyle: 'dashed',
    borderColor: colors.light_gray,
    height: '100%',
    width: SW(5),
  },

  image: {
    width: SW(80),
    height: SW(80),
    resizeMode: 'contain',
  },

  redeemSection: {
    backgroundColor: colors.mint_white,
    paddingVertical: SW(10),
    paddingHorizontal: SW(10),
    borderBottomEndRadius: SW(10),
    borderBottomStartRadius: SW(10),
  },

  redeemText: {
    fontFamily: Fonts.Font_Bold,
    fontSize: SF(15),
    color: colors.primary_color,
    textAlign: 'center',
  },
  cardContentColumn: {
    paddingHorizontal: SW(30),
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingVertical: 0
  },
  offerView: {
    width: '100%',
    flexDirection: 'row', justifyContent: 'center', gap: SW(5),
    backgroundColor: colors.tea_green_light_color,
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: SH(5),
    paddingHorizontal: SW(5),
    borderRadius: SW(5)
  }
})
);