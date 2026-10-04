import { StyleSheet} from 'react-native';
import { SF, SH, SW } from '../../helper';
import { COMMON_PADDING, Fonts } from '../../constants';

export default StyleSheet.create((colors)=>({
    container:{
        height:'100%',
        flexDirection:"column",
        justifyContent:'space-between',
    },
    ListMainView:{
        paddingVertical:SH(10),
        borderBottomWidth:1,
        borderColor:colors.bright_gray,
        marginBottom:5
    },
    flexRowView:{
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    flexRowText:{
        color:colors.black_to_white_color, 
        paddingLeft:SW(COMMON_PADDING), 
        fontSize:SF(15), 
        fontFamily:Fonts.Font_Medium
    },
    lableText:{ 
        color: colors.black_to_white_color, 
        fontSize: SF(15), 
        fontFamily:Fonts.Font_SemiBold 
    }
})
);