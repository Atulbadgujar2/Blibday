import { StyleSheet } from 'react-native';
import { SF, SH, SW } from '../../helper';
import { Fonts } from '../../constants';

export default StyleSheet.create((colors) => ({
  addresBoxView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: SH(18),
    paddingHorizontal: SW(18),
    borderRadius: SH(18),
    elevation: 10,
    shadowColor: colors.black_to_white_color,
    backgroundColor: colors.cultured,
    gap: 10,
    overflow: 'hidden',
    borderColor: colors.primary_color
  },
  addresActiveView: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SW(30),
    paddingTop: SH(10),
    paddingBottom: SH(5),
    borderRadius: 0,
    backgroundColor: colors.primary_color,
    position: 'absolute',
    right: -35,
    top: 0,
    transform: [{ rotate: '50deg' }],
    zIndex: 1,
  },
  addresActiveText: {
    color: colors.white_to_black_color,
    fontFamily: Fonts.Font_Bold,
    fontSize: SF(9),
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  addresBoxViewIcon: {
    padding: 12,
    backgroundColor: colors.tea_green_color,
    borderRadius: 10
  },
  addresBoxTag: {
    color: colors.black_to_white_color,
    fontSize: SF(15),
    fontFamily: Fonts.Font_SemiBold
  },
  addresText: {
    color: colors.gray,
    fontSize: SF(12),
    fontFamily: Fonts.Font_Medium
  },
  addAddressButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: SH(15),
    paddingHorizontal: SW(18),
    borderRadius: SH(15),
    backgroundColor: colors.light_gray_01,
    gap: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.mint_green_color,
    borderStyle: 'dashed'
  },
  addAddressButtonText: {
    color: colors.primary_color,
    fontSize: SF(15),
    fontFamily: Fonts.Font_SemiBold
  },
  AddAddressFooter: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white_to_black_color,
    borderTopLeftRadius: SW(20),
    borderTopRightRadius: SW(20),
    padding: SW(15),
    elevation: 10,
    boxShadow: colors.black_to_white_color
  },
  AddAddressDetailsView: {
    backgroundColor: colors.white_to_black_color,
    borderColor: colors.bright_gray,
    borderWidth: 1,
    padding: 15,
    borderRadius: 7
  },
  AddAddressHeadingView: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 5
  },
  AddAddressHeadingText: {
    fontSize: SF(14),
    fontFamily: Fonts.Font_Bold,
    color: colors.black_to_white_color
  },
  AddAddressText: {
    fontSize: SF(13),
    fontFamily: Fonts.Font_Regular,
    color: colors.black_to_white_color
  }
})
);