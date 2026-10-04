import { StyleSheet} from 'react-native';
import { SF, SH, SW } from '../../helper';
import { COMMON_PADDING, Fonts } from '../../constants';

export default StyleSheet.create((Colors) => ({
    container:{
        height:'100%',
        flexDirection:"column",
        justifyContent:'space-between',
    },
    myProfileBannerView: { 
        backgroundColor: Colors.pine_green_color,
        paddingHorizontal:SW(COMMON_PADDING)
    },
    imageSection: {
        flexDirection:'row',
        gap:SW(15), 
        alignItems:'center',
        justifyContent:'space-between'
    },
    imageSectionInner: {
        flexDirection:'row',
        gap:15, 
        alignItems:'center',
        justifyContent:'flex-start'
    },
    myProfileBannerImageInnerView: { 
        backgroundColor: Colors.white_to_black_color, 
        width: SW(50), 
        height: SH(50), 
        borderRadius: '100%', 
        flexDirection: 'row', 
        overflow: 'hidden', 
        alignItems:'flex-end',
         justifyContent:'center'
    },
    myProfileNameText: { 
        color: Colors.white, 
        fontSize: SF(17), 
        textAlign: 'left', 
        fontFamily: Fonts.Font_SemiBold,
    },
    sectionBoxView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    sectionBoxInnerView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center',
        gap:SW(10),
        borderWidth:1,
        padding:SW(10),
        width:'48%',
        borderColor:Colors.light_gray,
        borderRadius:SW(5)
    },
    sectionBoxInnerText:{
        fontFamily:Fonts.Font_Medium,
        color:Colors.black_to_white_color,
        fontSize:SF(15)
    },
    headingText:{
        fontFamily:Fonts.Font_SemiBold,
        fontSize:SF(18),
        color:Colors.black_to_white_color
    },
    listView:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center'
    },
    listLeftView:{
            flexDirection:'row',
            justifyContent:'flex-start',
            alignItems:'center',
            gap:SW(18)
    },
    listLeftText:{
            fontSize:SF(15),
            color:Colors.black_to_white_color,
            fontFamily:Fonts.Font_Regular
    },
    boxShadowView:{
        backgroundColor:Colors.white_to_black_color,
        shadowColor: Colors.black_to_white_color,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        paddingVertical:SH(15),
        paddingHorizontal:SW(COMMON_PADDING)
    },
    boxListMainView:{
        flexDirection:'column',
        gap:SH(10)
    },
    boxListInnerView:{
        flexDirection:'column',
        gap:SH(15)
    },
    logOutView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:SW(10)
    },
    logOutIconView:{
        backgroundColor:Colors.secondary_color,
        width:SW(35),
        height:SW(35),
        borderRadius:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    logOutText:{
        color:Colors.black_to_white_color,
        fontSize:SF(20),
        fontFamily:Fonts.Font_SemiBold
    }
})
);