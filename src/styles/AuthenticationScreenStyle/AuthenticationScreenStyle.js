import { StyleSheet } from 'react-native';
import { SF, SH, SW } from '../../helper';
import { COMMON_PADDING, Fonts } from '../../constants';
// SIGNIN, SIGNUP, EDIT PROFILE, FORGOT PASSWORD,  ======******** STYLES ********======
export default StyleSheet.create((colors) => ({
    container: {
        height: '100%',
        flexDirection: "column",
        justifyContent: 'space-between',
        justifyContent: 'center'
    },
    topLogoMainBox: {
        paddingHorizontal: SW(COMMON_PADDING)
    },
    logoText: {
        fontSize: SF(14),
        color: colors.black_to_white_color,
        textAlign: 'left',
        fontFamily: Fonts.Font_Medium
    },
    logoTextBig: {
        fontSize: SF(25),
        color: colors.pine_green_color,
        textAlign: 'left',
        fontFamily: Fonts.Font_Bold
    },
    logoTextSmall: {
        fontSize: SF(14),
        color: colors.black_to_white_color,
        fontFamily: Fonts.Font_Medium,
        textAlign: 'center'
    },
    formMainView: {
        paddingHorizontal: SW(COMMON_PADDING)
    },
    dividerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: colors.light_gray,
    },
    dividerText: {
        marginHorizontal: SW(8),
        backgroundColor: colors.white_to_black_color,
        paddingHorizontal: SW(8),
        fontSize: SF(14),
        color: colors.light_black,
        fontFamily: Fonts.Font_Regular,
    },
    socialButtonsContainer: {
        gap: SW(30),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    socialButton: {
        width: 'auto',
        width: SH(65),
        height: SH(65),
        borderWidth: SH(1),
        padding: SH(17),
        borderRadius: '100%',
        borderColor: colors.gainsboro
    },
    icon: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    scrollview: {
        flexGrow: 1,
        justifyContent: "center",
    },
    notRegisterView: {
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        verticalAlign: 'middle'
    },
    notRegisterText: {
        fontSize: SF(15),
        color: colors.black_to_white_color,
        fontFamily: Fonts.Font_Medium
    },
    notRegisterBoldText: {
        fontSize: SF(15),
        color: colors.primary_color,
        fontFamily: Fonts.Font_SemiBold,
        textDecorationLine: 'underline',
    },
    forgotText: {
        fontSize: SF(15),
        color: colors.black_to_white_color,
        fontFamily: Fonts.Font_Medium,
        textAlign: 'left',
        textDecorationLine: 'underline',
    },
    forgotView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    logoTextIcon: {
        width: SW(27),
        height: SW(27)
    },
    textCenter: {
        textAlign: 'center'
    },
    termsView: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        gap: 3
    },
    textPrimary: {
        color: colors.secondary_color
    },
    textBlack: {
        color: colors.black_to_white_color
    },
// EDIT PROFILE START ======********
    genderMainView: {
        backgroundColor: colors.white_to_black_color,
        width: SW(115),
        height: SW(115),
        borderRadius: SW(115),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    genderSwapView: {
        position: 'absolute',
        bottom: '10%',
        right: 0,
        zIndex: 1,
        backgroundColor: colors.mint_green_color,
        width: SW(30),
        height: SW(30),
        borderRadius: SW(30),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    genderIconView: {
        backgroundColor: colors.white_to_black_color,
        width: SW(117),
        height: SW(117),
        borderRadius: SW(115),
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderColor: colors.mint_green_color,
        borderWidth: 2
    },
    genderFullName: {
        color: colors.black_to_white_color,
        fontSize: SF(19),
        textAlign: 'center',
        fontFamily: Fonts.Font_Regular
    }
// EDIT PROFILE END ======********

})
);