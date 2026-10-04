import { StyleSheet } from 'react-native';
import { SF, SH, SW } from '../../helper';
import { COMMON_PADDING, Fonts } from '../../constants';

export default StyleSheet.create((Colors)=>({
    commonPadding: {
        paddingHorizontal:SW(COMMON_PADDING)
    },
    modalLayer: {
        backgroundColor: Colors.layer_black,
        height: '100%',
        flexDirection: 'row',
        alignItems:'flex-end',
        justifyContent:'center'
    },
    modalCenteredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalInnerView: {
        width:'100%',
        backgroundColor:Colors.transparent,
    },
     modalInnerFillView: {
        width:'100%',
        backgroundColor:Colors.white_to_black_color,
         borderTopLeftRadius: SW(20),
            borderTopRightRadius: SW(20),
    },
    modalMaskView:{
        backgroundColor:Colors.white_to_black_color,
        width:'100%',
        borderTopEndRadius:'80%',
        borderTopStartRadius:'80%',
        position:'absolute',
        height:'100%',
        left:0,
        right:0,
        top:SH(-30),
        transform:[{scaleX:2.4}]
    },
    buttonmainview: {
        flexDirection: 'column',
        justifyContent: "center",
        width:'100%'
    },
 
    messageText: {
        color: Colors.black_to_white_color,
        fontSize: SF(18),
        textAlign: 'center',
        fontFamily:Fonts.Font_SemiBold
    },
     messageDesc: {
        color: Colors.gray,
        fontSize: SF(15),
        textAlign: 'center',
        fontFamily:Fonts.Font_Medium
    },
    buttonWidth:{
        width:'45%',
    },
    icon:{
        height:SH(100),
        alignSelf:'center'
    }
})
);