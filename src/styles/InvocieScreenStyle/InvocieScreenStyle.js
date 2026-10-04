import { StyleSheet } from 'react-native';
import { Fonts } from '../../constants';

export default StyleSheet.create((colors)=>({
 header: {
    backgroundColor: colors.primary_color,
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontFamily:Fonts.Font_SemiBold,
    color: colors.white,
  },
  invNo: {
    color: colors.white,
    marginTop: 8,
    fontSize: 13,
    fontFamily:Fonts.Font_Medium
  },
  date: {
    color: colors.white,
    fontSize: 13,
    fontFamily:Fonts.Font_Medium,
    marginTop: 4,
  },
  block: {
    backgroundColor: colors.white_to_black_color,
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
    elevation: 2,
     shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },

  blockProduct: {
    backgroundColor: colors.white_to_black_color,
    marginBottom: 20
  },
  sectionTitle: {
    fontSize: 15,
    fontFamily:Fonts.Font_Bold,
    marginBottom: 10,
    color:colors.black_to_white_color
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  small: {
    color: colors.light_black,
    fontSize: 13,
    fontFamily:Fonts.Font_Regular
  },
  divider: {
    height: 1,
    backgroundColor: colors.bright_gray,
    marginVertical: 8,
  },
  total: {
    fontSize: 16,
    fontFamily: Fonts.Font_Bold,
    color: colors.primary_color,
  },
  text: {
    fontSize: 13,
    color:colors.black_to_white_color,
    marginBottom: 6,
    fontFamily:Fonts.Font_Regular
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
    color: colors.gray,
    fontFamily:Fonts.Font_Medium,
    fontSize: 14,
  },
  downloadBtn: {
    backgroundColor: colors.pine_green_color,
    padding: 15,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  downloadText: {
    color: colors.white,
    fontSize: 15,
    fontFamily:Fonts.Font_SemiBold
  },
})
);